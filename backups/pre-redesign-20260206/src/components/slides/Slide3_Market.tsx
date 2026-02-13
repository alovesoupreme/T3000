"use client";

import { Slide } from "@/components/ui/slide";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { StatCard } from "@/components/ui/stat-card";
import { TrendingUp, Globe, Smartphone, Users } from "lucide-react";
import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';
import { useState, useEffect } from 'react';
import { AnimatedCounter } from "@/components/ui/micro-interactions";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const chartData = [
    { year: '20', value: 40 },
    { year: '21', value: 65 },
    { year: '22', value: 90 },
    { year: '23', value: 110 },
    { year: '24', value: 128 },
    { year: '25', value: 145 },
    { year: '26', value: 162 },
];

export default function Slide3_Market() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Slide className="bg-deep-void">
            <div className="mb-12">
                <span className="text-data-neon-cyan font-mono text-xs tracking-widest uppercase">The Opportunity</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-4"
                >
                    Follow the <span className="text-data-neon-cyan">Capital.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                    While digital ads shrink, the "Experience Economy" is entering a hyper-growth supercycle.
                </p>
            </div>

            <BentoGrid className="md:auto-rows-[20rem]">
                <BentoItem
                    span={2}
                    title="Global Experiential Spend"
                    description="Brands are aggressively shifting budget to physical activations."
                    header={
                        <div className="h-full w-full flex flex-col justify-end min-h-[160px] h-full">
                            <motion.div
                                className="absolute top-4 right-4"
                                variants={scaleIn(0.3)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <div className="text-5xl font-bold text-white mb-1">
                                    $<AnimatedCounter value={128.35} decimals={2} duration={2.5} />B
                                </div>
                                <div className="text-xs text-gray-400 text-right">Global Experiential 2024</div>
                            </motion.div>
                            <div className="h-[120px] w-full mt-auto relative min-w-[300px]" style={{ minHeight: '120px' }}>
                                {mounted ? (
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={chartData}>
                                            <defs>
                                                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <Area type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={3} fill="url(#colorVal)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-data-neon-cyan/20 text-xs font-mono animate-pulse">
                                        LOADING MARKET DATA...
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                    icon={<Globe className="h-6 w-6 text-data-neon-cyan" />}
                    className="bg-data-neon-cyan/5 border-data-neon-cyan/20 overflow-hidden relative"
                />

                <BentoItem
                    span={1}
                    title="Immersive Tech Explosion"
                    description="AR/VR/Kiosks are growing 5x faster than the broader ad market."
                    header={<StatCard
                        value="28.6%"
                        label="CAGR Growth"
                        sub="$6.9B → $29.7B by 2030"
                        source="Grand View Research 2024"
                        trend="up"
                        trendValue="+Rapid Expansion"
                        color="cyan"
                        className="h-full border-none bg-transparent p-0"
                    />}
                    icon={<TrendingUp className="h-6 w-6 text-data-neon-cyan" />}
                    className="bg-deep-void border-white/10"
                />

                <BentoItem
                    span={1}
                    title="B2B Lead Gen Priority"
                    description="Corporate budgets are focused on lead acquisition."
                    header={<StatCard
                        value="74%"
                        label="Fortune 1000"
                        sub="Increasing Event Spend"
                        source="EventTrack 2025"
                        className="h-full border-none bg-transparent p-0"
                    />}
                    icon={<Users className="h-6 w-6 text-white" />}
                    className="bg-white/5 border-white/10"
                />

                <BentoItem
                    span={2}
                    title="Market Sizing (TAM/SAM/SOM)"
                    description="Bottoms-up analysis: From Global Opportunity to Year 1 Execution."
                    header={
                        <motion.div
                            className="flex items-end justify-between h-full px-4 pb-4 gap-4"
                            variants={staggerContainer(0.2, 0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* TAM */}
                            <motion.div variants={fadeInUp(0)} className="flex flex-col items-center flex-1 group">
                                <div className="text-sm font-bold text-gray-400 mb-2">TAM</div>
                                <motion.div
                                    className="w-full bg-gray-800 rounded-t-lg relative overflow-hidden group-hover:bg-gray-700 transition-colors group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: 120 }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-xs text-center p-2 text-gray-500">
                                        Global Experiential
                                    </div>
                                </motion.div>
                                <div className="text-xl font-bold text-white mt-2">$<AnimatedCounter value={128} duration={2} />B</div>
                            </motion.div>

                            {/* SAM */}
                            <motion.div variants={fadeInUp(0)} className="flex flex-col items-center flex-1 group">
                                <div className="text-sm font-bold text-data-neon-blue mb-2">SAM</div>
                                <motion.div
                                    className="w-full bg-data-neon-blue/20 rounded-t-lg relative overflow-hidden border-t border-x border-data-neon-blue/30 group-hover:bg-data-neon-blue/30 transition-colors group-hover:shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: 80 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-xs text-center p-2 text-data-neon-blue">
                                        North America
                                    </div>
                                </motion.div>
                                <div className="text-xl font-bold text-data-neon-blue mt-2">$<AnimatedCounter value={17.2} decimals={1} duration={2} />B</div>
                            </motion.div>

                            {/* SOM */}
                            <motion.div variants={fadeInUp(0)} className="flex flex-col items-center flex-1 group">
                                <div className="text-sm font-bold text-data-neon-violet mb-2">SOM</div>
                                <motion.div
                                    className="w-full bg-data-neon-violet rounded-t-lg relative overflow-hidden shadow-[0_0_20px_rgba(124,58,237,0.5)] group-hover:shadow-[0_0_30px_rgba(124,58,237,0.8)] transition-shadow"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: 40 }}
                                    viewport={{ once: true }}
                                    animate={{
                                        boxShadow: [
                                            '0 0 20px rgba(124,58,237,0.5)',
                                            '0 0 30px rgba(124,58,237,0.8)',
                                            '0 0 20px rgba(124,58,237,0.5)',
                                        ],
                                    }}
                                    transition={{
                                        height: { duration: 1, delay: 1 },
                                        boxShadow: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }
                                    }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-[10px] text-center p-1 text-white font-bold">
                                        Year 1
                                    </div>
                                </motion.div>
                                <div className="text-xl font-bold text-data-neon-violet mt-2">$<AnimatedCounter value={1.25} decimals={2} duration={2} />M</div>
                            </motion.div>
                        </motion.div>
                    }
                    icon={<TrendingUp className="h-6 w-6 text-white" />}
                    className="bg-deep-void border-white/10"
                />
            </BentoGrid>
        </Slide>
    );
}
