"use client";

import { Slide } from "@/components/ui/slide";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { StatCard } from "@/components/ui/stat-card";
import { EyeOff, MousePointerClick, Cookie, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide2_Crisis() {
    return (
        <Slide className="bg-deep-void-light">
            <div className="mb-12">
                <BadTag>The Crisis</BadTag>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-4"
                >
                    Digital Attention is <span className="text-red-500">Bankrupt.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                    The old playbook of efficient digital targeting is dead. Brands are shouting into the void.
                </p>
            </div>

            <BentoGrid className="md:auto-rows-[16rem]">
                <BentoItem
                    span={2}
                    title="Display Ad CTR Collapse"
                    description="The global average click-through rate has flatlined. You are paying for ghosts."
                    header={<StatCard
                        value="0.46%"
                        label="Display Ad CTR"
                        sub="Industry Average 2025"
                        source="Google Ads Benchmark 2026"
                        trend="down"
                        trendValue="Flatlined"
                        color="white"
                        className="h-full border-none bg-transparent p-0"
                    />}
                    icon={<MousePointerClick className="h-6 w-6 text-red-500" />}
                    className="bg-red-500/10 border-red-500/20"
                />

                <BentoItem
                    span={1}
                    title="Banner Blindness"
                    description="Users subconsciously ignore ad-like content."
                    header={<StatCard
                        value="86%"
                        label="Ignore Ads"
                        source="Nielsen Norman Group"
                        className="h-full border-none bg-transparent p-0"
                    />}
                    icon={<EyeOff className="h-6 w-6 text-orange-500" />}
                    className="bg-orange-500/10 border-orange-500/20"
                />

                <BentoItem
                    span={1}
                    title="The Cookie Apocalypse"
                    description="Chrome's 'User Choice' killed 3rd party tracking."
                    header={<StatCard
                        value="DEAD"
                        label="3rd Party Cookies"
                        source="Chrome Privacy Sandbox"
                        color="cyan"
                        className="h-full border-none bg-transparent p-0"
                    />}
                    icon={<Cookie className="h-6 w-6 text-gray-500" />}
                    className="bg-gray-800/50 border-gray-700"
                />

                <BentoItem
                    span={2}
                    title="The Trust Deficit"
                    description="Privacy concerns are at an all-time high. Passive tracking is now a liability."
                    header={
                        <div className="flex items-center justify-center h-full text-center">
                            <div className="text-2xl font-mono text-gray-300">
                                "Customers demand <span className="text-white font-bold">Value Exchange</span>, not extraction."
                            </div>
                        </div>
                    }
                    icon={<ShieldAlert className="h-6 w-6 text-white" />}
                    className="bg-deep-void border-white/10"
                />
            </BentoGrid>
        </Slide>
    );
}

function BadTag({ children }: { children: React.ReactNode }) {
    return (
        <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-mono tracking-widest uppercase">
            {children}
        </span>
    );
}
