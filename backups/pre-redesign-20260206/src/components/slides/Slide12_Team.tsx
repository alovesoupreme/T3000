"use client";

import { Slide } from "@/components/ui/slide";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { Code2, Palette, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide12_Team() {
    return (
        <Slide className="bg-deep-void-light">
            <div className="mb-12">
                <span className="text-white/50 font-mono text-xs tracking-widest uppercase">The Builders</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-4"
                >
                    Hardware Meets <br /><span className="text-white">Software Magic.</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-deep-void border border-white/10 rounded-3xl p-8 hover:border-data-neon-violet/30 transition-colors group"
                >
                    <div className="w-24 h-24 rounded-2xl bg-gray-800 mb-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white/40">PU</div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-3xl font-bold text-white">Paris Urquhart</h3>
                        <Palette className="w-6 h-6 text-data-neon-violet" />
                    </div>
                    <div className="font-mono text-sm text-data-neon-violet mb-4">CO-FOUNDER & CREATIVE DIRECTOR</div>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        8+ years designing props in the film industry. Music producer & sound designer.
                        Now focused on creating unique interactive experiences that inspire others to realize their dreams.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 text-[10px] bg-white/5 rounded text-gray-500 border border-white/10">Film Industry</span>
                        <span className="px-2 py-1 text-[10px] bg-white/5 rounded text-gray-500 border border-white/10">Sound Design</span>
                        <span className="px-2 py-1 text-[10px] bg-white/5 rounded text-gray-500 border border-white/10">Interactive XP</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-deep-void border border-white/10 rounded-3xl p-8 hover:border-data-neon-cyan/30 transition-colors group"
                >
                    <div className="w-24 h-24 rounded-2xl bg-gray-800 mb-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white/40">AH</div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-3xl font-bold text-white">Andrew Haydock</h3>
                        <Code2 className="w-6 h-6 text-data-neon-cyan" />
                    </div>
                    <div className="font-mono text-sm text-data-neon-cyan mb-4">CO-FOUNDER & OPERATIONS</div>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        Curator, choreographer, and marketing veteran. Manages operations at Celebrities Vancouver & Village Studios.
                        Deep expertise in event activation and audience engagement.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 text-[10px] bg-white/5 rounded text-gray-500 border border-white/10">Event Ops</span>
                        <span className="px-2 py-1 text-[10px] bg-white/5 rounded text-gray-500 border border-white/10">Marketing</span>
                        <span className="px-2 py-1 text-[10px] bg-white/5 rounded text-gray-500 border border-white/10">Curation</span>
                    </div>
                </motion.div>
            </div>

            <div className="mt-12 text-center">
                <span className="text-white/30 font-mono text-[10px] tracking-widest uppercase mb-4 block">Supported By Industry Leaders</span>
                <div className="flex flex-wrap justify-center gap-8 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <span className="text-white font-bold tracking-widest">CELEBRITIES™</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <span className="text-white font-bold tracking-widest">BASS COAST</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <span className="text-white font-bold tracking-widest">THIS IS BLUEPRINT</span>
                    </div>
                </div>
            </div>
        </Slide>
    );
}
