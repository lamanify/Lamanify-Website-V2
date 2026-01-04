import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ArrowRight, Star, Calendar, CheckCircle, Search, Signal, Battery, Wifi } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
    return (
        <section className="relative min-h-screen bg-[#F8FAFC] overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-blue-100/40 rounded-full blur-[100px]" />
                <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Copy */}
                    <div className="max-w-2xl">
                        <LazyMotion features={domAnimation}>
                            <m.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                    <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                                        Dental Marketing Specialists in Malaysia
                                    </span>
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                                    Stop Competing on Price. <br />
                                    <span className="text-blue-600">Start Attracting High-Value Patients.</span>
                                </h1>

                                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                                    We help Malaysian dental practices fill their chairs with Implant, Orthodontic, and Veneer cases using our compliant Patient Acquisition System.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                    <Button className="h-14 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-200/50">
                                        Get Your Dental Growth Plan <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                                    <span className="flex items-center gap-1.5">
                                        <CheckCircle className="w-4 h-4 text-blue-600" />
                                        General
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <CheckCircle className="w-4 h-4 text-blue-600" />
                                        Ortho
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <CheckCircle className="w-4 h-4 text-blue-600" />
                                        Cosmetic
                                    </span>
                                </div>
                            </m.div>
                        </LazyMotion>
                    </div>

                    {/* Right Column: Visual (Google Search Mockup) */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <LazyMotion features={domAnimation}>
                            <m.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="relative w-full max-w-md"
                            >
                                {/* Mockup Container */}
                                <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 p-2 relative z-10 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">

                                    {/* Browser Bar */}
                                    <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center gap-3 rounded-t-2xl">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                            <div className="w-3 h-3 rounded-full bg-green-400" />
                                        </div>
                                        <div className="flex-1 bg-slate-200/50 rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs text-slate-500">
                                            <Search className="w-3.5 h-3.5" />
                                            Dental Implants Kuala Lumpur
                                        </div>
                                    </div>

                                    {/* Search Results */}
                                    <div className="p-6 bg-white min-h-[300px]">
                                        {/* Result 1 (Client) */}
                                        <div className="mb-6">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">D</div>
                                                <div className="text-xs text-slate-700 font-medium">Dental Excellence KL</div>
                                                <div className="px-1.5 py-0.5 bg-green-50 text-[10px] font-bold text-green-700 rounded ml-auto">Sponsored</div>
                                            </div>
                                            <h3 className="text-blue-600 text-lg font-medium hover:underline cursor-pointer mb-1">
                                                #1 Dental Implants KL - Book Free Consultation Today
                                            </h3>
                                            <p className="text-sm text-slate-500 mb-2">
                                                Restoring smiles with precision. Special offer on All-on-4 implants. Experienced specialists, state-of-the-art technology...
                                            </p>
                                            <div className="flex gap-2">
                                                <div className="flex text-yellow-400 text-xs">
                                                    <Star className="w-3 h-3 fill-current" />
                                                    <Star className="w-3 h-3 fill-current" />
                                                    <Star className="w-3 h-3 fill-current" />
                                                    <Star className="w-3 h-3 fill-current" />
                                                    <Star className="w-3 h-3 fill-current" />
                                                </div>
                                                <span className="text-xs text-slate-400">(482 reviews)</span>
                                            </div>
                                        </div>

                                        {/* Result 2 (Competitor) */}
                                        <div className="opacity-50 blur-[1px]">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-6 h-6 rounded-full bg-slate-100" />
                                                <div className="h-3 w-24 bg-slate-100 rounded" />
                                            </div>
                                            <div className="h-4 w-3/4 bg-slate-200 rounded mb-2" />
                                            <div className="h-3 w-full bg-slate-100 rounded mb-1" />
                                            <div className="h-3 w-2/3 bg-slate-100 rounded" />
                                        </div>
                                    </div>

                                    {/* Mobile Notification Overlay */}
                                    <div className="absolute bottom-6 -right-6 w-64 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-100 p-4 animate-bounce-slow">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <Calendar className="w-5 h-5 text-green-600" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-slate-900">New Appointment</p>
                                                <p className="text-[10px] text-slate-500 mt-0.5">Just now • Google Ads</p>
                                                <p className="text-xs text-slate-700 mt-1 font-medium">
                                                    Ali M. booked "Implant Consult"
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-3xl" />
                            </m.div>
                        </LazyMotion>
                    </div>
                </div>
            </div>
        </section>
    );
};
