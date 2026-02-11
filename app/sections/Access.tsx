"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Access() {
    return (
        <section id="access" className="py-24 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/bar-shinobu/images/building.webp"
                    alt="Building Exterior"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>
            
            <div className="container relative z-10">
                <div className="text-center mb-20">
                    <span className="text-accent text-sm tracking-[0.2em] font-cinzel block mb-2">ACCESS</span>
                    <h2 className="text-3xl font-serif">店舗情報</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <MapPin className="text-accent shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="text-white font-serif mb-2">ADDRESS</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    〒900-0032<br />
                                    沖縄県那覇市松山2-10-1<br />
                                    39 Plaza 松山 5階<br />
                                    BAR 忍【会員制バー】
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="text-accent shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="text-white font-serif mb-2">OPEN HOURS</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    20:00 - 2:00<br />
                                    定休日：日曜日・祝日
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="text-accent shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="text-white font-serif mb-2">TEL</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    090-8993-2809
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[400px] w-full bg-gray-900 rounded-sm overflow-hidden border border-white/10"
                    >
                        {/* Google Maps Embed Placeholder */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.123456789!2d127.6794!3d26.2094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e569db9f233b65%3A0x4fac780fd6dc8928!2z44CSOTAwLTAwMzIg6YeO5bGx55yM5aSq5bGx5biC5p2-5bGx5Lqk5Lqk6YeO5bGx44CBMzkgUGxhemEg5p2-5bGxIOODk-ODpeODk-ODrOODhuODreODs-ODhOODhO-8iOODkOODkOODhuODreODvO-8iQ!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="店舗地図"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
