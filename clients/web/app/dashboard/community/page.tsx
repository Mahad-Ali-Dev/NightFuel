'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { communityApi } from '@/lib/api';
import {
    Users, Heart, MessageSquare, Share2,
    MoreHorizontal, Flame, Trophy, Crown,
    Dumbbell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Mock feed data
const FEED_ITEMS = [
    {
        id: 'post-1',
        user: { name: 'Alex M.', avatar: 'AM', isPro: true },
        timeAgo: '2 hours ago',
        type: 'workout',
        content: 'Crushed the Push day today! Bench press is finally feeling solid again.',
        stats: { duration: '1h 15m', volume: '12,450 kg', prs: 1 },
        tags: ['Push Day', 'Chest'],
        likes: 24,
        comments: 3,
        likedByUser: true,
    },
    {
        id: 'post-2',
        user: { name: 'Sarah K.', avatar: 'SK', isPro: false },
        timeAgo: '5 hours ago',
        type: 'milestone',
        content: 'Hit my 100th workout of the year! 🎉 Consistency is key.',
        stats: null,
        tags: ['Milestone', 'Consistency'],
        likes: 89,
        comments: 12,
        likedByUser: false,
    },
    {
        id: 'post-3',
        user: { name: 'David R.', avatar: 'DR', isPro: true },
        timeAgo: 'Yesterday',
        type: 'nutrition',
        content: 'Meal prep Sunday! Made enough chicken and rice for the rest of the week.',
        stats: { mealsPrep: 14, caloriesPerMeal: 550 },
        tags: ['Meal Prep', 'Nutrition'],
        likes: 45,
        comments: 8,
        likedByUser: false,
    }
];

const LEADERBOARD = [
    { rank: 1, name: 'Marcus P.', score: 12450 },
    { rank: 2, name: 'Elena V.', score: 11200 },
    { rank: 3, name: 'You', score: 9850, isUser: true },
    { rank: 4, name: 'James T.', score: 9100 },
];

export default function CommunityFeedPage() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const [feed, setFeed] = useState(FEED_ITEMS);

    const { data: dbPosts = [], isLoading } = useQuery({
        queryKey: ['communityFeed'],
        queryFn: async () => {
            const { data } = await communityApi.get('/feed');
            return data;
        }
    });

    const displayFeed = dbPosts.length > 0 ? dbPosts.map((post: any) => ({
        id: post.id,
        user: { name: 'User ' + post.authorId.substring(0, 4), avatar: 'US', isPro: false },
        timeAgo: new Date(post.createdAt).toLocaleDateString(),
        type: 'standard',
        content: post.content,
        stats: null,
        tags: [],
        likes: post.likes,
        comments: post._count?.comments || 0,
        likedByUser: false,
    })) : feed;

    const likeMutation = useMutation({
        mutationFn: (postId: string) => communityApi.post(`/post/${postId}/like`),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['communityFeed'] })
    });

    const toggleLike = (id: string) => {
        // If it's a real DB post format
        if (dbPosts.length > 0) {
            likeMutation.mutate(id);
        } else {
            // Mock fallback behavior
            setFeed(prev => prev.map(post => {
                if (post.id === id) {
                    return {
                        ...post,
                        likes: post.likedByUser ? post.likes - 1 : post.likes + 1,
                        likedByUser: !post.likedByUser
                    };
                }
                return post;
            }));
        }
    };

    return (
        <div className="min-h-screen bg-transparent p-4 md:p-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <header className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-black text-white flex items-center gap-3">
                            <Users className="text-brand-500" /> Community
                        </h1>
                        <p className="text-neutral-400 text-sm mt-0.5">Connect with other NightFuel athletes</p>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/dashboard/community/challenges">
                            <Button className="bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10">
                                <Trophy size={16} className="mr-2 text-amber-400" />
                                Challenges
                            </Button>
                        </Link>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Feed */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Post Composer */}
                        <div className="glass-card p-4 rounded-2xl border-white/[0.04]">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-500/20 text-brand-400 font-bold flex items-center justify-center shrink-0">
                                    YOU
                                </div>
                                <div className="flex-1">
                                    <textarea
                                        placeholder="Share your workout, milestone, or meal prep..."
                                        className="w-full bg-transparent border-none text-white placeholder-neutral-500 outline-none resize-none h-12 text-sm"
                                    />
                                    <div className="flex justify-between items-center mt-2 pt-3 border-t border-white/[0.04]">
                                        <div className="flex gap-2 text-neutral-500">
                                            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors"><Dumbbell size={16} /></button>
                                            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors"><Flame size={16} /></button>
                                        </div>
                                        <Button className="bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold px-6 py-1 h-8 text-xs">
                                            Post
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feed Posts */}
                        {isLoading ? (
                            <div className="text-center py-10 text-neutral-500">Loading feed...</div>
                        ) : displayFeed.map((post: any, i: number) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-5 rounded-2xl border-white/[0.04]"
                            >
                                {/* Post Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex gap-3 items-center">
                                        <div className="w-10 h-10 rounded-full bg-neutral-800 text-white font-bold flex items-center justify-center border border-white/10">
                                            {post.user.avatar}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-white font-bold text-sm">{post.user.name}</h3>
                                                {post.user.isPro && (
                                                    <span className="bg-amber-500/20 text-amber-400 text-[9px] font-black px-1.5 py-0.5 rounded-sm uppercase">PRO</span>
                                                )}
                                            </div>
                                            <span className="text-neutral-500 text-xs">{post.timeAgo}</span>
                                        </div>
                                    </div>
                                    <button className="text-neutral-500 hover:text-white p-1">
                                        <MoreHorizontal size={16} />
                                    </button>
                                </div>

                                {/* Post Content */}
                                <p className="text-neutral-200 text-sm leading-relaxed mb-4">
                                    {post.content}
                                </p>

                                {/* Interactive Stats Card for Workout specific posts */}
                                {post.type === 'workout' && post.stats && (
                                    <div className="bg-brand-500/5 border border-brand-500/20 rounded-xl p-3 flex gap-6 mb-4">
                                        <div>
                                            <p className="text-[10px] text-brand-400/70 font-bold uppercase tracking-widest">Duration</p>
                                            <p className="text-brand-100 font-bold text-sm">{post.stats.duration}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-brand-400/70 font-bold uppercase tracking-widest">Volume</p>
                                            <p className="text-brand-100 font-bold text-sm">{post.stats.volume}</p>
                                        </div>
                                        {post.stats.prs && (
                                            <div>
                                                <p className="text-[10px] text-brand-400/70 font-bold uppercase tracking-widest">New PRs</p>
                                                <p className="text-brand-100 font-bold text-sm flex items-center gap-1">
                                                    <Trophy size={14} className="text-amber-400" /> {post.stats.prs}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Tags */}
                                <div className="flex gap-2 mb-4">
                                    {post.tags.map((tag: string) => (
                                        <span key={tag} className="text-[10px] bg-white/5 text-neutral-400 px-2 py-1 rounded-md">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-6 pt-3 border-t border-white/[0.04]">
                                    <button
                                        onClick={() => toggleLike(post.id)}
                                        className={cn(
                                            "flex items-center gap-2 text-xs font-bold transition-colors",
                                            post.likedByUser ? "text-brand-500" : "text-neutral-500 hover:text-white"
                                        )}
                                    >
                                        <Heart size={16} fill={post.likedByUser ? "currentColor" : "none"} />
                                        {post.likes}
                                    </button>
                                    <button className="flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-white transition-colors">
                                        <MessageSquare size={16} /> {post.comments}
                                    </button>
                                    <button className="flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-white transition-colors ml-auto">
                                        <Share2 size={16} /> Share
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Weekly Leaderboard */}
                        <div className="glass-card p-5 rounded-2xl border-white/[0.04]">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-white font-bold text-sm flex items-center gap-2">
                                    <Crown size={16} className="text-amber-400" /> Weekly Leaderboard
                                </h3>
                            </div>
                            <div className="space-y-3">
                                {LEADERBOARD.map((user) => (
                                    <div
                                        key={user.rank}
                                        className={cn(
                                            "flex items-center justify-between p-2 rounded-xl",
                                            user.isUser ? "bg-brand-500/10 border border-brand-500/20" : "bg-white/[0.02]"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={cn(
                                                "w-5 font-black text-xs text-center",
                                                user.rank === 1 ? 'text-amber-400' :
                                                    user.rank === 2 ? 'text-neutral-300' :
                                                        user.rank === 3 ? 'text-amber-700' : 'text-neutral-500'
                                            )}>
                                                {user.rank}
                                            </span>
                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[8px] text-white font-bold">
                                                {user.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <span className={cn("text-xs font-bold", user.isUser ? "text-brand-400" : "text-white")}>
                                                {user.name} {user.isUser && "(You)"}
                                            </span>
                                        </div>
                                        <span className="text-[10px] text-neutral-400 font-bold">{user.score} pts</span>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-4 text-[10px] text-brand-400 font-bold uppercase tracking-widest hover:text-brand-300">
                                View Full Rankings
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
