"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10 relative">
            <div
                className="absolute inset-0 bg-center"
                style={{ backgroundImage: 'url(/images/wall.webp)', backgroundSize: '150%', opacity: 0.15 }}
            />
            <div className="container flex flex-col items-center justify-center gap-6 relative z-10">
                <Image
                    src="/shinobu_logo.svg"
                    alt="BAR SHINOBU Logo"
                    width={120}
                    height={120}
                    className="w-16 h-16 object-contain invert brightness-0"
                    loading="lazy"
                />
                <div className="flex gap-6 text-sm text-gray-400">
                    <a href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</a>
                    <a href="/terms" className="hover:text-white transition-colors">利用規約</a>
                </div>
                <p className="text-xs text-gray-600 font-cinzel tracking-wider">
                    &copy; {new Date().getFullYear()} BAR 忍. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
