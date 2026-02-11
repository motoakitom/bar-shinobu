"use client";

import { motion } from "framer-motion";
import { Wine, Users, Crown } from "lucide-react";

const services = [
    {
        icon: <Wine size={32} />,
        title: "Luxury Space",
        jpTitle: "上質な空間",
        desc: "洗練されたインテリアと照明が織りなす、大人のためのプライベート空間。",
        bgImage: "/bar-shinobu/images/room.webp",
    },
    {
        icon: <Users size={32} />,
        title: "Hospitality",
        jpTitle: "丁寧な接客",
        desc: "女性スタッフによるきめ細やかなおもてなしで、至福のひとときを。",
        bgImage: "/bar-shinobu/images/staff.webp",
    },
    {
        icon: <Crown size={32} />,
        title: "VIP Plans",
        jpTitle: "VIP待遇",
        desc: "会員様限定の特別なプランや、希少なウイスキーをご用意しております。",
        bgImage: "/bar-shinobu/images/services.webp",
    },
];

export default function Service() {
    return (
        <section id="service" className="py-24 bg-[#0a0a0a]">
            <div className="container">
                <div className="text-center mb-20">
                    <span className="text-accent text-sm tracking-[0.2em] font-cinzel block mb-2">OUR SERVICE</span>
                    <h2 className="text-3xl font-serif">BAR 忍の魅力</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`p-8 border border-white/5 transition-colors duration-500 group relative overflow-hidden ${
                                service.bgImage ? 'bg-cover bg-center' : 'bg-white/[0.02] hover:bg-white/[0.05]'
                            }`}
                            style={service.bgImage ? { backgroundImage: `url(${service.bgImage})` } : {}}
                        >
                            {service.bgImage && (
                                <div className="absolute inset-0 bg-black/60" />
                            )}
                            <div className={`relative z-10 ${service.bgImage ? 'text-white' : ''}`}>
                                <h4 className={`font-cinzel text-xl mb-1 ${service.bgImage ? 'text-white' : 'text-white'}`}>{service.title}</h4>
                                <p className={`text-xs mb-4 tracking-wider ${service.bgImage ? 'text-white/80' : 'text-accent'}`}>{service.jpTitle}</p>
                                <p className={`text-sm leading-relaxed ${service.bgImage ? 'text-white/70' : 'text-gray-400'}`}>
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
