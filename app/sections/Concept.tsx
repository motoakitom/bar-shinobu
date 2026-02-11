"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Concept() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section id="concept" ref={containerRef} className="relative py-32 md:py-48 overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y }} className="relative w-full h-[120%] -top-[10%]">
                    <img
                        src="/bar-shinobu/images/billboard.webp"
                        alt="Bar Concept"
                        className="absolute inset-0 w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                </motion.div>
            </div>

            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
                    {/* Vertical Text Block 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="writing-vertical-rl text-2xl md:text-3xl font-serif tracking-[0.2em] leading-loose text-white"
                    >
                        <p>上質な繋がりが</p>
                        <p className="mt-8">生まれる場所</p>
                    </motion.div>

                    {/* Vertical Text Block 2 (Description) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="writing-vertical-rl text-sm md:text-base text-gray-300 tracking-widest leading-loose h-[300px] md:h-[400px]"
                    >
                        <p>都会の喧騒を離れ、</p>
                        <p className="pt-[1.75rem]">選ばれた大人たちが集う隠れ家。</p>
                        <p className="pt-[3.5rem]">最高級のウイスキーと、</p>
                        <p className="pt-[5.25rem]">心安らぐ空間。</p>
                    </motion.div>
                </div>

                {/* Decorative Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-accent/20 rounded-full pointer-events-none"
                />
            </div>
        </section>
    );
}
