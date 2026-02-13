"use client";

import { Slide } from "@/components/ui/slide";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { StatCard } from "@/components/ui/stat-card";
import { Hand, Cpu, Zap, WifiOff } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide5_Product() {
    return (
        <Slide className="bg-deep-void">
            <div className="mb-12 text-center md:text-left">
                <span className="text-white/50 font-mono text-xs tracking-widest uppercase">The Hardware</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-4"
                >
                    Meet the <span className="text-white">T-3000.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                    Industrial-grade arcade hardware powered by next-gen computer vision.
                </p>
            </div>

            <BentoGrid className="md:auto-rows-[16rem]">
                <BentoItem
                    span={2}
                    title="Skeletal Tracking Engine"
                    description="UltraLeap Leap Motion 2 tracks 27 hand joints in real-time. Zero latency. No controllers."
                    header={
                        <div className="flex items-center justify-center h-full bg-data-neon-violet/5">
                            <div className="relative w-32 h-32 rounded-full border-4 border-data-neon-violet/30 flex items-center justify-center animate-pulse-glow">
                                <Hand className="w-16 h-16 text-data-neon-violet" />
                                <div className="absolute inset-0 border border-data-neon-violet rounded-full opacity-20 scale-150" />
                            </div>
                        </div>
                    }
                    icon={<Hand className="h-6 w-6 text-data-neon-violet" />}
                    className="bg-deep-void border-white/10"
                />

                <BentoItem
                    span={1}
                    title="TouchDesigner Core"
                    description="Procedural generation engine running 60fps interactive fluid physics."
                    header={<StatCard
                        value="60 FPS"
                        label="Real-Time Render"
                        sub="Generative Art"
                        color="cyan"
                        className="h-full border-none bg-transparent p-0"
                    />}
                    icon={<Cpu className="h-6 w-6 text-data-neon-cyan" />}
                    className="bg-deep-void border-white/10"
                />

                <BentoItem
                    span={1}
                    title="Offline-First Edge Compute"
                    description="Deployed anywhere. No Wifi needed. Data syncs when connection restores."
                    header={<StatCard
                        value="100%"
                        label="Uptime"
                        sub="Local Processing"
                        color="white"
                        className="h-full border-none bg-transparent p-0"
                    />}
                    icon={<WifiOff className="h-6 w-6 text-white" />}
                    className="bg-deep-void border-white/10"
                />

                <BentoItem
                    span={2}
                    title="360° Sensory Feedback"
                    description="Rear LED matrix and base neon flex respond to user interactions."
                    header={
                        <div className="h-full w-full bg-gradient-to-r from-deep-void via-data-neon-violet/20 to-deep-void flex items-center justify-center">
                            <span className="font-mono text-data-neon-violet tracking-[0.5em] animate-pulse">IMMERSIVE</span>
                        </div>
                    }
                    icon={<Zap className="h-6 w-6 text-yellow-400" />}
                    className="bg-deep-void border-white/10"
                />
            </BentoGrid>
        </Slide>
    );
}
