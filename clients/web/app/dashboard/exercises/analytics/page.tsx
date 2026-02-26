'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft, TrendingUp, Search, Calendar,
    Activity, Dumbbell, Target, History, Trophy
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
    LineChart, Line, AreaChart, Area,
    XAxis, YAxis, Tooltip, ResponsiveContainer,
    CartesianGrid
} from 'recharts';

interface ExerciseData {
    id: string;
    name: string;
    category: string;
    metrics: {
        oneRepMax: number;
        totalVolume: number;
        bestSet: string;
        frequency: string;
    };
    history: { date: string; maxWeight: number; volume: number }[];
}

const MOCK_EXERCISES: ExerciseData[] = [
    {
        id: 'ex-1',
        name: 'Barbell Squat',
        category: 'Legs',
        metrics: { oneRepMax: 140, totalVolume: 45000, bestSet: '120kg x 5', frequency: '2x / week' },
        history: [
            { date: 'Oct 1', maxWeight: 120, volume: 3800 },
            { date: 'Oct 8', maxWeight: 125, volume: 4100 },
            { date: 'Oct 15', maxWeight: 125, volume: 4200 },
            { date: 'Oct 22', maxWeight: 130, volume: 4500 },
            { date: 'Oct 29', maxWeight: 135, volume: 4800 },
            { date: 'Nov 5', maxWeight: 140, volume: 5100 },
        ]
    },
    {
        id: 'ex-2',
        name: 'Bench Press',
        category: 'Chest',
        metrics: { oneRepMax: 110, totalVolume: 32000, bestSet: '95kg x 3', frequency: '2.5x / week' },
        history: [
            { date: 'Oct 2', maxWeight: 95, volume: 2800 },
            { date: 'Oct 9', maxWeight: 100, volume: 2950 },
            { date: 'Oct 16', maxWeight: 100, volume: 3100 },
            { date: 'Oct 23', maxWeight: 105, volume: 3000 },
            { date: 'Oct 30', maxWeight: 107.5, volume: 3300 },
            { date: 'Nov 6', maxWeight: 110, volume: 3400 },
        ]
    },
    {
        id: 'ex-3',
        name: 'Deadlift',
        category: 'Back',
        metrics: { oneRepMax: 180, totalVolume: 28000, bestSet: '160kg x 3', frequency: '1x / week' },
        history: [
            { date: 'Oct 3', maxWeight: 160, volume: 2400 },
            { date: 'Oct 10', maxWeight: 165, volume: 2550 },
            { date: 'Oct 17', maxWeight: 170, volume: 2700 },
            { date: 'Oct 24', maxWeight: 175, volume: 2600 },
            { date: 'Oct 31', maxWeight: 175, volume: 2800 },
            { date: 'Nov 7', maxWeight: 180, volume: 3000 },
        ]
    }
];

