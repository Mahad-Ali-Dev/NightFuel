import 'dotenv/config';
import Fastify from 'fastify';
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod';
import fastifyJwt from '@fastify/jwt';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import fastifyRateLimit from '@fastify/rate-limit';
import { PrismaClient } from './generated/prisma';
import { RedisEventBus } from '@nightfuel/events';
import { createLogger, loadConfig } from '@nightfuel/config';
import { z } from 'zod';
import { ExerciseService } from './exercise.service';

const envSchema = z.object({
    EXERCISE_PORT: z.string().default('3011'),
    JWT_SECRET: z.string().min(1),
    REDIS_URL: z.string().url(),
});

const config = loadConfig(envSchema);
const logger = createLogger('exercise-service');
const prisma = new PrismaClient();
const eventBus = new RedisEventBus(config.REDIS_URL);
const exerciseSvc = new ExerciseService(prisma, eventBus);

const fastify = Fastify({ logger: false });
fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);

fastify.register(fastifyHelmet);
fastify.register(fastifyRateLimit, { max: 200, timeWindow: '1 minute' });
fastify.register(fastifyCors, {
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
});
fastify.register(fastifyJwt, { secret: config.JWT_SECRET });

fastify.decorate('authenticate', async (request: any, reply: any) => {
    try {
        await request.jwtVerify();
    } catch (err) {
        reply.send(err);
    }
});

// ── Shared exercise body schema ───────────────────────────────────────────────
const exerciseItemSchema = z.object({
    name: z.string().min(1),
    muscleGroup: z.string().optional(),
    sets: z.number().int().positive().optional().nullable(),
    reps: z.number().int().positive().optional().nullable(),
    weightKg: z.number().positive().optional().nullable(),
    distanceKm: z.number().positive().optional().nullable(),
    durationSecs: z.number().int().positive().optional().nullable(),
    restSecs: z.number().int().positive().optional().nullable(),
    order: z.number().int().optional(),
});

const createWorkoutSchema = z.object({
    type: z.string(),
    title: z.string().min(1),
    duration: z.number().int().positive(),
    intensity: z.string(),
    splitType: z.string().optional().nullable(),
    muscleGroups: z.array(z.string()).optional(),
    caloriesBurned: z.number().int().positive().optional().nullable(),
    notes: z.string().max(1000).optional().nullable(),
    scheduledAt: z.string().datetime().optional().nullable(),
    completedAt: z.string().datetime().optional().nullable(),
    exercises: z.array(exerciseItemSchema).min(1),
});

// ── Routes ────────────────────────────────────────────────────────────────────

fastify.get('/health', async () => ({ status: 'ok', service: 'exercise-service' }));

