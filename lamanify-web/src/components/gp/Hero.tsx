import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-40 -left-64 w-96 h-96 bg-[#e9204f]/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-20 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-[#e9204f] animate-pulse"></span>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Digital Marketing for General Practitioners</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
                            Stop Relying on Walk-Ins. <br />
                            <span className="text-[#e9204f]">Automate Your Patient Flow.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                            We help Malaysian GP clinics shift from low-margin "sick visits" to high-value cash services. Dominate your local area for Blood Screenings, Minor Surgeries, and Vaccinations.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                            <Button variant="primary" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-[#e9204f]/20 hover:shadow-[#e9204f]/40 transition-all bg-[#e9204f] hover:bg-[#d11a45] border-none text-white">
                                Get Your Local Growth Plan <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <p className="text-sm text-slate-500 italic">
                                Trusted by 50+ Clinics in Malaysia
                            </p>
                        </div>
                    </div>

                    {/* Visual Content - Split Shot Mockup */}
                    <div className="flex-1 w-full max-w-xl lg:max-w-none">
                        <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 p-2 md:p-4 rotate-1 lg:rotate-2 hover:rotate-0 transition-all duration-500">
                            <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video group">
                                {/* Abstract representation of "Doctor performing scan" vs "Dashboard" */}
                                <div className="absolute inset-0 flex">
                                    {/* Left: Doctor Image Placeholder */}
                                    <div className="w-1/2 bg-slate-200 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent z-10"></div>
                                        <img
                                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Doctor performing procedure"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Right: Dashboard */}
                                    <div className="w-1/2 bg-slate-50 p-4 flex flex-col justify-center">
                                        <div className="space-y-3">
                                            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                                                <div className="text-xs text-slate-500 mb-1">Appointments Booked</div>
                                                <div className="flex items-end gap-2">
                                                    <span className="text-2xl font-bold text-slate-900">1,248</span>
                                                    <span className="text-xs font-bold text-green-500 bg-green-50 px-1.5 py-0.5 rounded">+45%</span>
                                                </div>
                                            </div>
                                            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                                                <div className="text-xs text-slate-500 mb-1">Cash Revenue</div>
                                                <div className="text-xl font-bold text-slate-900">RM 85k</div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="h-8 flex-1 bg-brand/10 rounded-lg"></div>
                                                <div className="h-8 flex-1 bg-slate-100 rounded-lg"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Overlay Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-xl shadow-lg z-20">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-green-500 rounded-full p-1">
                                            <CheckCircle2 className="h-3 w-3 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">System Active</p>
                                            <p className="text-xs font-bold text-slate-900">Generating Patients...</p>
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
