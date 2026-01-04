import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-600 text-xs font-bold tracking-widest mb-6 border border-teal-100 uppercase">
                            Marketing for Physiotherapy & Rehab
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                            Stop Selling "Sessions." <br />
                            <span className="text-teal-600">Start Selling Recovery.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            We help Malaysian Physio Centers attract committed patients who value <strong className="text-slate-900">Clinical Rehab</strong> over cheap massages. Fill your calendar with patients ready to invest in their long-term mobility.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a href="#audit" className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg shadow-lg hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-0.5 text-center">
                                Get New Patients Now →
                            </a>
                            <p className="text-sm text-slate-500 italic">
                                Ideal for Sports Rehab, MSK, and Neuro Centers.
                            </p>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] bg-slate-100 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent mix-blend-overlay z-10 pointer-events-none" />
                            {/* Placeholder for "Shot of physio guiding patient through exercise" */}
                            <img
                                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Physiotherapist guiding patient through exercise"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-sm">Treatment Completed</p>
                                        <p className="text-xs text-slate-500">10-Session Plan</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl opacity-50" />
                        <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
