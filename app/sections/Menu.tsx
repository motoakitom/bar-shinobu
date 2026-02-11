"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const menuItems = [
    {
        en: "Shochu",
        jp: "焼酎",
        desc: "黒霧島、富乃宝山、三岳、だいやめ、吉四六、中々、神の河、鏡月、鍛高譚、れんと、琉球王朝、菊の露VIP、北谷長老",
    },
    {
        en: "Whiskey",
        jp: "ウイスキー",
        desc: "沖縄ウィスキーR、角、ジャックダニエル、グレンリベット、バランタイン、ワイルドターキー、IWハーパー、ラフロイグ、ボウモア、シーバスミズナラ、メイカーズマーク",
    },
    {
        en: "Cocktail",
        jp: "カクテル",
        desc: "ジン、ウォッカ、ラム、カンパリ、カシス、マリブ、ディタ、ピーチ",
    },
    {
        en: "Others",
        jp: "その他",
        desc: "オリオンビール（瓶）、緑茶、ウーロン茶、さんぴん茶、コーラ、ジンジャーエール、オレンジ、グレープフルーツ、パインジュース、トマトジュース",
    },
];

export default function Menu() {
    return (
        <section id="menu" className="py-32 bg-[#080808] relative">
            <div
                className="absolute inset-0 opacity-10 bg-cover bg-center"
                style={{ backgroundImage: 'url(/bar-shinobu/images/bottles.webp)' }}
            />
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24">
                    {/* Left: Title Area */}
                    <div className="md:w-1/3 md:sticky md:top-32 h-fit">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-accent text-sm tracking-[0.2em] font-cinzel block mb-4">MENU</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
                                {"至高の一杯を".split("").map((char, index) => (
                                    <motion.span
                                        key={char}
                                        initial={{ opacity: 0, scale: 0, rotate: -10 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </h2>
                            <div className="text-gray-400 space-y-8 mb-12">
                                <div>
                                    <h3 className="text-white text-lg font-serif mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-accent rotate-45" />
                                        一般
                                    </h3>
                                    <p className="leading-loose pl-4">
                                        テーブルチャージ 2,000円<br />
                                        1杯 1,000円
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-serif mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-accent rotate-45" />
                                        会員メンバー特別プラン
                                    </h3>
                                    <p className="leading-loose pl-4">
                                        飲み放題 1時間 3,000円<br />
                                        <span className="text-sm text-accent">※飲み放題はメンバーのみとなります</span>
                                    </p>
                                </div>
                                <p className="text-sm border-t border-white/10 pt-4">
                                    ※表示価格に別途 税サ20％ 頂戴いたします
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Menu List */}
                    <div className="md:w-2/3 space-y-16">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.jp}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group border-b border-white/10 pb-8 hover:border-accent/50 transition-colors duration-500"
                            >
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-2xl font-cinzel text-white group-hover:text-accent transition-colors duration-300">
                                        {item.jp}
                                    </h4>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">{item.en}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Full Menu Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mt-16"
                >
                    <a
                        href="/bar-shinobu/menu.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-white border-b border-accent/50 pb-1 hover:text-accent transition-colors"
                    >
                        <span className="font-cinzel tracking-wider">VIEW FULL MENU（PDF）</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