// GET /v1/exercises/library?query=...
fastify.withTypeProvider<ZodTypeProvider>().get('/v1/exercises/library', {
    onRequest: [(fastify as any).authenticate],
    schema: {
        querystring: z.object({
            query: z.string().optional(),
            equipment: z.string().optional(),
            muscleGroup: z.string().optional(),
            limit: z.coerce.number().int().min(1).max(50).default(10)
        })
    },
}, async (request, reply) => {
    try {
        const { query, equipment, muscleGroup, limit } = request.query;
        return reply.send(await exerciseSvc.searchLibrary({ query, equipment, muscleGroup }, limit));
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

// GET /v1/exercises?limit=20
fastify.withTypeProvider<ZodTypeProvider>().get('/v1/exercises', {
    onRequest: [(fastify as any).authenticate],
    schema: { querystring: z.object({ limit: z.coerce.number().int().min(1).max(100).default(20) }) },
}, async (request, reply) => {
    try {
        const userId = (request.user as any).userId ?? (request.user as any).id;
        const { limit } = request.query;
        return reply.send(await exerciseSvc.listWorkouts(userId, limit));
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

// GET /v1/exercises/:id
fastify.withTypeProvider<ZodTypeProvider>().get('/v1/exercises/:id', {
    onRequest: [(fastify as any).authenticate],
    schema: { params: z.object({ id: z.string().uuid() }) },
}, async (request, reply) => {
    try {
        const userId = (request.user as any).userId ?? (request.user as any).id;
        const { id } = request.params;
        const workout = await exerciseSvc.getWorkout(id, userId);
        if (!workout) return reply.code(404).send({ error: 'Workout not found' });
        return reply.send(workout);
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

// POST /v1/exercises
fastify.withTypeProvider<ZodTypeProvider>().post('/v1/exercises', {
    onRequest: [(fastify as any).authenticate],
    schema: { body: createWorkoutSchema },
}, async (request, reply) => {
    try {
        const userId = (request.user as any).userId ?? (request.user as any).id;
        const workout = await exerciseSvc.createWorkout({ ...request.body, userId });
        return reply.code(201).send(workout);
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

// DELETE /v1/exercises/:id
fastify.withTypeProvider<ZodTypeProvider>().delete('/v1/exercises/:id', {
    onRequest: [(fastify as any).authenticate],
    schema: { params: z.object({ id: z.string().uuid() }) },
}, async (request, reply) => {
    try {
        const userId = (request.user as any).userId ?? (request.user as any).id;
        const { id } = request.params;
        const deleted = await exerciseSvc.deleteWorkout(id, userId);
        if (!deleted) return reply.code(404).send({ error: 'Workout not found' });
        return reply.code(204).send();
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

// ── Heatmap & Analytics ───────────────────────────────────────────────────────

fastify.withTypeProvider<ZodTypeProvider>().get('/v1/exercises/history/heatmap', {
    onRequest: [(fastify as any).authenticate],
}, async (request, reply) => {
    try {
        const userId = (request.user as any).userId ?? (request.user as any).id;
        return reply.send(await exerciseSvc.getHeatmap(userId));
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

fastify.withTypeProvider<ZodTypeProvider>().get('/v1/exercises/analytics/:exerciseName', {
    onRequest: [(fastify as any).authenticate],
    schema: { params: z.object({ exerciseName: z.string().min(1) }) },
}, async (request, reply) => {
    try {
        const userId = (request.user as any).userId ?? (request.user as any).id;
        const { exerciseName } = request.params;
        return reply.send(await exerciseSvc.getExerciseAnalytics(userId, exerciseName));
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

// ── Routines ──────────────────────────────────────────────────────────────────

const createRoutineSchema = z.object({
    title: z.string().min(1),
    description: z.string().optional().nullable(),
    splitType: z.string().optional().nullable(),
    muscleGroups: z.array(z.string()).optional(),
    exercises: z.array(z.any()),
});

fastify.withTypeProvider<ZodTypeProvider>().get('/v1/exercises/routines', {
    onRequest: [(fastify as any).authenticate],
}, async (request, reply) => {
    try {
        const userId = (request.user as any).userId ?? (request.user as any).id;
        return reply.send(await exerciseSvc.getRoutines(userId));
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

fastify.withTypeProvider<ZodTypeProvider>().post('/v1/exercises/routines', {
    onRequest: [(fastify as any).authenticate],
    schema: { body: createRoutineSchema },
}, async (request, reply) => {
    try {
        const userId = (request.user as any).userId ?? (request.user as any).id;
        return reply.code(201).send(await exerciseSvc.createRoutine(userId, request.body));
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

// ── 1RM Logs ──────────────────────────────────────────────────────────────────

const logOneRepMaxSchema = z.object({
    exerciseName: z.string().min(1),
    weightKg: z.number().positive(),
    estimated1RMKg: z.number().positive()
});

fastify.withTypeProvider<ZodTypeProvider>().get('/v1/exercises/1rm', {
    onRequest: [(fastify as any).authenticate],
}, async (request, reply) => {
    try {
        const userId = (request.user as any).userId ?? (request.user as any).id;
        return reply.send(await exerciseSvc.getOneRepMaxes(userId));
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

fastify.withTypeProvider<ZodTypeProvider>().post('/v1/exercises/1rm', {
    onRequest: [(fastify as any).authenticate],
    schema: { body: logOneRepMaxSchema },
}, async (request, reply) => {
    try {
        const userId = (request.user as any).userId ?? (request.user as any).id;
        return reply.code(201).send(await exerciseSvc.logOneRepMax(userId, request.body));
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

// ── Workout Sessions ──────────────────────────────────────────────────────────

const startSessionSchema = z.object({
    routineId: z.string().optional()
});

fastify.withTypeProvider<ZodTypeProvider>().post('/v1/exercises/session/start', {
    onRequest: [(fastify as any).authenticate],
    schema: { body: startSessionSchema }
}, async (request, reply) => {
    try {
        const userId = (request.user as any).userId ?? (request.user as any).id;
        return reply.code(201).send(await exerciseSvc.startSession(userId, request.body.routineId));
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

fastify.withTypeProvider<ZodTypeProvider>().get('/v1/exercises/session/active', {
    onRequest: [(fastify as any).authenticate]
}, async (request, reply) => {
    try {
        const userId = (request.user as any).userId ?? (request.user as any).id;
        const session = await exerciseSvc.getActiveSession(userId);
        if (!session) return reply.code(404).send({ error: 'No active session' });
        return reply.send(session);
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

const logSessionExerciseSchema = z.object({
    exerciseName: z.string().min(1),
    sets: z.number().int().min(0).default(0),
    reps: z.number().int().min(0).default(0),
    weightKg: z.number().min(0).default(0),
    durationSecs: z.number().int().min(0).default(0)
});

fastify.withTypeProvider<ZodTypeProvider>().post('/v1/exercises/session/:id/exercise/log', {
    onRequest: [(fastify as any).authenticate],
    schema: {
        params: z.object({ id: z.string().uuid() }),
        body: logSessionExerciseSchema
    }
}, async (request, reply) => {
    try {
        const { id } = request.params;
        return reply.code(201).send(await exerciseSvc.logSessionExercise(
            id,
            request.body.exerciseName,
            request.body.sets,
            request.body.reps,
            request.body.weightKg,
            request.body.durationSecs
        ));
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

fastify.withTypeProvider<ZodTypeProvider>().post('/v1/exercises/session/:id/end', {
    onRequest: [(fastify as any).authenticate],
    schema: { params: z.object({ id: z.string().uuid() }) }
}, async (request, reply) => {
    try {
        const { id } = request.params;
        return reply.send(await exerciseSvc.endSession(id));
    } catch (err: any) {
        logger.error(err);
        return reply.code(500).send({ error: err.message });
    }
});

// ── Startup ───────────────────────────────────────────────────────────────────

const connectWithRetry = async (maxRetries = 8, delayMs = 4000) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            await prisma.$connect();
            return;
        } catch (err: any) {
            if (attempt === maxRetries) throw err;
            logger.warn(`DB connection attempt ${attempt}/${maxRetries} failed — retrying in ${delayMs / 1000}s...`);
            await new Promise(r => setTimeout(r, delayMs));
            delayMs = Math.min(Math.round(delayMs * 1.5), 30_000);
        }
    }
};

const start = async () => {
    try {
        await connectWithRetry();
        logger.info('exercise-service: connected to database');

        await fastify.listen({ port: parseInt(config.EXERCISE_PORT), host: '0.0.0.0' });
        logger.info(`exercise-service listening on port ${config.EXERCISE_PORT}`);
    } catch (err) {
        logger.error(err);
        process.exit(1);
    }
};

const shutdown = async () => {
    await fastify.close();
    await eventBus.disconnect();
    await prisma.$disconnect();
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

start();
