
import React from 'react';
import { motion } from 'framer-motion';

export const Compliance = () => {
    return (
        <section className="relative w-full py-20 bg-[#050A09] text-white border-y border-[#2A3835]">
            <div className="container relative z-10 px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                <div className="md:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl font-medium mb-6"
                    >
                        Credibility & <span className="text-[#D4AF37] italic">Class.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 mb-8"
                    >
                        We position your brand as a legitimate, therapeutic destination, distinguishing you from "shady" parlors.
                    </motion.p>
                </div>

                <div className="md:w-1/2 grid gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-[#0F1715] border-l-2 border-[#10B981]"
                    >
                        <div className="mt-1 text-2xl">📜</div>
                        <div>
                            <h4 className="font-bold text-white mb-1">Regulation Ready</h4>
                            <p className="text-sm text-gray-400">For TCM and Complementary Medicine, we adhere to the <span className="text-[#10B981]">T&CM Act 775</span>. We respect the boundaries of what you can claim.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-[#0F1715] border-l-2 border-[#D4AF37]"
                    >
                        <div className="mt-1 text-2xl">🌙</div>
                        <div>
                            <h4 className="font-bold text-white mb-1">Muslimah Friendly / Syariah Compliant</h4>
                            <p className="text-sm text-gray-400">If this is your niche, we craft messaging that emphasizes privacy, Aurat-friendly SOPs, and female-only therapists.</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
