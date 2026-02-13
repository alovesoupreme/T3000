"use client";

import { Slide } from "@/components/ui/slide";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { StatCard } from "@/components/ui/stat-card";
import { Wallet, Repeat, Hammer, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide11_BusinessModel() {
    return (
        <Slide className="bg-deep-void">
            <div className="mb-12">
                <span className="text-white/50 font-mono text-xs tracking-widest uppercase">The Money</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-4"
                >
                    Diversified <span className="text-white">Revenue.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                    Robust unit economics with high upfront cash flow and recurring ARR.
                </p>
            </div>

            <BentoGrid className="md:auto-rows-[16rem]">
                <BentoItem
                    span={1}
                    title="1. Hardware Sales"
                    description="Upfront capex for T-3000 units. High margin industrial fabrication."
                    header={
                        <div className="flex flex-col items-center justify-center h-full gap-2">
                            <div className="text-3xl font-bold text-white">$25,000</div>
                            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">PER UNIT</div>
                            <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                <div className="h-full w-[40%] bg-white" />
                            </div>
                            <div className="text-[10px] text-gray-500">40% MARGIN</div>
                        </div>
                    }
                    icon={<Wallet className="h-6 w-6 text-white" />}
                    className="bg-deep-void border-white/10 relative"
                />

                <BentoItem
                    span={1}
                    title="2. SaaS Subscription"
                    description="Monthly fee for Data Dashboard, Cloud Sync, and CMS access."
                    header={
                        <div className="flex flex-col items-center justify-center h-full gap-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-data-neon-violet/5 animate-pulse-glow" />
                            <div className="text-3xl font-bold text-data-neon-violet">$2,000</div>
                            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">MONTHLY ARR</div>
                            <div className="flex gap-1 mt-2">
                                <div className="w-2 h-2 rounded-full bg-data-neon-violet" />
                                <div className="w-2 h-2 rounded-full bg-data-neon-violet" />
                                <div className="w-2 h-2 rounded-full bg-data-neon-violet" />
                            </div>
                        </div>
                    }
                    icon={<Repeat className="h-6 w-6 text-data-neon-violet" />}
                    className="bg-data-neon-violet/10 border-data-neon-violet/20"
                />

                <BentoItem
                    span={1}
                    title="3. Creative Services"
                    description="Brand-specific 3D asset creation and custom game logic."
                    header={
                        <div className="flex flex-col items-center justify-center h-full gap-2">
                            <div className="text-3xl font-bold text-data-neon-cyan">$5k - $50k</div>
                            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">PER CAMPAIGN</div>
                            <Hammer className="w-8 h-8 text-data-neon-cyan/50 mt-2" />
                        </div>
                    }
                    icon={<Hammer className="h-6 w-6 text-data-neon-cyan" />}
                    className="bg-data-neon-cyan/5 border-data-neon-cyan/20"
                />

                <BentoItem
                    span={3}
                    title="Unit Economics (Year 1)"
                    description="One unit deployed for 12 months generates significant free cash flow."
                    header={
                        <div className="w-full h-full flex items-center justify-around px-8 font-mono text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span className="text-gray-400">Hardware:</span>
                                <span className="text-white font-bold">$10k GP</span>
                            </div>
                            <div className="h-px w-8 bg-gray-700 md:w-px md:h-8" />
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span className="text-gray-400">SaaS:</span>
                                <span className="text-white font-bold">$24k ARR</span>
                            </div>
                            <div className="h-px w-8 bg-gray-700 md:w-px md:h-8" />
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span className="text-gray-400">Total Year 1:</span>
                                <span className="text-green-500 font-bold">$34k Value</span>
                            </div>
                        </div>
                    }
                    icon={<div className="font-mono text-xs text-green-500">PAYBACK &lt; 9 MONTHS</div>}
                    className="bg-deep-void border-white/10"
                />
            </BentoGrid>
        </Slide>
    );
}
