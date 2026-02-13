"use client";

import { Slide } from "@/components/ui/slide";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { StatCard } from "@/components/ui/stat-card";
import { Brain, Gamepad2, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide7_Psychology() {
    return (
        <Slide className="bg-deep-void">
            <div className="mb-12">
                <span className="text-pink-500 font-mono text-xs tracking-widest uppercase">The Psychology</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-4"
                >
                    Why They <span className="text-pink-500">Play.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                    We tap into "Anemoia"—nostalgia for a time they never lived.
                </p>
            </div>

            <BentoGrid className="md:auto-rows-[16rem]">
                <BentoItem
                    span={2}
                    title="The 'Sober Curious' Shift"
                    description="Gen Z drinks 20% less than Millennials. They crave connection over consumption."
                    header={<StatCard
                        value="+386%"
                        label="Growth"
                        sub="Competitive Socializing Venues"
                        source="Cushman & Wakefield"
                        color="violet"
                        className="h-full border-none bg-transparent p-0"
                    />}
                    icon={<PartyPopper className="h-6 w-6 text-pink-500" />}
                    className="bg-pink-500/5 border-pink-500/20"
                />

                <BentoItem
                    span={1}
                    title="Anemoia"
                    description="Nostalgia for the 80s/90s arcade aesthetic, modernized."
                    header={
                        <div className="h-full flex items-center justify-center">
                            <Gamepad2 className="w-20 h-20 text-white/20" />
                        </div>
                    }
                    icon={<Brain className="h-6 w-6 text-white" />}
                    className="bg-deep-void border-white/10"
                />

                <BentoItem
                    span={3}
                    title="The Dopamine Loop"
                    description="Trigger -> Action -> Reward -> Investment. The classic arcade loop, applied to brand engagement."
                    header={
                        <div className="w-full h-full flex items-center justify-around px-8">
                            <div className="text-center">
                                <div className="w-4 h-4 rounded-full bg-white mx-auto mb-2" />
                                <div className="text-xs font-mono text-gray-500">TRIGGER</div>
                            </div>
                            <div className="h-[2px] bg-white/10 flex-1 mx-4" />
                            <div className="text-center">
                                <div className="w-4 h-4 rounded-full bg-pink-500 mx-auto mb-2 animate-pulse" />
                                <div className="text-xs font-mono text-pink-500">ACTION</div>
                            </div>
                            <div className="h-[2px] bg-white/10 flex-1 mx-4" />
                            <div className="text-center">
                                <div className="w-4 h-4 rounded-full bg-data-neon-cyan mx-auto mb-2" />
                                <div className="text-xs font-mono text-data-neon-cyan">REWARD</div>
                            </div>
                        </div>
                    }
                    icon={<div className="text-xs font-mono text-gray-500">HOOK MODEL</div>}
                    className="bg-white/5 border-white/10"
                />
            </BentoGrid>
        </Slide>
    );
}
