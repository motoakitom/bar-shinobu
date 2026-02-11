"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  const handleRedirect = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfEMJMA1tAFw3tR0Iejiv_rK2GsGc60j1VppEhH1Y-5AXaNYA/viewform",
      "_blank"
    );
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">
          会員登録・ご予約申込
        </h3>
        <p className="text-gray-400 mb-8 leading-loose">
          下記ボタンよりお申し込みください。外部フォームが開きます。
        </p>

        <motion.button
          onClick={handleRedirect}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-8 py-4 bg-accent hover:bg-accent-light text-black font-serif font-medium tracking-wider transition-colors duration-300 rounded-lg"
        >
          お申し込みフォームへ
        </motion.button>
      </motion.div>
    </div>
  );
}
