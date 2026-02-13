"use client";

import { Slide } from "@/components/ui/slide";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ScanLine } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
import { GlitchEffect, ParticleField } from "@/components/ui/micro-interactions";
import { useRef } from "react";

export default function SlideHero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax transforms
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <Slide ref={containerRef} className="bg-deep-void relative overflow-hidden">
            {/* Particle Field */}
            <ParticleField count={30} className="z-0" />

            {/* Ambient Background with Parallax */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-0"
                style={{ y: backgroundY }}
            >
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-data-neon-violet/10 blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] rounded-full bg-data-neon-cyan/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
            </motion.div>

            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full"
                style={{ opacity: contentOpacity }}
            >
                <motion.div
                    className="space-y-8 z-10"
                    variants={staggerContainer(0.2, 0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={fadeInUp(0)}>
                        <Badge variant="outline" className="mb-6 border-data-neon-violet text-data-neon-violet px-4 py-1.5 text-sm tracking-wider uppercase">
                            Seed Round Open
                        </Badge>
                        <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                            Touch the <br />
                            <GlitchEffect className="text-transparent bg-clip-text bg-gradient-to-r from-data-neon-violet to-data-neon-cyan animate-pulse-glow text-glow-cyan inline-block">
                                Impossible.
                            </GlitchEffect>
                        </h1>
                    </motion.div>

                    <motion.p
                        variants={fadeInUp(0)}
                        className="text-xl md:text-2xl text-gray-400 font-light max-w-lg leading-relaxed"
                    >
                        The physical interface for <span className="text-white font-medium">zero-party data</span>.
                        <br />
                        Turning 30 seconds of play into a lifetime of customer value.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp(0)}
                        className="flex gap-4"
                    >
                        <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-white/90 text-lg font-bold tracking-tight">
                            Start Tour
                        </Button>
                        <Button variant="outline" className="h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/10 text-lg">
                            Watch Deployment
                        </Button>
                    </motion.div>
                </motion.div>

                <div className="relative h-full flex items-center justify-center z-10">
                    <motion.div
                        variants={scaleIn(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative w-full max-w-[400px] aspect-[9/16] rounded-[3rem] border-4 border-white/10 bg-black shadow-2xl animate-float overflow-hidden group will-change-transform"
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {/* Kiosk Bezel Glow */}
                        <div className="absolute inset-0 rounded-[2.5rem] border border-data-neon-violet/30 shadow-[0_0_50px_rgba(124,58,237,0.2)]" />

                        {/* Screen Content */}
                        <div className="absolute inset-2 bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center relative scanlines">
                            {/* Scanning Line Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-data-neon-cyan/10 to-transparent w-full h-[20%] animate-[float_4s_linear_infinite] pointer-events-none" />

                            {/* Attract Mode UI */}
                            <div className="text-center space-y-4">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-32 h-32 rounded-full border-2 border-dashed border-data-neon-cyan mx-auto flex items-center justify-center"
                                >
                                    <div className="w-24 h-24 rounded-full bg-data-neon-cyan/20 blur-md" />
                                </motion.div>

                                <h3 className="text-3xl font-bold text-white tracking-widest font-mono">T-3000</h3>
                                <p className="text-data-neon-cyan text-sm animate-pulse tracking-[0.2em]">READY PLAYER ONE</p>
                            </div>

                            {/* Touch Indicator */}
                            <div className="absolute bottom-12 flex flex-col items-center gap-2">
                                <ScanLine className="text-white/50 w-6 h-6 animate-bounce" />
                                <span className="text-[10px] text-white/30 uppercase tracking-widest">Touch to Start</span>
                            </div>
                        </div>

                        {/* Reflection/Gloss */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[3rem] pointer-events-none" />
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 cursor-pointer z-10"
            >
                <ChevronDown className="w-8 h-8" />
            </motion.div>
        </Slide>
    );
}
