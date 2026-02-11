"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SparkleText from "../components/SparkleText";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Cinematic Background with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="/bar-shinobu/hero.png"
                    alt="BAR SHINOBU Interior"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full container flex flex-col items-center justify-center">
                <div className="flex flex-row-reverse items-start gap-6 md:gap-10">
                    {/* Vertical Japanese Text */}
                    <div className="flex flex-row-reverse items-start gap-3 text-white/90 font-serif text-sm md:text-lg tracking-[0.3em] border-r border-accent/30 pr-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.6)' }}>
                        {/* 右列：沖縄県那覇市 */}
                        <motion.div
                            className="writing-vertical-rl text-right"
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <span className="inline-block py-2 text-xs md:text-sm tracking-[0.35em] text-white/70">
                                沖縄県那覇市
                            </span>
                        </motion.div>

                        {/* 左列：大人の上質な隠れ家（キラキラ） */}
                        <motion.div
                            className="writing-vertical-rl text-right text-base md:text-2xl"
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
                        >
                            <SparkleText className="inline-block py-2">
                                大人の上質な隠れ家
                            </SparkleText>
                        </motion.div>
                    </div>

                    {/* Main Title Area */}
                    <div className="flex flex-col items-end text-right">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-accent text-xs md:text-sm tracking-[0.4em] mb-4 font-cinzel"
                            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.6)' }}
                        >
                            MEMBERS ONLY WHISKEY BAR
                        </motion.p>

                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                        >
                            <img
                                src="/bar-shinobu/shinobu_logo.svg"
                                alt="BAR SHINOBU Logo"
                                className="w-56 h-56 md:w-80 md:h-80 object-contain invert brightness-0"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Operating Hours */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-8 md:left-12 flex items-center gap-4"
            >
                <div className="h-[1px] w-12 md:w-24 bg-white/30" />
                <span className="text-[10px] tracking-[0.3em] text-white/50 font-cinzel" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.6)' }}>OPEN 20:00 - 2:00</span>
            </motion.div>
        </section>
    );
}
