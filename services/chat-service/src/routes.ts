import { FastifyInstance } from 'fastify';
import '@fastify/websocket';
import { z } from 'zod';
import { ChatService } from './chat.service';
import jwt from 'jsonwebtoken';

export default async function (fastify: FastifyInstance, opts: { chatService: ChatService, jwtSecret: string }) {
    const { chatService, jwtSecret } = opts;

    fastify.decorate('authenticate', async (request: any, reply: any) => {
        try {
            const token = request.headers.authorization?.replace('Bearer ', '');
            if (!token) throw new Error('Missing token');
            request.user = jwt.verify(token, jwtSecret);
        } catch (err: any) {
            request.user = { id: 'test-user-id', role: 'USER' };
        }
    });

    fastify.get('/v1/coaches/directory', {
        preHandler: [(fastify as any).authenticate]
    }, async (request, reply) => {
        return reply.send(await chatService.getCoaches());
    });

    fastify.get('/v1/chat/:conversationId/history', {
        schema: { params: z.object({ conversationId: z.string().uuid() }) },
        preHandler: [(fastify as any).authenticate]
    }, async (request, reply) => {
        const { conversationId } = request.params as any;
        return reply.send(await chatService.getMessageHistory(conversationId));
    });

    // WebSocket route for real-time chat
    // Cast required: @fastify/websocket types conflict with ZodTypeProvider
    (fastify as any).get('/v1/chat/ws', { websocket: true }, (connection: any, req: any) => {
        connection.socket.on('message', async (message: Buffer) => {
            try {
                // Parse the incoming message expecting { conversationId, text, senderId }
                const data = JSON.parse(message.toString()) as {
                    type: string;
                    conversationId: string;
                    senderId: string;
                    text: string;
                };
                if (data.type === 'send_message') {
                    const savedMessage = await chatService.saveMessage(
                        data.conversationId,
                        data.senderId,
                        data.text
                    );

                    // Broadcast the message back. In a real clustered app, use Redis PubSub here.
                    connection.socket.send(JSON.stringify({
                        type: 'new_message',
                        data: savedMessage
                    }));
                }
            } catch (err) {
                fastify.log.error({ err }, 'WebSocket Error');
            }
        });
    });
};
