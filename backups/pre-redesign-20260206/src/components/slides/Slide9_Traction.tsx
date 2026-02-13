"use client";

import { Slide } from "@/components/ui/slide";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { StatCard } from "@/components/ui/stat-card";
import { Users, Music, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

// Deterministic heights for crowd visualization (prevents hydration mismatch)
const crowdHeights = [35, 68, 42, 91, 55, 78, 38, 82, 48, 71, 62, 45, 88, 52, 75, 40, 85, 58, 95, 50];

export default function Slide9_Traction() {
    return (
        <Slide className="bg-deep-void">
            <div className="mb-12">
                <span className="text-yellow-500 font-mono text-xs tracking-widest uppercase">The Proof</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-4"
                >
                    Deployments & <span className="text-yellow-500">Traction.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                    Proven in the field. High-traffic environments. 100% Uptime.
                </p>
            </div>

            <BentoGrid className="md:auto-rows-[16rem]">
                <BentoItem
                    span={2}
                    title="Case Study: Bass Coast Festival"
                    description="Deployed at Western Canada's premier boutique festival. 6,000+ Attendees."
                    header={
                        <div className="flex items-center justify-center h-full bg-yellow-500/5 relative overflow-hidden">
                            {/* Abstract Festival Crowd Visualization */}
                            <div className="flex gap-2 items-end h-[60%] w-[80%] opacity-50">
                                {crowdHeights.map((height, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-yellow-500 flex-1 rounded-t-sm"
                                        initial={{ height: "10%" }}
                                        whileInView={{ height: `${height}%` }}
                                        transition={{ duration: 0.5, delay: i * 0.05 }}
                                    />
                                ))}
                            </div>
                            <div className="absolute top-4 left-4 bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-xs">
                                DEPLOYED: JULY 2024
                            </div>
                        </div>
                    }
                    icon={<Music className="h-6 w-6 text-yellow-500" />}
                    className="bg-deep-void border-white/10"
                />

                <BentoItem
                    span={1}
                    title="Crowd Magnet"
                    description="Consistent queues of 10-15 people. Zero marketing spend."
                    header={<StatCard
                        value="6 Hrs+"
                        label="Daily Engagement"
                        sub="Continuous Operation"
                        color="white"
                        className="h-full border-none bg-transparent p-0"
                    />}
                    icon={<Users className="h-6 w-6 text-white" />}
                    className="bg-white/5 border-white/10"
                />

                <BentoItem
                    span={1}
                    title="User Feedback"
                    description="9.8/10 Satisfaction Score from user intercepts."
                    header={<StatCard
                        value="4.9/5"
                        label="Rating"
                        sub="Exit Survey"
                        color="white"
                        className="h-full border-none bg-transparent p-0"
                    />}
                    icon={<Star className="h-6 w-6 text-yellow-400" />}
                    className="bg-deep-void border-white/10"
                />

                <BentoItem
                    span={2}
                    title="Testimonial"
                    description="Real impact on attendee experience."
                    header={
                        <div className="h-full flex items-center p-6 italic text-gray-300 relative">
                            <Quote className="absolute top-4 left-4 text-white/10 w-12 h-12" />
                            "The single most engaging installation on the festival grounds. It wasn't just a photo booth, it was a destination."
                            <div className="absolute bottom-4 right-4 text-xs font-mono text-gray-500 not-italic">
                                - FESTIVAL DIRECTOR
                            </div>
                        </div>
                    }
                    icon={<Quote className="h-6 w-6 text-white" />}
                    className="bg-white/5 border-white/10"
                />
            </BentoGrid>
        </Slide>
    );
}
