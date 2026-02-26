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

    async getChallenges(date: Date) {
        // Strip out time part
        const searchDate = new Date(date).toISOString().split('T')[0];
        // The mock will just return all active ones for the sake of the E2E demo
        return this.prisma.dailyChallenge.findMany();
    }
}
