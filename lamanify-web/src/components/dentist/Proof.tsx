import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { TrendingUp, Users, ArrowUpRight } from 'lucide-react';

export const Proof = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Results You Can Measure in Revenue.</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We don't report on "clicks" or "impressions". We report on booked consultations and production generated.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Case Study 1: Ortho */}
                    <LazyMotion features={domAnimation}>
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-purple-50 rounded-3xl p-8 border border-purple-100 relative overflow-hidden group hover:shadow-lg transition-all"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <TrendingUp className="w-40 h-40 text-purple-600" />
                            </div>

                            <div className="relative z-10">
                                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
                                    The Ortho Campaign
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Clear Aligner Growth</h3>

                                <div className="space-y-4 mb-8">
                                    <div>
                                        <div className="text-xs text-slate-500 font-semibold uppercase">Goal</div>
                                        <div className="text-slate-700">Increase stars for suburban clinic</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-semibold uppercase">Strategy</div>
                                        <div className="text-slate-700">"Invisible Braces" keywords + Smile Assessment funnel</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
                                    <div className="flex items-center gap-4 mb-4 border-b border-slate-50 pb-4 last:mb-0 last:border-0 last:pb-0">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-slate-900">18</div>
                                            <div className="text-xs text-slate-500 font-medium">Consultations Booked (Mo. 1)</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-slate-900">RM 120k+</div>
                                            <div className="text-xs text-slate-500 font-medium">Potential Production Generated</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    </LazyMotion>

                    {/* Case Study 2: Implant */}
                    <LazyMotion features={domAnimation}>
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-blue-50 rounded-3xl p-8 border border-blue-100 relative overflow-hidden group hover:shadow-lg transition-all"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <TrendingUp className="w-40 h-40 text-blue-600" />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
                                    The Implant Funnel
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">All-on-4 Patient Acquisition</h3>

                                <div className="space-y-4 mb-8">
                                    <div>
                                        <div className="text-xs text-slate-500 font-semibold uppercase">Goal</div>
                                        <div className="text-slate-700">Attract restorative cases for center</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-semibold uppercase">Strategy</div>
                                        <div className="text-slate-700">Educational Video Ads + Trust-Based Landing Page</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                                    <div className="flex items-center gap-4 mb-4 border-b border-slate-50 pb-4 last:mb-0 last:border-0 last:pb-0">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-slate-900">RM 45</div>
                                            <div className="text-xs text-slate-500 font-medium">Cost Per Lead (Reduced from RM150)</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-slate-900">3 Cases</div>
                                            <div className="text-xs text-slate-500 font-medium">Full Arch Cases Closed in Q1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    </LazyMotion>

                </div>
            </div>
        </section>
    );
};
