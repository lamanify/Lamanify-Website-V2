
import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-40 -left-64 w-96 h-96 bg-brand/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-20 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 border border-slate-200 backdrop-blur-sm mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
                    <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Campaign Page Service</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
                    The <span className="text-brand">Ad-Performance</span> Landing Page.
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
                    Where your traffic finally finds a purpose. High-Conversion, MOH-Compliant Landing Pages for your clinic's ad campaigns.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <Button variant="primary" className="h-12 px-8 text-lg rounded-full shadow-xl shadow-brand/20 hover:shadow-brand/40 transition-all">
                        Level Up Campaign Page <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>

                {/* Funnel Illustration Placeholder */}
                <div className="relative max-w-3xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col items-center gap-6">
                        <div className="w-full max-w-md aspect-[4/3] relative flex flex-col gap-4">
                            {/* Funnel Mockup */}
                            <div className="relative w-full h-full bg-slate-50 rounded-2xl border border-slate-200/50 flex flex-col p-6 overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-brand"></div>
                                <div className="flex gap-2 mb-4">
                                    <div className="h-2 w-2 rounded-full bg-slate-300"></div>
                                    <div className="h-2 w-2 rounded-full bg-slate-300"></div>
                                    <div className="h-2 w-2 rounded-full bg-slate-300"></div>
                                </div>

                                <div className="flex flex-col gap-4 items-center justify-center h-full">
                                    <div className="w-1/2 h-4 bg-slate-200 rounded-full animate-pulse"></div>
                                    <div className="w-3/4 h-3 bg-slate-100 rounded-full animate-pulse"></div>

                                    <div className="relative w-full flex flex-col items-center gap-4 mt-8">
                                        <div className="w-48 h-12 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center p-2">
                                            <div className="w-full h-full bg-slate-50 rounded-lg"></div>
                                        </div>
                                        <div className="w-32 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                                            <span className="text-[10px] font-bold text-brand">CONVERSION</span>
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
