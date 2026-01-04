
import React from 'react';
import { motion } from 'framer-motion';

export const CaseStudy = () => {

    return (
        <section className="py-24 bg-[#121212]">
            <div className="container mx-auto px-6">

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative background element */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37] to-[#C5A0A5] opacity-20 blur-[100px] rounded-full"></div>

                        <div className="relative z-10 border-l-4 border-[#D4AF37] pl-8 py-4">
                            <h2 className="text-white font-serif text-4xl md:text-5xl mb-6">
                                Selling "Value" Instead of "Price."
                            </h2>
                            <p className="text-gray-400 text-lg">
                                See how we helped a KL based clinic stop the discount war and start attracting premium patients.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1E1E1E] p-8 md:p-12 rounded-sm border border-[#333] shadow-2xl relative overflow-hidden"
                    >
                        {/* Quote mark decoration */}
                        <div className="absolute top-4 right-8 text-8xl text-[#2a2a2a] font-serif leading-none opacity-50 select-none">”</div>

                        <div className="space-y-6 relative z-10">
                            <div>
                                <h4 className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider mb-1">Client</h4>
                                <p className="text-white text-xl font-serif">Dr. [Name] Aesthetics (Kuala Lumpur)</p>
                            </div>

                            <div className="h-[1px] bg-[#333]"></div>

                            <div>
                                <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Challenge</h4>
                                <p className="text-gray-300">Burning RM5k/month on ads. 90% of leads were "cheap" bargain hunters.</p>
                            </div>

                            <div>
                                <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Solution</h4>
                                <p className="text-gray-300">Rebuilt funnel to focus on "Doctor's Expertise". Increased ad price point. Added "Consultation Deposit".</p>
                            </div>

                            <div className="bg-[#252525] p-6 rounded mt-4 border border-[#333]">
                                <h4 className="text-white font-serif text-lg mb-4">The Result</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex justify-between">
                                        <span>Lead Volume</span>
                                        <span className="text-red-400 font-semibold">Dropped 40% (Intentional)</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Show-Up Rate</span>
                                        <span className="text-[#D4AF37] font-semibold">Increased to 85%</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Revenue (Month 1)</span>
                                        <span className="text-[#D4AF37] font-semibold">+ RM 45,000</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
