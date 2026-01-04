
import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0F1715] text-white">
            {/* Background with texture/gradient - Deep Emerald Aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#050A09] via-[#0F1715] to-[#16211F] z-0" />
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/zen-circle-texture.png')] z-0 mix-blend-overlay" />

            {/* Emerald/Gold accents (Glows) */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#047857] opacity-20 blur-[120px] rounded-full z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37] opacity-10 blur-[120px] rounded-full z-0" />

            <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
                {/* Pre-Header */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm font-semibold mb-6"
                >
                    Marketing for Spas & Wellness Centers
                </motion.span>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8 drop-shadow-lg"
                >
                    Turn Your Wellness Center Into a <span className="italic text-[#10B981]">Sold-Out Sanctuary.</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed"
                >
                    We help Malaysian Spas and Holistic Centers fill empty appointment slots and sell high-value packages on autopilot. Stop relying on walk-ins and start predicting your revenue.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center gap-6"
                >
                    <button className="px-10 py-4 bg-[#10B981] text-white font-semibold text-lg hover:bg-[#059669] transition-all transform hover:scale-105 duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                        Fill Your Calendar →
                    </button>
                </motion.div>

                {/* Secondary Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-8 text-sm text-gray-400 italic"
                >
                    Ideal for Premium Spas, TCM, and Holistic Therapy.
                </motion.p>
            </div>
        </section>
    );
};
