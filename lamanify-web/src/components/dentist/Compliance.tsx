import React from 'react';
import { ShieldCheck, Lock, FileCheck } from 'lucide-react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

export const Compliance = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100">

                    <div className="lg:w-1/2">
                        <LazyMotion features={domAnimation}>
                            <m.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                                    <ShieldCheck className="w-4 h-4" />
                                    Safety First
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">We Know MDC & KKLIU Regulations.</h2>
                                <div className="prose prose-lg text-slate-600">
                                    <p>
                                        Dental advertising in Malaysia is heavily regulated. One wrong word (like "Expert", "Best", or "Specialist" without credentials) can lead to hefty fines or issues with your APC.
                                    </p>
                                    <p>
                                        We scrutinize every ad copy, landing page, and creative asset against Ministry of Health guidelines. We grow your practice safely, protecting your license and professional reputation while still delivering results.
                                    </p>
                                </div>
                            </m.div>
                        </LazyMotion>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <LazyMotion features={domAnimation}>
                            <m.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                                    <Lock className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                                    <h4 className="font-semibold text-slate-900">MDC Compliant</h4>
                                    <p className="text-xs text-slate-500 mt-1">Adhering to advertising guidelines (2016)</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                                    <FileCheck className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                                    <h4 className="font-semibold text-slate-900">KKLIU Approval</h4>
                                    <p className="text-xs text-slate-500 mt-1">Guidance on approval processes</p>
                                </div>
                            </m.div>
                        </LazyMotion>
                    </div>

                </div>
            </div>
        </section>
    );
};
