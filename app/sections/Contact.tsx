"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import TermsContent from "@/app/components/TermsContent";

export default function Contact() {
    const [showModal, setShowModal] = useState(false);
    const [hasAgreed, setHasAgreed] = useState(false);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [showModal]);

    const handleRedirect = () => {
        setShowModal(true);
    };

    const handleConfirmRedirect = () => {
        if (hasAgreed) {
            window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfEMJMA1tAFw3tR0Iejiv_rK2GsGc60j1VppEhH1Y-5AXaNYA/viewform",
                "_blank"
            );
            setShowModal(false);
            setHasAgreed(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setHasAgreed(false);
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/bar-shinobu/images/lump.webp"
                    alt="Contact Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-black/80" />
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-accent text-sm tracking-[0.2em] font-cinzel block mb-4">RESERVATION</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-8 text-white">
                        会員登録・ご予約
                    </h3>
                    <p className="text-gray-400 mb-12 leading-loose font-serif">
                        会員制ウイスキーバーとして営業。<br />
                        飲み放題システム<br />
                        ウイスキー・カクテル・ビール等<br />
                        ※お一人様に対してグラス1つの提供になります<br />
                        お一人様/30分 ※自動延長制<br />
                        ￥1,500<br />
                        表示価格に別途 サービス料10％、消費税10％ 頂戴いたします
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <button
                            onClick={handleRedirect}
                            className="group relative px-8 py-4 bg-transparent border border-white/20 hover:border-accent w-full md:w-auto min-w-[240px] transition-colors duration-300"
                            aria-label="会員申込フォームを開く"
                        >
                            <span className="flex items-center justify-center gap-2 text-white group-hover:text-accent transition-colors font-serif tracking-wider">
                                会員申込フォーム
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M14.727 6h6l-6-6zm0 .727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727zM7.91 17.318a.819.819 0 1 1 .001-1.638a.819.819 0 0 1 0 1.638zm0-3.273a.819.819 0 1 1 .001-1.637a.819.819 0 0 1 0 1.637zm0-3.272a.819.819 0 1 1 .001-1.638a.819.819 0 0 1 0 1.638zm9 6.409h-6.818v-1.364h6.818zm0-3.273h-6.818v-1.364h6.818zm0-3.273h-6.818V9.273h6.818z"/>
                                </svg>
                            </span>
                        </button>

                        <a
                            href="https://lin.ee/6pbTONZ"
                            className="group relative px-8 py-4 bg-accent hover:bg-accent-light w-full md:w-auto min-w-[240px] transition-colors duration-300"
                        >
                            <span className="flex items-center justify-center gap-2 text-black font-serif tracking-wider font-medium">
                                公式LINEから予約
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19.365 9.863a.631.631 0 0 1 0 1.261H17.61v1.125h1.755a.63.63 0 1 1 0 1.259h-2.386a.63.63 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63h2.386a.63.63 0 0 1-.003 1.26H17.61v1.125zm-3.855 3.016a.63.63 0 0 1-.631.627a.62.62 0 0 1-.51-.25l-2.443-3.317v2.94a.63.63 0 0 1-1.257 0V8.108a.627.627 0 0 1 .624-.628c.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63c.345 0 .63.285.63.63zm-5.741 0a.63.63 0 0 1-.631.629a.63.63 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63c.346 0 .628.285.628.63zm-2.466.629H4.917a.634.634 0 0 1-.63-.629V8.108c0-.345.285-.63.63-.63c.348 0 .63.285.63.63v4.141h1.756a.63.63 0 0 1 0 1.259M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608c.391.082.923.258 1.058.59c.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645c1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Terms Modal */}
            {showModal && (
                <div 
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 touch-none"
                    onClick={handleCloseModal}
                >
                    <div 
                        className="bg-[#0a0a0a] border border-white/10 rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
                            <h3 className="text-xl font-serif text-white">利用規約</h3>
                            <button
                                onClick={handleCloseModal}
                                className="text-white/60 hover:text-white transition-colors p-2"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div 
                            className="p-6 overflow-y-auto flex-1 min-h-0 touch-pan-y"
                            onWheel={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                        >
                            <TermsContent />

                            {/* Agreement Checkbox */}
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={hasAgreed}
                                        onChange={(e) => setHasAgreed(e.target.checked)}
                                        className="mt-1 w-4 h-4 text-accent bg-white/10 border-white/20 rounded focus:ring-accent focus:ring-2"
                                    />
                                    <span className="text-sm text-gray-300">
                                        上記利用規約に同意の上、会員申込フォームに進みます
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="flex gap-4 justify-end p-6 border-t border-white/10">
                            <button
                                onClick={handleCloseModal}
                                className="px-6 py-2 text-white/60 hover:text-white transition-colors font-serif"
                            >
                                キャンセル
                            </button>
                            <button
                                onClick={handleConfirmRedirect}
                                disabled={!hasAgreed}
                                className={`px-6 py-2 rounded transition-colors font-serif ${
                                    hasAgreed
                                        ? "bg-accent hover:bg-accent-light text-black"
                                        : "bg-white/10 text-white/40 cursor-not-allowed"
                                }`}
                            >
                                同意して申込フォームへ
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
