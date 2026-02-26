import { PrismaClient } from './generated/prisma';
import { createLogger } from '@nightfuel/config';

const logger = createLogger('chat.service');

export class ChatService {
    constructor(private prisma: PrismaClient) { }

    async getCoaches() {
        return this.prisma.coachProfile.findMany({
            where: { active: true },
            orderBy: { rating: 'desc' }
        });
    }

    async getOrCreateConversation(userId: string, coachId: string) {
        // Sort IDs to ensure participantA < participantB for uniqueness
        const [participantA, participantB] = [userId, coachId].sort();

        let conv = await this.prisma.conversation.findUnique({
            where: {
                participantA_participantB: { participantA, participantB }
            }
        });

        if (!conv) {
            conv = await this.prisma.conversation.create({
                data: { participantA, participantB }
            });
        }
        return conv;
    }

    async getMessageHistory(conversationId: string, limit: number = 50) {
        return this.prisma.message.findMany({
            where: { conversationId },
            take: limit,
            orderBy: { createdAt: 'asc' }
        });
    }

    async saveMessage(conversationId: string, senderId: string, text: string) {
        return this.prisma.message.create({
            data: { conversationId, senderId, text }
        });
    }
}