export default function ExerciseProgressPage() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [selectedExercise, setSelectedExercise] = useState<ExerciseData>(MOCK_EXERCISES[0]!);
    const [activeTab, setActiveTab] = useState<'Weight' | 'Volume'>('Weight');

    const filteredExercises = MOCK_EXERCISES.filter(ex =>
        ex.name.toLowerCase().includes(search.toLowerCase()) ||
        ex.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-transparent p-4 md:p-8">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* Header */}
                <header className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => router.back()} className="bg-white/5 hover:bg-white/10 text-white rounded-xl">
                        <ChevronLeft size={20} />
                    </Button>
                    <div className="flex-1">
                        <h1 className="text-3xl font-black text-white flex items-center gap-3">
                            <TrendingUp className="text-brand-500" /> Exercise Analytics
                        </h1>
                        <p className="text-neutral-400 text-sm mt-0.5">Track your 1RM, volume, and performance trends</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    {/* Sidebar / Exercise List */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="relative">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                            <Input
                                placeholder="Search exercises..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-white/5 border-white/10 text-white pl-9 rounded-xl text-sm"
                            />
                        </div>

                        <div className="space-y-2 h-[600px] overflow-y-auto custom-scrollbar pr-2">
                            {filteredExercises.map(ex => (
                                <button
                                    key={ex.id}
                                    onClick={() => setSelectedExercise(ex)}
                                    className={cn(
                                        'w-full text-left p-3 rounded-xl transition-all border flex items-center justify-between',
                                        selectedExercise.id === ex.id
                                            ? 'bg-brand-500/10 border-brand-500/30'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                                    )}
                                >
                                    <div>
                                        <h3 className={cn("font-bold text-sm", selectedExercise.id === ex.id ? 'text-brand-400' : 'text-white')}>
                                            {ex.name}
                                        </h3>
                                        <p className="text-xs text-neutral-500">{ex.category}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-bold text-white block">{ex.metrics.oneRepMax} kg</span>
                                        <span className="text-[10px] text-emerald-400 font-bold block">Max</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Chart Area */}
                    <div className="lg:col-span-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedExercise.id}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="space-y-6"
                            >
                                {/* Stat Cards */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    <div className="glass-card p-4 rounded-xl border-white/[0.04]">
                                        <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 mb-2">
                                            <Trophy size={12} className="text-amber-400" /> Est. 1RM
                                        </p>
                                        <p className="text-white font-black text-2xl">
                                            {selectedExercise.metrics.oneRepMax}<span className="text-sm text-neutral-600 font-bold ml-1">kg</span>
                                        </p>
                                    </div>
                                    <div className="glass-card p-4 rounded-xl border-white/[0.04]">
                                        <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 mb-2">
                                            <Activity size={12} className="text-blue-400" /> Best Set
                                        </p>
                                        <p className="text-white font-black text-xl md:text-2xl tracking-tighter">
                                            {selectedExercise.metrics.bestSet}
                                        </p>
                                    </div>
                                    <div className="glass-card p-4 rounded-xl border-white/[0.04]">
                                        <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 mb-2">
                                            <Dumbbell size={12} className="text-emerald-400" /> 30-Day Volume
                                        </p>
                                        <p className="text-white font-black text-2xl">
                                            {(selectedExercise.metrics.totalVolume / 1000).toFixed(1)}<span className="text-sm text-neutral-600 font-bold ml-1">ton</span>
                                        </p>
                                    </div>
                                    <div className="glass-card p-4 rounded-xl border-white/[0.04]">
                                        <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 mb-2">
                                            <Calendar size={12} className="text-purple-400" /> Frequency
                                        </p>
                                        <p className="text-white font-black text-xl tracking-tight">
                                            {selectedExercise.metrics.frequency}
                                        </p>
                                    </div>
                                </div>

                                {/* Chart Card */}
                                <div className="glass-card p-6 rounded-2xl border-white/[0.04]">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                            <Target size={18} className="text-brand-500" /> Progress Over Time
                                        </h3>
                                        <div className="flex bg-white/5 p-1 rounded-xl">
                                            {['Weight', 'Volume'].map(tab => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setActiveTab(tab as any)}
                                                    className={cn(
                                                        'px-4 py-1.5 rounded-lg text-xs font-bold transition-all',
                                                        activeTab === tab
                                                            ? 'bg-neutral-800 text-white shadow-md border border-white/10'
                                                            : 'text-neutral-500 hover:text-neutral-300'
                                                    )}
                                                >
                                                    {tab}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="h-72 w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            {activeTab === 'Weight' ? (
                                                <LineChart data={selectedExercise.history} margin={{ top: 5, right: 20, left: -20, bottom: 0 }}>
                                                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                                    <XAxis dataKey="date" stroke="#ffffff20" tick={{ fill: '#737373', fontSize: 10 }} dy={10} />
                                                    <YAxis stroke="#ffffff20" tick={{ fill: '#737373', fontSize: 10 }} domain={['dataMin - 10', 'dataMax + 10']} />
                                                    <Tooltip
                                                        contentStyle={{ backgroundColor: '#171717', borderColor: '#ffffff10', borderRadius: '12px' }}
                                                        itemStyle={{ color: '#f97316', fontSize: '14px', fontWeight: 'bold' }}
                                                        labelStyle={{ color: '#737373', fontSize: '12px', marginBottom: '4px' }}
                                                    />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="maxWeight"
                                                        name="Max Weight (kg)"
                                                        stroke="#f97316"
                                                        strokeWidth={4}
                                                        dot={{ fill: '#171717', stroke: '#f97316', strokeWidth: 2, r: 4 }}
                                                        activeDot={{ r: 6, fill: '#f97316', stroke: '#fff' }}
                                                    />
                                                </LineChart>
                                            ) : (
                                                <AreaChart data={selectedExercise.history} margin={{ top: 5, right: 20, left: -10, bottom: 0 }}>
                                                    <defs>
                                                        <linearGradient id="colorVol" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                                    <XAxis dataKey="date" stroke="#ffffff20" tick={{ fill: '#737373', fontSize: 10 }} dy={10} />
                                                    <YAxis stroke="#ffffff20" tick={{ fill: '#737373', fontSize: 10 }} />
                                                    <Tooltip
                                                        contentStyle={{ backgroundColor: '#171717', borderColor: '#ffffff10', borderRadius: '12px' }}
                                                        itemStyle={{ color: '#10b981', fontSize: '14px', fontWeight: 'bold' }}
                                                        labelStyle={{ color: '#737373', fontSize: '12px', marginBottom: '4px' }}
                                                    />
                                                    <Area
                                                        type="monotone"
                                                        dataKey="volume"
                                                        name="Volume (kg)"
                                                        stroke="#10b981"
                                                        strokeWidth={3}
                                                        fillOpacity={1}
                                                        fill="url(#colorVol)"
                                                    />
                                                </AreaChart>
                                            )}
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                {/* Recent History Table */}
                                <div className="glass-card rounded-2xl border-white/[0.04] overflow-hidden">
                                    <div className="p-4 border-b border-white/[0.04] flex items-center gap-2">
                                        <History size={16} className="text-brand-400" />
                                        <h3 className="text-white font-bold text-sm">Recent Sessions</h3>
                                    </div>
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-white/[0.02] text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                                            <tr>
                                                <th className="px-5 py-3">Date</th>
                                                <th className="px-5 py-3 text-right">Top Set</th>
                                                <th className="px-5 py-3 text-right">Volume</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/[0.04]">
                                            {[...selectedExercise.history].reverse().map((h, i) => (
                                                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                                    <td className="px-5 py-3 font-medium text-white">{h.date}</td>
                                                    <td className="px-5 py-3 text-right text-brand-400 font-bold">{h.maxWeight} kg</td>
                                                    <td className="px-5 py-3 text-right text-emerald-400 font-bold">{h.volume} kg</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </div>
    );
}
