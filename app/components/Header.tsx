"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const reservationHref = "#contact";

    const navLinks = [
        { name: "コンセプト", href: "#concept" },
        { name: "サービス", href: "#service" },
        { name: "メニュー", href: "#menu" },
        { name: "アクセス", href: "#access" },
        { name: "お問い合わせ", href: reservationHref },
    ];

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass" : "py-6 bg-transparent"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="container flex items-center justify-between">
                <Link href="/" className="z-50">
                    <img
                        src="/bar-shinobu/shinobu_logo.svg"
                        alt="BAR SHINOBU Logo"
                        className="w-8 h-8 md:w-10 md:h-10 object-contain invert brightness-0"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-cinzel text-sm tracking-wider hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={reservationHref}
                        className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 text-sm tracking-wider"
                    >
                        ご予約
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </motion.header>

        {/* Mobile Nav Overlay */}
        <div
            className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 px-8 py-24 overflow-y-auto transition-all duration-500 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            onClick={() => setIsMenuOpen(false)}
        >
            {/* Close Button */}

            <div className="flex flex-col items-center gap-8" onClick={(e) => e.stopPropagation()}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="font-cinzel text-2xl tracking-wider hover:text-accent transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href={reservationHref}
                    className="mt-4 px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 text-lg tracking-wider"
                    onClick={() => setIsMenuOpen(false)}
                >
                    ご予約
                </Link>
            </div>
        </div>
    </>
    );
}
