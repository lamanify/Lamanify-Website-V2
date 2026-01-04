import React from 'react';
import { Quote } from 'lucide-react';

export function CaseStudy() {
    return (
        <section className="py-24 bg-brand relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-12 border border-white/20">
                    <div className="w-full lg:w-1/2">
                        <div className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-bold mb-6">Case Study: ENT Specialist</div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                            From 5 to 25 Elective Surgeries Per Month.
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-3xl font-black text-brand">5x</div>
                                <div className="text-sm font-medium text-slate-600">Increase in high-intent surgical inquiries through patient education funnels.</div>
                            </div>
                            <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-3xl font-black text-brand">85%</div>
                                <div className="text-sm font-medium text-slate-600">Reduction in reliance on hospital walk-in traffic within 4 months.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        <div className="bg-slate-900 rounded-3xl p-8 relative">
                            <Quote className="absolute top-4 right-4 h-12 w-12 text-white/10" />
                            <p className="text-xl text-white font-medium italic mb-8 leading-relaxed">
                                "The patient education funnel shifted the dynamic. Patients no longer come in asking for prices—they come in asking for ME because they've seen the value of my specialized approach."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-800 p-1">
                                    <div className="w-full h-full rounded-full bg-slate-700"></div>
                                </div>
                                <div>
                                    <p className="text-white font-bold">ENT Consultant Surgeon</p>
                                    <p className="text-slate-400 text-sm">Gleaneagles Hospital, KL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
