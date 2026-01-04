import React from 'react';
import { motion } from 'framer-motion';

export const FinalCTA = () => {
    return (
        <section className="py-24 bg-teal-600 text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                        Help More Patients Live Pain-Free.
                    </h2>
                    <p className="text-xl text-teal-50 mb-10 max-w-2xl mx-auto">
                        Your clinical skills change lives. Let us make sure people find you.
                    </p>

                    <a
                        href="#audit"
                        className="inline-block bg-white text-teal-700 font-bold text-lg px-10 py-5 rounded-lg shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Audit My Clinic’s Online Presence
                    </a>

                    <p className="mt-6 text-sm text-teal-200 opacity-80">
                        See how you rank for "Physio Near Me" vs. your competitors.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
