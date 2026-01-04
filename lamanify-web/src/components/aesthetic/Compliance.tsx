
import React from 'react';
import { motion } from 'framer-motion';

export const Compliance = () => {
    return (
        <section className="py-24 bg-[#121212] border-t border-b border-[#222]">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#D4AF37] flex items-center justify-center text-2xl">
                            🛡️
                        </div>
                        <span className="text-[#D4AF37] tracking-wider uppercase text-sm font-semibold">The LCP Shield</span>
                    </div>

                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
                        Aggressive Growth. <br />
                        <span className="text-[#C5A0A5]">100% Compliant.</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        We understand the <span className="text-white">Letter of Credentialing and Privileging (LCP)</span> guidelines and the <span className="text-white">Medicines (Advertisement and Sale) Act</span>.
                        Most agencies get clinics in trouble. We keep you safe.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        <span className="text-white font-medium">Safety First:</span> We ensure your ads never risk your medical license.
                    </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1A1A1A] p-8 md:p-10 rounded-sm border border-[#333] relative"
                >
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent"></div>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <span className="text-red-500 text-xl font-bold">✕</span>
                            <p className="text-gray-400">We <strong className="text-white">DO NOT</strong> use misleading "Guaranteed Results" language.</p>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-red-500 text-xl font-bold">✕</span>
                            <p className="text-gray-400">We <strong className="text-white">DO NOT</strong> use unauthorized "Before & After" in paid ads.</p>
                        </div>
                        <div className="h-[1px] bg-[#333] my-4"></div>
                        <div className="flex gap-4">
                            <span className="text-green-500 text-xl font-bold">✓</span>
                            <p className="text-gray-400">We <strong className="text-white">DO</strong> focus on FDA/MDA-approved technology and medical safety.</p>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-green-500 text-xl font-bold">✓</span>
                            <p className="text-gray-400">We use compliant workarounds for visual proof.</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
