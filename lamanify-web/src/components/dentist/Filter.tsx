import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { AlertCircle, Target, XCircle, CheckCircle2 } from 'lucide-react';

export const Filter = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <LazyMotion features={domAnimation}>
                        <m.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                        >
                            "Why are my chairs empty while the clinic down the street is full?"
                        </m.h2>
                        <m.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600"
                        >
                            Most dental marketing fails because it targets the wrong people. Boosting Facebook posts often just attracts "price shoppers" who hunt for the cheapest scaling.
                        </m.p>
                    </LazyMotion>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* The Problem */}
                    <LazyMotion features={domAnimation}>
                        <m.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-red-50 p-8 rounded-2xl border border-red-100"
                        >
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <XCircle className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">The Problem</h3>
                            <p className="text-slate-600 leading-relaxed">
                                You are boosting Facebook posts hoping for likes, engaging people who aren't ready to buy or only want "cheap" deals.
                            </p>
                        </m.div>
                    </LazyMotion>

                    {/* The Reality */}
                    <LazyMotion features={domAnimation}>
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100"
                        >
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                                <AlertCircle className="w-6 h-6 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">The Reality</h3>
                            <p className="text-slate-600 leading-relaxed">
                                High-value patients (Implants, Braces) don't browse Facebook for dentists. They search Google with <strong>intent</strong> to find a solution.
                            </p>
                        </m.div>
                    </LazyMotion>

                    {/* The Solution */}
                    <LazyMotion features={domAnimation}>
                        <m.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-blue-50 p-8 rounded-2xl border border-blue-100"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">The Solution</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Lamanify stops the "spray and pray" approach. We target patients actively looking for solutions, not just deals.
                            </p>
                        </m.div>
                    </LazyMotion>
                </div>
            </div>
        </section>
    );
};
