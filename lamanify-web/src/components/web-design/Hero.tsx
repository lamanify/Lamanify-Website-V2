
import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Layout, MousePointer, Search } from 'lucide-react';

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
                    <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Website Design Service</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
                    Healthcare Website Design for Clinics. <span className="text-gradient">Powered by AI SEO.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
                    Website Design That Fills Your Clinic With High Quality Patients Organically. Grow Your Clinic's Brand Online and Reach More Patients.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <Button variant="primary" className="h-12 px-8 text-lg rounded-full shadow-xl shadow-brand/20 hover:shadow-brand/40 transition-all">
                        Request Strategy Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>

                {/* Browser Mockup */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform-gpu perspective-1000 rotate-x-6">
                        {/* Browser Header */}
                        <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="flex-1 bg-white h-8 rounded-md border border-slate-200 flex items-center px-3 text-xs text-slate-400">
                                <Search className="w-3 h-3 mr-2 opacity-50" />
                                www.yourclinic.com
                            </div>
                        </div>

                        {/* Website Content Preview */}
                        <div className="relative aspect-[16/9] bg-white group cursor-default">
                            {/* Hero Area of Mockup */}
                            <div className="absolute inset-0 bg-slate-50 flex flex-col">
                                <div className="h-16 border-b border-slate-100 flex items-center px-8 justify-between bg-white">
                                    <div className="w-24 h-6 bg-slate-200 rounded"></div>
                                    <div className="flex gap-4">
                                        <div className="w-16 h-4 bg-slate-200 rounded"></div>
                                        <div className="w-16 h-4 bg-slate-200 rounded"></div>
                                        <div className="w-24 h-8 bg-brand/20 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center px-12 gap-8">
                                    <div className="flex-1 space-y-4">
                                        <div className="w-3/4 h-10 bg-slate-800/10 rounded-lg"></div>
                                        <div className="w-full h-4 bg-slate-200 rounded"></div>
                                        <div className="w-2/3 h-4 bg-slate-200 rounded"></div>
                                        <div className="w-32 h-10 bg-brand rounded-lg mt-4 shadow-lg shadow-brand/20"></div>
                                    </div>
                                    <div className="w-1/3 aspect-square bg-slate-200 rounded-2xl relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-blue-500/20"></div>
                                    </div>
                                </div>
                                {/* Floating Elements */}
                                <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-xl shadow-xl border border-slate-100 animate-bounce delay-1000 duration-[3000ms]">
                                    <Layout className="w-6 h-6 text-blue-500" />
                                </div>
                                <div className="absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2 p-3 bg-white rounded-xl shadow-xl border border-slate-100 animate-bounce delay-500 duration-[4000ms]">
                                    <MousePointer className="w-6 h-6 text-brand" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-brand/5 blur-3xl -z-10 rounded-[3rem]" />
                </div>

            </div>
        </section>
    );
}
