"use client";

import { Slide } from "@/components/ui/slide";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { Radar, ScanFace, Sparkles, Camera, QrCode } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide6_Experience() {
    return (
        <Slide className="bg-deep-void-light">
            <div className="mb-12">
                <span className="text-data-neon-cyan/80 font-mono text-xs tracking-widest uppercase">The Experience</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-4"
                >
                    From <span className="text-data-neon-cyan">Awe</span> to <span className="text-data-neon-violet">Action.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                    We replaced the boring survey form with a 45-second journey into magic.
                </p>
            </div>

            <BentoGrid className="md:auto-rows-[14rem]">
                <BentoItem
                    span={1}
                    title="1. Attract Mode"
                    description="Generative art reacts to passersby up to 20ft away. Impossible to ignore."
                    header={<Radar className="w-12 h-12 text-gray-500 mb-4" />}
                    icon={<div className="font-mono text-xs text-gray-500">RANGE: 20FT</div>}
                    className="bg-deep-void border-white/10"
                />

                <BentoItem
                    span={1}
                    title="2. Digital Mirror"
                    description="Users step up and see themselves transformed. 3D objects float in their hands."
                    header={<ScanFace className="w-12 h-12 text-data-neon-cyan mb-4" />}
                    icon={<div className="font-mono text-xs text-data-neon-cyan">ENGAGEMENT START</div>}
                    className="bg-data-neon-cyan/10 border-data-neon-cyan/20"
                />

                <BentoItem
                    span={1}
                    title="3. Play & Discover"
                    description="Real-time physics. They control the art with simple hand gestures. Pure joy."
                    header={<Sparkles className="w-12 h-12 text-yellow-400 mb-4 animate-pulse" />}
                    icon={<div className="font-mono text-xs text-yellow-400">DWELL: 45 SEC</div>}
                    className="bg-yellow-400/5 border-yellow-400/20"
                />

                <BentoItem
                    span={2}
                    title="4. Create & Capture"
                    description="The system snaps the perfect moment. User enters email/phone to receive it instantly."
                    header={
                        <div className="flex items-center gap-4 p-4 border border-white/10 rounded-xl bg-white/5 w-fit mb-4">
                            <Camera className="w-6 h-6 text-white" />
                            <div className="h-8 w-[1px] bg-white/20" />
                            <div className="text-sm font-mono text-white">"Send me this!"</div>
                        </div>
                    }
                    icon={<div className="font-mono text-xs text-green-500 font-bold">+94% CONVERSION LIFT*</div>}
                    className="bg-deep-void border-white/10"
                />

                <BentoItem
                    span={1}
                    title="5. Value Exchange"
                    description="They get a branded AR memory. You get verified zero-party data."
                    header={<QrCode className="w-12 h-12 text-data-neon-violet mb-4" />}
                    icon={<div className="font-mono text-xs text-data-neon-violet">DATA SECURED</div>}
                    className="bg-data-neon-violet/10 border-data-neon-violet/20"
                />
            </BentoGrid>
        </Slide>
    );
}
