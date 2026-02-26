'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft, Trophy, Flame, Users, CalendarDays,
    ArrowRight, CheckCircle2, ShieldHalf, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface Challenge {
    id: string;
    title: string;
    description: string;
    type: 'Daily' | 'Weekly' | 'Monthly';
    category: 'Strength' | 'Cardio' | 'Nutrition' | 'Consistency';
    participants: number;
    points: number;
    progress: number;
    target: number;
    unit: string;
    timeLeft: string;
    joined: boolean;
    icon: React.ReactNode;
    color: string;
    bg: string;
}

const MOCK_CHALLENGES: Challenge[] = [
    {
        id: 'c-1',
        title: 'The 10k Steps Club',
        description: 'Hit 10,000 steps every day for a week to earn the endurance badge.',
        type: 'Weekly',
        category: 'Cardio',
        participants: 1245,
        points: 500,
        progress: 4,
        target: 7,
        unit: 'days',
        timeLeft: '3 days left',
        joined: true,
        icon: <Flame size={20} />,
        color: 'text-orange-400',
        bg: 'bg-orange-500/10 border-orange-500/20'
    },
    {
        id: 'c-2',
        title: 'Protein Powerhouse',
        description: 'Hit your personalized daily protein target.',
        type: 'Daily',
        category: 'Nutrition',
        participants: 856,
        points: 100,
        progress: 140,
        target: 180,
        unit: 'g',
        timeLeft: '12 hours left',
        joined: true,
        icon: <Zap size={20} />,
        color: 'text-brand-400',
        bg: 'bg-brand-500/10 border-brand-500/20'
    },
    {
        id: 'c-3',
        title: 'Iron Month',
        description: 'Log 20 strength training sessions in 30 days.',
        type: 'Monthly',
        category: 'Consistency',
        participants: 3400,
        points: 2000,
        progress: 12,
        target: 20,
        unit: 'workouts',
        timeLeft: '14 days left',
        joined: true,
        icon: <ShieldHalf size={20} />,
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
        id: 'c-4',
        title: 'Sleepless No More',
        description: 'Average 8 hours of sleep per night for a full week.',
        type: 'Weekly',
        category: 'Consistency',
        participants: 512,
        points: 750,
        progress: 0,
        target: 7,
        unit: 'nights',
        timeLeft: '6 days left',
        joined: false,
        icon: <Trophy size={20} />,
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10 border-indigo-500/20'
    }
];

