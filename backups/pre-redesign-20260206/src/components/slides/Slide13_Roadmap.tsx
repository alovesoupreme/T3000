"use client";

import { Slide } from "@/components/ui/slide";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { Flag, Rocket, Globe2, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide13_Roadmap() {
    return (
        <Slide className="bg-deep-void">
            <div className="mb-12">
                <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">The Future</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-4"
                >
                    Scale to <span className="text-blue-500">Exit.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                    From pilot validation to global franchise model in 24 months.
                </p>
            </div>

            <BentoGrid className="md:auto-rows-[16rem]">
                <BentoItem
                    span={1}
                    title="Phase 1: Validation"
                    description="Current State. Proprietary hardware deployed. Bass Coast verified."
                    header={
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="w-4 h-4 rounded-full bg-green-500 mb-2 relative">
                                <div className="absolute inset-0 bg-green-500 animate-ping rounded-full" />
                            </div>
                            <div className="text-xs font-mono text-green-500 uppercase tracking-widest">COMPLETE</div>
                            <Flag className="w-8 h-8 text-white mt-4" />
                        </div>
                    }
                    icon={<Flag className="h-6 w-6 text-white" />}
                    className="bg-white/5 border-white/10"
                />

                <BentoItem
                    span={1}
                    title="Phase 2: Scale"
                    description="Q3-Q4 2025. Deploy 50 units. Launch Self-Serve SaaS Dashboard."
                    header={
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="text-3xl font-bold text-blue-500">50 Units</div>
                            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">WEST COAST EXPANSION</div>
                        </div>
                    }
                    icon={<Rocket className="h-6 w-6 text-blue-500" />}
                    className="bg-blue-500/10 border-blue-500/20"
                />

                <BentoItem
                    span={1}
                    title="Phase 3: Franchise"
                    description="2026. Global Licensing Model. 'Starbucks of Data Arcades'."
                    header={
                        <div className="flex flex-col items-center justify-center h-full">
                            <Globe2 className="w-12 h-12 text-blue-400 opacity-50 mb-2" />
                            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">GLOBAL LICENSING</div>
                        </div>
                    }
                    icon={<Globe2 className="h-6 w-6 text-blue-400" />}
                    className="bg-deep-void border-white/10"
                />

                <BentoItem
                    span={3}
                    title="The Milestone: $5M ARR"
                    description="Target for Series A or Early Exit/Acquisition."
                    header={
                        <div className="w-full h-full flex items-center justify-between px-12 relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.3)_50%,transparent_75%,transparent_100%)] bg-[length:40px_40px]" />

                            <div className="z-10 bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                                <span className="block text-xs text-gray-400 mb-1">CURRENT</span>
                                <span className="text-xl font-bold text-white">$120k ARR</span>
                            </div>

                            <div className="flex-1 h-1 bg-white/10 mx-8 relative">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                                />
                            </div>

                            <div className="z-10 bg-blue-500/20 px-4 py-2 rounded-lg border border-blue-500/50">
                                <span className="block text-xs text-blue-300 mb-1">TARGET (18 MO)</span>
                                <span className="text-xl font-bold text-white">$5M ARR</span>
                            </div>
                        </div>
                    }
                    icon={<Building2 className="h-6 w-6 text-blue-500" />}
                    className="bg-deep-void border-white/10"
                />
            </BentoGrid>
        </Slide>
    );
}
