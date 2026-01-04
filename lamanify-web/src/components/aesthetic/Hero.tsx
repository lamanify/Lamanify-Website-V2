
import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A] text-white">
            {/* Background with texture/gradient - Simulating premium cinematic feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1E1E1E] to-[#252525] z-0" />
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 mix-blend-overlay" />

            {/* Gold/Rose accents (Glows) */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37] opacity-10 blur-[120px] rounded-full z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C5A0A5] opacity-10 blur-[120px] rounded-full z-0" />

            <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
                {/* Pre-Header */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm font-semibold mb-6"
                >
                    Growth Strategy for Aesthetic Practices
                </motion.span>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8 drop-shadow-lg"
                >
                    Attract <span className="italic text-[#D4AF37]">High-Value</span> <br className="hidden md:block" /> Patients, Not Just <br className="hidden md:block" /> "Price Shoppers."
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed"
                >
                    We build premium, KKLIU-compliant digital ecosystems for Malaysia’s top Aesthetic Doctors. Stop competing on price and start dominating on <span className="text-white font-medium">Authority</span> and <span className="text-white font-medium">Trust</span>.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center gap-6"
                >
                    <button className="px-10 py-4 bg-[#D4AF37] text-black font-semibold text-lg hover:bg-[#B5952F] transition-all transform hover:scale-105 duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                        Scale Your Practice →
                    </button>
                </motion.div>

                {/* Secondary Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-8 text-sm text-gray-400 italic"
                >
                    Exclusively for LCP Holders & Dermatologists.
                </motion.p>
            </div>
        </section>
    );
};