export default function ChallengesPage() {
    const router = useRouter();
    const [challenges, setChallenges] = useState(MOCK_CHALLENGES);
    const [activeTab, setActiveTab] = useState<'All' | 'Joined'>('All');

    const toggleJoin = (id: string) => {
        setChallenges(prev => prev.map(c =>
            c.id === id ? { ...c, joined: !c.joined } : c
        ));
    };

    const displayedChallenges = activeTab === 'Joined'
        ? challenges.filter(c => c.joined)
        : challenges;

    return (
        <div className="min-h-screen bg-transparent p-4 md:p-8">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Header */}
                <header className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => router.back()} className="bg-white/5 hover:bg-white/10 text-white rounded-xl">
                        <ChevronLeft size={20} />
                    </Button>
                    <div className="flex-1">
                        <h1 className="text-3xl font-black text-white flex items-center gap-3">
                            <Trophy className="text-amber-400" /> Community Challenges
                        </h1>
                        <p className="text-neutral-400 text-sm mt-0.5">Compete, stay consistent, and earn rewards</p>
                    </div>
                </header>

                {/* Tabs & Stats */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex bg-white/5 p-1 rounded-xl w-fit">
                        {['All', 'Joined'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={cn(
                                    'px-6 py-2 rounded-lg text-sm font-bold transition-all',
                                    activeTab === tab
                                        ? 'bg-neutral-800 text-white shadow-md'
                                        : 'text-neutral-500 hover:text-neutral-300'
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 px-4 py-2.5 rounded-xl border border-white/[0.04]">
                        <div className="flex items-center gap-2">
                            <Trophy size={16} className="text-amber-400" />
                            <span className="text-xs font-bold text-neutral-400">Total Points:</span>
                            <span className="font-black text-white tracking-tight">3,450</span>
                        </div>
                    </div>
                </div>

                {/* Challenge Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {displayedChallenges.map((challenge, i) => {
                            const percent = Math.min((challenge.progress / challenge.target) * 100, 100);
                            const isCompleted = challenge.progress >= challenge.target;

                            return (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    key={challenge.id}
                                    className="glass-card rounded-2xl border-white/[0.04] overflow-hidden group flex flex-col h-full"
                                >
                                    <div className="p-6 flex-1">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={cn('p-3 rounded-xl border', challenge.bg, challenge.color)}>
                                                    {challenge.icon}
                                                </div>
                                                <div>
                                                    <span className={cn("text-[9px] font-bold uppercase tracking-widest", challenge.color)}>
                                                        {challenge.type} · {challenge.category}
                                                    </span>
                                                    <h3 className="text-white font-black text-lg mt-0.5">{challenge.title}</h3>
                                                </div>
                                            </div>
                                            <span className="bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                                                {challenge.points} pts
                                            </span>
                                        </div>

                                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 h-10">
                                            {challenge.description}
                                        </p>

                                        {challenge.joined && (
                                            <div className="space-y-2 mb-2 mt-auto">
                                                <div className="flex justify-between items-center text-xs font-bold">
                                                    <span className={isCompleted ? 'text-emerald-400 flex items-center gap-1.5' : 'text-neutral-400'}>
                                                        {isCompleted && <CheckCircle2 size={14} />}
                                                        {challenge.progress} / {challenge.target} {challenge.unit}
                                                    </span>
                                                    <span className="text-brand-400">{Math.round(percent)}%</span>
                                                </div>
                                                <Progress value={percent} className="h-2 bg-white/10" colorClass={isCompleted ? 'bg-emerald-500' : 'bg-brand-500'} />
                                            </div>
                                        )}
                                    </div>

                                    <div className="bg-white/[0.02] border-t border-white/[0.04] p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-4 text-[10px] text-neutral-500 font-medium">
                                            <span className="flex items-center gap-1.5">
                                                <Users size={12} /> {challenge.participants.toLocaleString()}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <CalendarDays size={12} /> {challenge.timeLeft}
                                            </span>
                                        </div>

                                        {isCompleted ? (
                                            <span className="text-emerald-400 text-xs font-bold flex items-center gap-1 border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 rounded-lg">
                                                <CheckCircle2 size={14} /> Completed
                                            </span>
                                        ) : challenge.joined ? (
                                            <Button
                                                variant="ghost"
                                                onClick={() => toggleJoin(challenge.id)}
                                                className="h-8 text-xs text-neutral-400 hover:text-white hover:bg-white/10"
                                            >
                                                Leave
                                            </Button>
                                        ) : (
                                            <Button
                                                onClick={() => toggleJoin(challenge.id)}
                                                className="bg-white text-black h-8 hover:bg-brand-500 hover:text-white text-xs font-bold rounded-lg group-hover:px-6 transition-all"
                                            >
                                                Join Challenge <ArrowRight size={14} className="ml-1.5 hidden group-hover:block" />
                                            </Button>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {displayedChallenges.length === 0 && (
                    <div className="text-center py-20 px-4 border border-dashed border-white/10 rounded-2xl bg-white/[0.02]">
                        <Trophy size={48} className="mx-auto text-neutral-700 mb-4" />
                        <h3 className="text-white font-bold text-lg">No Active Challenges</h3>
                        <p className="text-neutral-500 text-sm mt-2 max-w-sm mx-auto">
                            Switch to the 'All' tab to discover and join new fitness and nutrition challenges.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
