
import React from 'react';
import { motion } from 'framer-motion';

export const FinalCTA = () => {
    return (
        <section className="py-24 bg-[#050A09] text-white overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#10B981] opacity-5 blur-[120px] rounded-full z-0" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37] opacity-5 blur-[120px] rounded-full z-0" />

            <div className="container relative z-10 px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="font-serif text-4xl md:text-6xl font-medium mb-6 leading-tight">
                        Create a <span className="italic text-[#D4AF37]">Waiting List</span> for Your Sanctuary.
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Your clients are stressed and looking for you. Let’s make sure they find your door.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <button className="px-12 py-5 bg-[#10B981] text-white font-semibold text-xl rounded-full hover:bg-[#059669] transition-all transform hover:scale-105 duration-300 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                            Start Your Growth Journey
                        </button>
                        <p className="text-sm text-gray-500 italic mt-4">
                            Let’s analyze your current occupancy rates.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
