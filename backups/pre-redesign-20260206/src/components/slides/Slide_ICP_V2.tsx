"use client";

import { Slide } from "@/components/ui/slide";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { Users, Music, Building2, Ticket, AlertTriangle, Coins, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide_ICP() {
    return (
        <Slide className="bg-deep-void">
            <div className="mb-12">
                <span className="text-data-neon-pink font-mono text-xs tracking-widest uppercase animate-pulse">Select Player</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-4"
                >
                    The <span className="text-glow-pink text-data-neon-pink">Players.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                    Who is putting coins in the machine?
                </p>
            </div>

            <BentoGrid className="md:auto-rows-[16rem]">
                {/* Character Select: Market Segments */}
                <BentoItem
                    span={2}
                    title="Select Class"
                    description="Our key customer archetypes."
                    header={
                        <div className="flex items-center justify-around h-full px-2 gap-2 lg:gap-4">
                            {/* Class 1: Nightclub */}
                            <div className="flex-1 flex flex-col items-center group cursor-pointer">
                                <div className="w-20 h-20 rounded-xl bg-deep-void border border-white/20 flex items-center justify-center mb-4 relative overflow-hidden group-hover:border-data-neon-pink transition-colors">
                                    <div className="absolute inset-0 bg-data-neon-pink/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                                    <Music className="w-8 h-8 text-white group-hover:text-data-neon-pink transition-colors" />
                                    <div className="absolute top-1 right-1 text-[8px] font-mono text-white/50">LVL 1</div>
                                </div>
                                <div className="text-sm font-bold text-white uppercase tracking-wider">The Venue</div>
                                <div className="text-[10px] text-center text-gray-500 mt-1 leading-tight">High Traffic<br />Low Data</div>
                            </div>

                            {/* Divider VS */}
                            <div className="h-12 w-px bg-white/10" />

                            {/* Class 2: Festival */}
                            <div className="flex-1 flex flex-col items-center group cursor-pointer">
                                <div className="w-20 h-20 rounded-xl bg-deep-void border border-white/20 flex items-center justify-center mb-4 relative overflow-hidden group-hover:border-data-neon-violet transition-colors">
                                    <div className="absolute inset-0 bg-data-neon-violet/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                                    <Ticket className="w-8 h-8 text-white group-hover:text-data-neon-violet transition-colors" />
                                    <div className="absolute top-1 right-1 text-[8px] font-mono text-white/50">LVL 2</div>
                                </div>
                                <div className="text-sm font-bold text-white uppercase tracking-wider">The Event</div>
                                <div className="text-[10px] text-center text-gray-500 mt-1 leading-tight">Massive Scale<br />Spotty Wifi</div>
                            </div>

                            {/* Divider VS */}
                            <div className="h-12 w-px bg-white/10" />

                            {/* Class 3: Agency */}
                            <div className="flex-1 flex flex-col items-center group cursor-pointer">
                                <div className="w-20 h-20 rounded-xl bg-deep-void border border-white/20 flex items-center justify-center mb-4 relative overflow-hidden group-hover:border-data-neon-lime transition-colors">
                                    <div className="absolute inset-0 bg-data-neon-lime/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                                    <Building2 className="w-8 h-8 text-white group-hover:text-data-neon-lime transition-colors" />
                                    <div className="absolute top-1 right-1 text-[8px] font-mono text-white/50">BOSS</div>
                                </div>
                                <div className="text-sm font-bold text-white uppercase tracking-wider">The Big Boss</div>
                                <div className="text-[10px] text-center text-gray-500 mt-1 leading-tight">Blueprint<br />Live Nation</div>
                            </div>
                        </div>
                    }
                    icon={<Users className="h-6 w-6 text-data-neon-pink" />}
                    className="bg-deep-void border-white/10"
                />

                {/* The Glitch: Pain Point */}
                <BentoItem
                    span={1}
                    title="System Error"
                    description="They have thousands of guests but zero data."
                    header={
                        <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-red-500/5 animate-pulse" />
                            <div className="flex items-center gap-2 mb-2">
                                <AlertTriangle className="text-red-500 w-8 h-8 animate-bounce" />
                            </div>
                            <div className="font-mono text-4xl font-bold text-red-500/80 tracking-widest relative">
                                <span className="absolute top-0 left-0 -ml-0.5 animate-noise text-red-500/50" style={{ clipPath: 'inset(40% 0 61% 0)' }}>0 DATA</span>
                                0 DATA
                                <span className="absolute top-0 left-0 ml-0.5 animate-noise text-white/50" style={{ clipPath: 'inset(10% 0 85% 0)' }}>0 DATA</span>
                            </div>
                            <div className="font-mono text-[10px] text-red-400 mt-2">CONNECTION LOST</div>
                        </div>
                    }
                    icon={<Zap className="h-6 w-6 text-red-500" />}
                    className="bg-red-950/20 border-red-500/20"
                />

                {/* Insert Coin: Revenue */}
                <BentoItem
                    span={1}
                    title="Insert Coin"
                    description="Dual revenue stream unlocked."
                    header={
                        <div className="flex flex-col justify-center h-full px-6 gap-4">
                            <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/10">
                                <div className="text-xs text-gray-400 uppercase tracking-wider">1UP Hardware</div>
                                <div className="text-data-neon-lime font-bold font-mono">$12,000</div>
                            </div>
                            <div className="flex justify-between items-center p-3 rounded-lg bg-data-neon-pink/10 border border-data-neon-pink/30 relative overflow-hidden">
                                <div className="absolute inset-0 bg-data-neon-pink/5 animate-pulse-glow" />
                                <div className="text-xs text-data-neon-pink uppercase tracking-wider relative z-10">SaaS (XP)</div>
                                <div className="text-white font-bold font-mono relative z-10">$2,000/mo</div>
                            </div>
                        </div>
                    }
                    icon={<Coins className="h-6 w-6 text-yellow-400 animate-neon-flicker" />}
                    className="bg-deep-void border-white/10"
                />

                {/* The Strategy: Combo */}
                <BentoItem
                    span={2}
                    title="The Combo Strategy"
                    description="B2B2C: We sell to the venue. Venue verifies the user. Sponsor pays for the data."
                    header={
                        <div className="flex items-center justify-center h-full gap-2 lg:gap-4 w-full px-4">
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-800 px-3 py-1 rounded text-[10px] text-gray-400 mb-1">P1</div>
                                <div className="text-lg lg:text-xl font-bold text-white">VENUE</div>
                            </div>

                            <div className="text-gray-600 font-mono text-2xl">+</div>

                            <div className="flex flex-col items-center">
                                <div className="bg-gray-800 px-3 py-1 rounded text-[10px] text-gray-400 mb-1">P2</div>
                                <div className="text-lg lg:text-xl font-bold text-white">SPONSORS</div>
                            </div>

                            <div className="text-data-neon-pink font-mono text-2xl">=</div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-data-neon-cyan/20 blur-xl animate-pulse-glow" />
                                <div className="px-6 py-3 bg-gradient-to-r from-data-neon-blue to-data-neon-violet rounded-xl border border-white/20 relative z-10">
                                    <div className="text-white font-bold font-mono text-lg tracking-widest text-glow-cyan">COMBO!</div>
                                </div>
                            </div>
                        </div>
                    }
                    icon={<Zap className="h-6 w-6 text-data-neon-cyan" />}
                    className="bg-white/5 border-white/10"
                />
            </BentoGrid>
        </Slide>
    );
}
