import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-40 -left-64 w-96 h-96 bg-brand/20 rounded-full blur-3xl opacity-30" />
                <div className="absolute top-20 -right-64 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
                            <ShieldCheck className="w-4 h-4 text-brand" />
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Performance Marketing for Medical Specialists</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]">
                            Build Your Prestige. <br />
                            <span className="text-brand">Own Your Patient Flow.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                            We help Malaysian Specialists & Consultants attract high-value elective cases through prestige-focused patient education funnels. Stop relying on hospital walk-ins and become the authoritative voice in your field.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                            <Button variant="primary" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-brand/20 hover:shadow-brand/40 transition-all bg-brand hover:bg-brand/90 border-none text-white">
                                Get Your Specialist Growth Plan <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <p className="text-sm text-slate-400 italic">
                                MMC Compliant & Prestige Focused
                            </p>
                        </div>
                    </div>

                    {/* Visual Content - Prestige Showcase */}
                    <div className="flex-1 w-full max-w-xl lg:max-w-none">
                        <div className="relative bg-white/5 rounded-3xl shadow-2xl border border-white/10 p-2 md:p-4 transition-all duration-500">
                            <div className="relative rounded-2xl overflow-hidden bg-slate-800 aspect-video group">
                                <div className="absolute inset-0 flex">
                                    <div className="w-1/2 bg-slate-700 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent z-10"></div>
                                        <img
                                            src="https://images.unsplash.com/photo-1622253692010-33792da66093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Specialist in consultation"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="w-1/2 bg-slate-800 p-6 flex flex-col justify-center">
                                        <div className="space-y-4">
                                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                                <div className="text-[10px] text-slate-400 mb-1 uppercase tracking-widest font-bold">Inquiry Quality</div>
                                                <div className="flex items-end gap-2">
                                                    <span className="text-2xl font-bold text-white">High</span>
                                                    <span className="text-xs font-bold text-brand bg-brand/10 px-1.5 py-0.5 rounded">92%</span>
                                                </div>
                                            </div>
                                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                                <div className="text-[10px] text-slate-400 mb-1 uppercase tracking-widest font-bold">Estimated Procedure Value</div>
                                                <div className="text-xl font-bold text-white">RM 15k - 45k</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Overlay Badge */}
                                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl shadow-lg z-20">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-brand rounded-full p-1">
                                            <CheckCircle2 className="h-3 w-3 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Prestige Verified</p>
                                            <p className="text-xs font-bold text-white">Authority Established</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
