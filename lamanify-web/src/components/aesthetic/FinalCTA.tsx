
import React from 'react';
import { motion } from 'framer-motion';

export const FinalCTA = () => {
    return (
        <section className="py-32 relative bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#D4AF37]/10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
                        Build a Waiting List of <br />
                        <span className="text-[#D4AF37] italic">Premium</span> Patients.
                    </h2>

                    <p className="text-xl text-gray-400 mb-12 font-light">
                        Your expertise deserves a marketing strategy that matches it. <br className="hidden md:block" /> Let’s build your authority.
                    </p>

                    <button className="px-12 py-5 bg-[#D4AF37] text-black font-semibold text-xl hover:bg-[#B5952F] transition-all transform hover:scale-105 duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                        Apply for a Strategy Session
                    </button>

                    <p className="mt-6 text-sm text-gray-500">
                        Limited slots available for LCP Certified Clinics.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
