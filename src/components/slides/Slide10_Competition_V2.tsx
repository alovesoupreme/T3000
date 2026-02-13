"use client";

import { Slide } from "@/components/ui/slide";
import { ShieldCheck, Zap, Lock, Cpu, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts';
import { useState, useEffect } from 'react';

const data = [
    {
        subject: 'Viral Fun',
        A: 100, // Us
        B: 90,  // Photo Booth
        C: 20,  // Survey
        fullMark: 100,
    },
    {
        subject: 'Data Depth',
        A: 100,
        B: 30,
        C: 90,
        fullMark: 100,
    },
    {
        subject: 'Compliance',
        A: 100,
        B: 40,
        C: 60,
        fullMark: 100,
    },
    {
        subject: 'Speed/Hr',
        A: 95,
        B: 50,
        C: 80,
        fullMark: 100,
    },
    {
        subject: 'Custom Brand',
        A: 100,
        B: 40,
        C: 20,
        fullMark: 100,
    },
];

export default function Slide10_Competition() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Slide className="bg-deep-void-light relative overflow-hidden">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center relative z-10">

                {/* Left Col: The HUD (Radar Chart) */}
                <div className="lg:col-span-7 h-[60vh] relative min-h-[400px]">
                    <div className="absolute top-0 left-0 text-xs font-mono text-data-neon-cyan/50 tracking-[0.2em] animate-pulse">
                        /// TACTICAL DOMINANCE DISPLAY
                    </div>

                    {mounted ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                                <defs>
                                    <linearGradient id="radarFill" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.6} />
                                        <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.4} />
                                    </linearGradient>
                                </defs>
                                <PolarGrid stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
                                <PolarAngleAxis
                                    dataKey="subject"
                                    tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 'bold' }}
                                />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />

                                {/* Competitor B (Photo Booths) - Red */}
                                <Radar
                                    name="Photo Booths"
                                    dataKey="B"
                                    stroke="#ef4444"
                                    strokeWidth={2}
                                    fill="#ef4444"
                                    fillOpacity={0.1}
                                />
                                {/* Competitor C (Surveys) - Gray */}
                                <Radar
                                    name="Traditional Surveys"
                                    dataKey="C"
                                    stroke="#6b7280"
                                    strokeWidth={2}
                                    strokeDasharray="4 4"
                                    fill="#6b7280"
                                    fillOpacity={0.05}
                                />
                                {/* Us - Neon Cyan/Violet */}
                                <Radar
                                    name="Gamified Data Arcade"
                                    dataKey="A"
                                    stroke="#06b6d4"
                                    strokeWidth={4}
                                    fill="url(#radarFill)"
                                    fillOpacity={0.6}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-data-neon-cyan animate-pulse font-mono tracking-widest">
                            CALIBRATING SENSORS...
                        </div>
                    )}

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 flex gap-4 text-xs font-mono">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-gradient-to-br from-data-neon-cyan to-data-neon-violet rounded-sm border border-white/20" />
                            <span className="text-white font-bold">ARCADE (US)</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-50">
                            <div className="w-3 h-3 bg-red-500 rounded-sm" />
                            <span className="text-gray-400">PHOTO BOOTH</span>
                        </div>
                    </div>
                </div>

                {/* Right Col: The Moat (Perk Cards) */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="mb-8">
                        <span className="text-data-neon-violet font-mono text-xs tracking-widest uppercase">The Unfair Advantage</span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold mt-2 text-white"
                        >
                            System <span className="text-glow-violet text-data-neon-violet">Upgrades.</span>
                        </motion.h2>
                    </div>

                    {/* Card 1: Regulatory */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group relative p-4 rounded-xl bg-deep-void border border-white/10 overflow-hidden hover:border-data-neon-cyan/50 transition-colors"
                    >
                        <div className="absolute inset-0 bg-data-neon-cyan/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        <div className="flex items-start gap-4 relative z-10">
                            <div className="p-3 rounded-lg bg-gray-900 border border-white/10 group-hover:border-data-neon-cyan/30 text-data-neon-cyan">
                                <Lock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">Law 25 Shield</h4>
                                <p className="text-sm text-gray-400 leading-snug">
                                    The <span className="text-white font-semibold">only</span> solution built for Quebec's strict data portability laws. US competitors are illegal here.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Technical */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="group relative p-4 rounded-xl bg-deep-void border border-white/10 overflow-hidden hover:border-data-neon-violet/50 transition-colors"
                    >
                        <div className="absolute inset-0 bg-data-neon-violet/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        <div className="flex items-start gap-4 relative z-10">
                            <div className="p-3 rounded-lg bg-gray-900 border border-white/10 group-hover:border-data-neon-violet/30 text-data-neon-violet">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">Edge Core</h4>
                                <p className="text-sm text-gray-400 leading-snug">
                                    Offline-first architecture. We verify leads locally and sync later. Zero reliance on spotty 5G.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Strategic */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="group relative p-4 rounded-xl bg-deep-void border border-white/10 overflow-hidden hover:border-yellow-400/50 transition-colors"
                    >
                        <div className="absolute inset-0 bg-yellow-400/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        <div className="flex items-start gap-4 relative z-10">
                            <div className="p-3 rounded-lg bg-gray-900 border border-white/10 group-hover:border-yellow-400/30 text-yellow-400">
                                <Trophy className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">Venue Lock</h4>
                                <p className="text-sm text-gray-400 leading-snug">
                                    Exclusive rights with <span className="text-white font-semibold">Blueprint Events</span>. We own the floor at Vancouver's top venues.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </Slide>
    );
}
