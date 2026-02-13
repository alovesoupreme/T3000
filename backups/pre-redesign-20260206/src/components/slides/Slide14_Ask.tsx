"use client";

import { Slide } from "@/components/ui/slide";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { StatCard } from "@/components/ui/stat-card";
import { Coins, Handshake, ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide14_Ask() {
    return (
        <Slide className="bg-deep-void-light">
            <div className="mb-12">
                <span className="text-yellow-400 font-mono text-xs tracking-widest uppercase">The Ask</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-4"
                >
                    Fuel the <span className="text-yellow-400">Fire.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                    Raising Seed Capital to manufacture the first fleet and launch the SaaS platform.
                </p>
            </div>

            <BentoGrid className="md:auto-rows-[16rem]">
                <BentoItem
                    span={2}
                    title="Seed Round"
                    description="Hardware manufacturing & Sales Team Expansion."
                    header={
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="text-6xl md:text-8xl font-bold text-white tracking-tighter">$2M</div>
                            <div className="flex gap-4 mt-8">
                                <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">SAFE Note</div>
                                <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">$12M Cap</div>
                            </div>
                        </div>
                    }
                    icon={<Coins className="h-6 w-6 text-yellow-400" />}
                    className="bg-deep-void border-white/10"
                />

                <BentoItem
                    span={1}
                    title="18-Month Roadmap"
                    description="Capital deployment tied to concrete milestones."
                    header={
                        <div className="flex flex-col justify-center h-full px-6 space-y-4">
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between text-sm"><span className="text-gray-400">Month 6</span> <span className="font-bold text-white">10 Units Live</span></div>
                                <div className="w-full h-1 bg-white/10 rounded-full"><div className="w-[30%] h-full bg-yellow-400" /></div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between text-sm"><span className="text-gray-400">Month 12</span> <span className="font-bold text-white">SaaS Launch</span></div>
                                <div className="w-full h-1 bg-white/10 rounded-full"><div className="w-[60%] h-full bg-yellow-400/80" /></div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between text-sm"><span className="text-gray-400">Month 18</span> <span className="font-bold text-white">50 Units / $1.25M ARR</span></div>
                                <div className="w-full h-1 bg-white/10 rounded-full"><div className="w-[100%] h-full bg-yellow-400/60" /></div>
                            </div>
                        </div>
                    }
                    icon={<ArrowUpRight className="h-6 w-6 text-yellow-500" />}
                    className="bg-yellow-500/5 border-yellow-500/20"
                />

                <BentoItem
                    span={1}
                    title="Exit Strategy"
                    description="Acquisition by EventTech or MarTech giants."
                    header={
                        <div className="flex flex-col gap-2 p-6">
                            <div className="text-xs font-mono text-gray-500 uppercase mb-2">POTENTIAL ACQUIRERS</div>
                            <div className="font-bold text-white text-lg">Cvent</div>
                            <div className="font-bold text-white text-lg">Eventbrite</div>
                            <div className="font-bold text-white text-lg">Adobe (Marketo)</div>
                            <div className="font-bold text-white text-lg">Salesforce</div>
                        </div>
                    }
                    icon={<Handshake className="h-6 w-6 text-white" />}
                    className="bg-white/5 border-white/10"
                />

                <BentoItem
                    span={2}
                    title="Comparable Exits"
                    description="Event tech companies are trading at high revenue multiples due to first-party data scarcity."
                    header={
                        <div className="h-full flex items-center justify-around px-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">Goldcast</div>
                                <div className="text-sm text-green-500 font-mono">27x REVENUE</div>
                                <div className="text-xs text-gray-500">ACQUIRED 2024</div>
                            </div>
                            <div className="w-px h-16 bg-white/10" />
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">Splash</div>
                                <div className="text-sm text-green-500 font-mono">18x REVENUE</div>
                                <div className="text-xs text-gray-500">ACQUIRED 2023</div>
                            </div>
                        </div>
                    }
                    icon={<Check className="h-6 w-6 text-green-500" />}
                    className="bg-deep-void border-white/10"
                />
            </BentoGrid>
        </Slide>
    );
}
