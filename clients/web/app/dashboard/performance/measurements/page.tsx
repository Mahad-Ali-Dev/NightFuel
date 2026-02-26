'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft, Ruler, Plus, History,
    TrendingDown, TrendingUp, Minus, Save, User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface MeasurementEntry {
    id: string;
    date: string;
    weight: number;
    chest: number;
    waist: number;
    hips: number;
    arms: number;
    thighs: number;
    calves: number;
    bodyFat?: number;
}

const STORAGE_KEY = 'nightfuel-measurements';

function loadMeasurements(): MeasurementEntry[] {
    if (typeof window === 'undefined') return [];
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch { return []; }
}

function saveMeasurements(data: MeasurementEntry[]) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Mock starter data for the chart if empty
const MOCK_DATA = [
    { date: 'Jan 1', weight: 85, waist: 90 },
    { date: 'Jan 15', weight: 84.2, waist: 88.5 },
    { date: 'Feb 1', weight: 83.5, waist: 87 },
    { date: 'Feb 15', weight: 82.8, waist: 85.5 },
    { date: 'Mar 1', weight: 82, waist: 84 },
];

export default function BodyMeasurementsPage() {
    const router = useRouter();
    const [history, setHistory] = useState<MeasurementEntry[]>(loadMeasurements);
    const [isAdding, setIsAdding] = useState(false);

    // Form state
    const [formDate, setFormDate] = useState(new Date().toISOString().split('T')[0]);
    const [formData, setFormData] = useState({
        weight: '', chest: '', waist: '', hips: '',
        arms: '', thighs: '', calves: '', bodyFat: ''
    });

    const chartData = history.length >= 2
        ? [...history].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map(h => ({
            date: new Date(h.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
            weight: h.weight,
            waist: h.waist
        }))
        : MOCK_DATA;

    const latest = history.length > 0
        ? history.reduce((a, b) => new Date(a.date) > new Date(b.date) ? a : b)
        : null;

    const previous = history.length > 1
        ? history.filter(h => h.id !== latest?.id).reduce((a, b) => new Date(a.date) > new Date(b.date) ? a : b)
        : null;

    const handleSave = () => {
        if (!formData.weight && !formData.waist) return; // Basic validation

        const newEntry: MeasurementEntry = {
            id: `meas-${Date.now()}`,
            date: formDate ?? new Date().toISOString().split('T')[0]!,
            weight: Number(formData.weight) || 0,
            chest: Number(formData.chest) || 0,
            waist: Number(formData.waist) || 0,
            hips: Number(formData.hips) || 0,
            arms: Number(formData.arms) || 0,
            thighs: Number(formData.thighs) || 0,
            calves: Number(formData.calves) || 0,
            bodyFat: formData.bodyFat ? Number(formData.bodyFat) : undefined,
        };

        const updated = [...history, newEntry];
        setHistory(updated);
        saveMeasurements(updated);
        setIsAdding(false);
        setFormData({ weight: '', chest: '', waist: '', hips: '', arms: '', thighs: '', calves: '', bodyFat: '' });
    };

    const getTrendIcon = (current?: number, prev?: number) => {
        if (!current || !prev) return <Minus size={14} className="text-neutral-500" />;
        if (current < prev) return <TrendingDown size={14} className="text-emerald-400" />;
        if (current > prev) return <TrendingUp size={14} className="text-red-400" />;
        return <Minus size={14} className="text-neutral-500" />;
    };

    const METRICS = [
        { key: 'weight', label: 'Weight', unit: 'kg' },
        { key: 'bodyFat', label: 'Body Fat', unit: '%' },
        { key: 'chest', label: 'Chest', unit: 'cm' },
        { key: 'waist', label: 'Waist', unit: 'cm' },
        { key: 'hips', label: 'Hips', unit: 'cm' },
        { key: 'arms', label: 'Arms', unit: 'cm' },
        { key: 'thighs', label: 'Thighs', unit: 'cm' },
        { key: 'calves', label: 'Calves', unit: 'cm' },
    ] as const;

    return (
        <div className="min-h-screen bg-transparent p-4 md:p-8">
            <div className="max-w-4xl mx-auto space-y-6">

                {/* Header */}
                <header className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => router.back()} className="bg-white/5 hover:bg-white/10 text-white rounded-xl">
                        <ChevronLeft size={20} />
                    </Button>
                    <div className="flex-1">
                        <h1 className="text-3xl font-black text-white flex items-center gap-3">
                            <Ruler className="text-brand-500" /> Measurements
                        </h1>
                        <p className="text-neutral-400 text-sm mt-0.5">Track your body transformation</p>
                    </div>
                    {!isAdding && (
                        <Button
                            onClick={() => setIsAdding(true)}
                            className="bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold"
                        >
                            <Plus size={16} className="mr-1.5" /> Log Check-in
                        </Button>
                    )}
                </header>

                <AnimatePresence mode="wait">
                    {isAdding ? (
                        /* ─── Add Entry Form ──────────────────────────────────── */
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="glass-card p-6 rounded-2xl border-brand-500/20 bg-brand-500/5"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white font-bold text-lg">Log New Measurements</h3>
                                <Input
                                    type="date"
                                    value={formDate}
                                    onChange={(e) => setFormDate(e.target.value)}
                                    className="w-40 bg-white/5 border-white/10 text-white rounded-xl"
                                />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                {METRICS.map(({ key, label, unit }) => (
                                    <div key={key} className="space-y-1.5">
                                        <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{label}</label>
                                        <div className="relative">
                                            <Input
                                                type="number"
                                                value={formData[key as keyof typeof formData]}
                                                onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                                                placeholder={latest?.[key as keyof MeasurementEntry]?.toString() ?? "0"}
                                                className="bg-white/5 border-white/10 text-white pr-10 font-medium rounded-xl"
                                                step="0.1"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 text-xs font-bold">
                                                {unit}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-end gap-3">
                                <Button variant="ghost" onClick={() => setIsAdding(false)} className="text-neutral-400 hover:text-white rounded-xl">
                                    Cancel
                                </Button>
                                <Button onClick={handleSave} className="bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold">
                                    <Save size={16} className="mr-1.5" /> Save Measurements
                                </Button>
                            </div>
                        </motion.div>
                    ) : (
                        /* ─── Dashboard View ──────────────────────────────────── */
                        <motion.div
                            key="dashboard"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-6"
                        >
                            {/* Chart */}
                            <div className="glass-card p-6 rounded-2xl border-white/[0.04]">
                                <h3 className="text-white font-bold text-sm mb-6 flex items-center gap-2">
                                    <TrendingDown size={16} className="text-emerald-400" />
                                    Weight & Waist Trend
                                </h3>
                                <div className="h-64 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={chartData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                                            <defs>
                                                <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                                                </linearGradient>
                                                <linearGradient id="colorWaist" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <XAxis dataKey="date" stroke="#ffffff20" tick={{ fill: '#737373', fontSize: 10 }} dy={10} />
                                            <YAxis yAxisId="left" stroke="#ffffff20" tick={{ fill: '#737373', fontSize: 10 }} />
                                            <YAxis yAxisId="right" orientation="right" stroke="#ffffff20" tick={{ fill: '#737373', fontSize: 10 }} />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: '#171717', borderColor: '#ffffff10', borderRadius: '12px' }}
                                                itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                                            />
                                            <Area yAxisId="left" type="monotone" dataKey="weight" name="Weight (kg)" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorWeight)" />
                                            <Area yAxisId="right" type="monotone" dataKey="waist" name="Waist (cm)" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorWaist)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                                {history.length < 2 && (
                                    <p className="text-center text-xs text-brand-400 mt-4 leading-relaxed bg-brand-500/10 p-2 rounded-lg border border-brand-500/20">
                                        Showing sample data. Log at least two check-ins to see your actual progress graph!
                                    </p>
                                )}
                            </div>

                            {/* Current Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {METRICS.map(({ key, label, unit }) => {
                                    const curr = latest?.[key as keyof MeasurementEntry] as number | undefined;
                                    const prev = previous?.[key as keyof MeasurementEntry] as number | undefined;
                                    const diff = (curr && prev) ? (curr - prev).toFixed(1) : null;

                                    return (
                                        <div key={key} className="glass-card p-4 rounded-xl border-white/[0.04]">
                                            <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">{label}</p>
                                            <div className="flex items-end justify-between mt-2">
                                                <p className="text-white font-black text-2xl">
                                                    {curr || '--'}<span className="text-sm text-neutral-600 font-bold ml-1">{unit}</span>
                                                </p>
                                                {diff && (
                                                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
                                                        {getTrendIcon(curr, prev)}
                                                        <span className="text-[10px] font-bold text-white">{Math.abs(Number(diff))}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* History Table */}
                            {history.length > 0 && (
                                <div className="glass-card rounded-2xl border-white/[0.04] overflow-hidden">
                                    <div className="p-4 border-b border-white/[0.04] flex items-center gap-2">
                                        <History size={16} className="text-brand-400" />
                                        <h3 className="text-white font-bold text-sm">Measurement Log</h3>
                                    </div>
                                    <div className="overflow-x-auto custom-scrollbar">
                                        <table className="w-full text-left text-sm whitespace-nowrap">
                                            <thead className="bg-white/[0.02] text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                                                <tr>
                                                    <th className="px-5 py-3 rounded-tl-xl">Date</th>
                                                    <th className="px-5 py-3">Weight</th>
                                                    <th className="px-5 py-3">Body Fat</th>
                                                    <th className="px-5 py-3">Chest</th>
                                                    <th className="px-5 py-3">Waist</th>
                                                    <th className="px-5 py-3">Arms</th>
                                                    <th className="px-5 py-3">Legs (Thighs)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/[0.04]">
                                                {[...history].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(h => (
                                                    <tr key={h.id} className="hover:bg-white/[0.02] transition-colors">
                                                        <td className="px-5 py-3 font-medium text-white">{new Date(h.date).toLocaleDateString()}</td>
                                                        <td className="px-5 py-3 text-neutral-300">{h.weight ? `${h.weight} kg` : '-'}</td>
                                                        <td className="px-5 py-3 text-neutral-300">{h.bodyFat ? `${h.bodyFat} %` : '-'}</td>
                                                        <td className="px-5 py-3 text-neutral-500">{h.chest ? `${h.chest} cm` : '-'}</td>
                                                        <td className="px-5 py-3 text-neutral-500">{h.waist ? `${h.waist} cm` : '-'}</td>
                                                        <td className="px-5 py-3 text-neutral-500">{h.arms ? `${h.arms} cm` : '-'}</td>
                                                        <td className="px-5 py-3 text-neutral-500">{h.thighs ? `${h.thighs} cm` : '-'}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
