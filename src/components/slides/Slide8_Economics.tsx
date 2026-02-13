"use client";

import { Slide } from "@/components/ui/slide";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { StatCard } from "@/components/ui/stat-card";
import { DollarSign, BarChart3, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide8_Economics() {
    return (
        <Slide className="bg-deep-void-light">
            <div className="mb-12">
                <span className="text-green-500 font-mono text-xs tracking-widest uppercase">The Economics</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-4"
                >
                    The CPL <span className="text-green-500">Arbitrage.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                    We deliver high-intent leads at a fraction of the cost of traditional B2B channels.
                </p>
            </div>

            <BentoGrid className="md:auto-rows-[20rem]">
                <BentoItem
                    span={2}
                    title="Cost Per Lead (CPL) Comparison"
                    description="90% reduction in acquisition cost compared to trade show averages."
                    header={
                        <div className="w-full h-full flex items-end justify-around pb-8 px-4 gap-4">
                            {/* Trade Show */}
                            <div className="w-1/3 flex flex-col items-center group">
                                <div className="text-lg font-bold text-gray-500 mb-2">$840</div>
                                <div className="w-full bg-gray-700/50 rounded-t-lg relative overflow-hidden h-[180px] group-hover:bg-gray-700 transition-colors">
                                    <div className="absolute inset-x-0 bottom-0 top-0 bg-red-500/5" />
                                </div>
                                <div className="text-xs font-mono text-gray-500 mt-2 text-center">TRADE SHOW B2B</div>
                                <div className="text-[8px] font-mono text-gray-600 text-center">Sopro.io 2025</div>
                            </div>

                            {/* LinkedIn */}
                            <div className="w-1/3 flex flex-col items-center group">
                                <div className="text-lg font-bold text-gray-500 mb-2">$298</div>
                                <div className="w-full bg-gray-700/50 rounded-t-lg relative overflow-hidden h-[63px] group-hover:bg-gray-700 transition-colors">
                                </div>
                                <div className="text-xs font-mono text-gray-500 mt-2 text-center">LINKEDIN SAAS</div>
                            </div>

                            {/* T-3000 */}
                            <div className="w-1/3 flex flex-col items-center group">
                                <div className="text-3xl font-bold text-green-500 mb-2">$10</div>
                                <div className="w-full bg-green-500 rounded-t-lg relative overflow-hidden h-[5px] shadow-[0_0_20px_rgba(34,197,94,0.5)] animate-pulse">
                                </div>
                                <div className="text-xs font-bold font-mono text-white mt-2 text-center">T-3000 ARCADE</div>
                            </div>
                        </div>
                    }
                    icon={<ArrowDown className="h-6 w-6 text-green-500" />}
                    className="bg-deep-void border-white/10"
                />

                <BentoItem
                    span={1}
                    title="Efficiency"
                    description="Automated capture means no staffing cost per lead."
                    header={<StatCard
                        value="98%"
                        label="Margin"
                        sub="On Data Capture"
                        color="white"
                        className="h-full border-none bg-transparent p-0"
                    />}
                    icon={<DollarSign className="h-6 w-6 text-green-500" />}
                    className="bg-green-500/5 border-green-500/20"
                />
            </BentoGrid>
        </Slide>
    );
}
