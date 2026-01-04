
import React from 'react';
import { motion } from 'framer-motion';

export const Solution = () => {
    return (
        <section className="relative w-full py-24 bg-[#0F1715] text-white">
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/20 to-transparent" />

            <div className="container relative z-10 px-6 mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm font-semibold"
                    >
                        The "Vibe-First" Funnel
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 font-serif text-4xl md:text-5xl font-medium"
                    >
                        A Marketing System That Sells <span className="italic text-[#10B981]">"The Escape."</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Phase 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#1A2624] p-8 rounded-xl border border-[#2A3835] relative overflow-hidden group hover:border-[#D4AF37]/50 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-serif font-bold text-[#D4AF37]">01</div>
                        <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Visual Storytelling <br /><span className="text-sm font-normal text-gray-400">(Social Media)</span></h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            Wellness is visual. We don't use stock photos. We showcase the <span className="italic text-white">texture</span> of your oils, the <span className="italic text-white">ambiance</span> of your rooms, and the <span className="italic text-white">skill</span> of your therapists.
                        </p>
                        <div className="mt-4 text-xs font-medium text-[#10B981] bg-[#10B981]/10 inline-block px-3 py-1 rounded-full">
                            Stop the Scroll
                        </div>
                    </motion.div>

                    {/* Phase 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#1A2624] p-8 rounded-xl border border-[#2A3835] relative overflow-hidden group hover:border-[#10B981]/50 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-serif font-bold text-[#10B981]">02</div>
                        <h3 className="text-xl font-bold mb-4 text-[#10B981]">The "Weekday Filler" <br /><span className="text-sm font-normal text-gray-400">Strategy</span></h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            We use "Dynamic Offer" campaigns targeting locals (office workers, housewives) specifically for off-peak slots.
                        </p>
                        <div className="mt-4 text-xs font-medium text-[#D4AF37] bg-[#D4AF37]/10 inline-block px-3 py-1 rounded-full">
                            Fill Quiet Tuesdays
                        </div>
                    </motion.div>

                    {/* Phase 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#1A2624] p-8 rounded-xl border border-[#2A3835] relative overflow-hidden group hover:border-[#D4AF37]/50 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-serif font-bold text-[#D4AF37]">03</div>
                        <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">The Membership Engine <br /><span className="text-sm font-normal text-gray-400">(LTV)</span></h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            One-off massages don't build a business. We implement automation to convert first-time guests into <span className="text-white font-medium">Monthly Members</span>.
                        </p>
                        <div className="mt-4 text-xs font-medium text-[#10B981] bg-[#10B981]/10 inline-block px-3 py-1 rounded-full">
                            Secure Cash Flow
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
