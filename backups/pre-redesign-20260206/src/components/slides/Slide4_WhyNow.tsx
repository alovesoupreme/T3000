"use client";

import { Slide } from "@/components/ui/slide";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { StatCard } from "@/components/ui/stat-card";
import { Lock, Fingerprint, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide4_WhyNow() {
    return (
        <Slide className="bg-deep-void-light">
            <div className="mb-12">
                <span className="text-data-neon-violet font-mono text-xs tracking-widest uppercase">Why Now?</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-4"
                >
                    The Rise of <span className="text-data-neon-violet">Zero-Party Data.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                    With tracking dead, data that customers <span className="text-white italic">intentionally share</span> is the new gold standard.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Visualizing the Shift */}
                <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20 relative overflow-hidden group">
                    <div className="absolute top-4 right-4 text-xs font-mono text-red-500 uppercase">Toxic Asset</div>
                    <h3 className="text-2xl font-bold text-gray-400 mb-2 group-hover:text-red-400 transition-colors">3rd Party Data</h3>
                    <p className="text-sm text-gray-500 mb-8">Cookies, tracking pixels, inferred behavior.</p>
                    <div className="flex gap-2 opacity-50">
                        <span className="px-2 py-1 bg-red-500/10 rounded text-red-500 text-xs">Unreliable</span>
                        <span className="px-2 py-1 bg-red-500/10 rounded text-red-500 text-xs">Illegal</span>
                        <span className="px-2 py-1 bg-red-500/10 rounded text-red-500 text-xs">Creepy</span>
                    </div>
                </div>

                <div className="p-8 rounded-3xl bg-data-neon-violet/10 border border-data-neon-violet/30 relative overflow-hidden shadow-[0_0_50px_rgba(124,58,237,0.1)]">
                    <div className="absolute top-4 right-4 text-xs font-mono text-data-neon-violet uppercase">Safe Asset</div>
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-data-neon-violet/20 blur-[60px] rounded-full" />

                    <h3 className="text-3xl font-bold text-white mb-2">Zero-Party Data</h3>
                    <p className="text-sm text-gray-400 mb-8">Data shared intentionally in exchange for value.</p>

                    <div className="flex gap-2">
                        <span className="px-2 py-1 bg-data-neon-violet/20 rounded text-data-neon-violet text-xs border border-data-neon-violet/30">Accurate</span>
                        <span className="px-2 py-1 bg-data-neon-violet/20 rounded text-data-neon-violet text-xs border border-data-neon-violet/30">Consented</span>
                        <span className="px-2 py-1 bg-data-neon-violet/20 rounded text-data-neon-violet text-xs border border-data-neon-violet/30">Owned</span>
                    </div>
                </div>
            </div>

            <BentoGrid className="md:auto-rows-[14rem]">
                <BentoItem
                    span={1}
                    title="Canada: Sponsorship Surge"
                    description="Canadian brands are pouring money into experiential."
                    header={<StatCard
                        value="+58%"
                        label="YoY Growth"
                        sub="CAD $2.56B Rights Fees"
                        source="Media in Canada 2024"
                        trend="up"
                        trendValue="$4.22B Total"
                        color="violet"
                        className="h-full border-none bg-transparent p-0"
                    />}
                    icon={<RefreshCw className="h-6 w-6 text-data-neon-violet" />}
                    className="bg-deep-void border-white/10"
                />

                <BentoItem
                    span={1}
                    title="Definition"
                    description="The only way to know what a customer wants is to ask them."
                    header={
                        <div className="h-full flex items-center justify-center text-center px-4">
                            <p className="text-lg italic text-gray-300">
                                "I like dark beer." <br />
                                <span className="text-xs text-gray-500 not-italic normal-case block mt-2">(Not inferred from clicks)</span>
                            </p>
                        </div>
                    }
                    icon={<Fingerprint className="h-6 w-6 text-white" />}
                    className="bg-white/5 border-white/10"
                />

                <BentoItem
                    span={1}
                    title="Security"
                    description="Future-proof against privacy legislation."
                    header={<StatCard
                        value="100%"
                        label="Compliance"
                        sub="GDPR / CCPA Safe"
                        color="white"
                        className="h-full border-none bg-transparent p-0"
                    />}
                    icon={<Lock className="h-6 w-6 text-white" />}
                    className="bg-deep-void border-white/10"
                />
            </BentoGrid>
        </Slide>
    );
}
