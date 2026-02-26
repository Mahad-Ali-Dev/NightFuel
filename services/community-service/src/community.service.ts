import { PrismaClient } from './generated/prisma';
import { createLogger } from '@nightfuel/config';

const logger = createLogger('community.service');

export class CommunityService {
    constructor(private prisma: PrismaClient) { }

    async getFeed(limit: number = 20, cursor?: string) {
        return this.prisma.post.findMany({
            take: limit,
            ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
            orderBy: { createdAt: 'desc' },
            include: {
                _count: { select: { comments: true } },
            }
        });
    }

    async createPost(authorId: string, content: string, imageUrl?: string) {
        return this.prisma.post.create({
            data: { authorId, content, imageUrl }
        });
    }

    async likePost(postId: string) {
        return this.prisma.post.update({
            where: { id: postId },
            data: { likes: { increment: 1 } }
        });
    }

    async addComment(postId: string, authorId: string, text: string) {
        return this.prisma.comment.create({
            data: { postId, authorId, text }
        });
    }

    async getComments(postId: string, limit: number = 10) {
        return this.prisma.comment.findMany({
            where: { postId },
            take: limit,
            orderBy: { createdAt: 'desc' }
        });
    }

    async getChallenges(userId?: string) {
        return this.prisma.challenge.findMany({
            include: {
                participants: userId ? { where: { userId } } : false
            },
            orderBy: { startDate: 'desc' }
        });
    }

    async joinChallenge(challengeId: string, userId: string) {
        return this.prisma.challengeParticipant.create({
            data: { challengeId, userId }
        });
    }

    async updateChallengeProgress(challengeId: string, userId: string, progress: number) {
        const participant = await this.prisma.challengeParticipant.findUnique({
            where: { challengeId_userId: { challengeId, userId } },
            include: { challenge: true }
        });

        if (!participant) throw new Error('Not joined');
        if (participant.completed) return participant; // Already done

        // Simple mock logic: if progress >= 100, completed
        const isCompleted = progress >= 100;

        const updated = await this.prisma.challengeParticipant.update({
            where: { id: participant.id },
            data: { progress, completed: isCompleted }
        });

        if (isCompleted) {
            // Award XP
            await this.prisma.userScore.upsert({
                where: { userId },
                create: { userId, xp: participant.challenge.xpReward },
                update: { xp: { increment: participant.challenge.xpReward } }
            });
        }

        return updated;
    }

    async getLeaderboard(limit: number = 10) {
        return this.prisma.userScore.findMany({
            take: limit,
            orderBy: { xp: 'desc' }
        });
    }

    async getUserScore(userId: string) {
        const score = await this.prisma.userScore.findUnique({ where: { userId } });
        return score || { userId, xp: 0, level: 1 };
    }
}
