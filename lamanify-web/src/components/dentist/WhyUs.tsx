import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Phone, Users, CheckCheck, Clock } from 'lucide-react';

export const WhyUs = () => {
    return (
        <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2">
                        <LazyMotion features={domAnimation}>
                            <m.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4 block">The Tech Advantage</span>
                                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Your Front Desk's <br /> Best Friend.</h2>
                                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                    We don't just send you leads (names and numbers). We send you appointments.
                                    <br /><br />
                                    Our "Agency OS" technology pre-qualifies leads before they reach your team. By the time your receptionist picks up the phone, the patient knows the price range, has seen your work, and is ready to book.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "Automated Lead Filtration",
                                        "WhatsApp Pre-Qualification",
                                        "No 'Ghost' Leads",
                                        "Seamless PMS Integration"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                <CheckCheck className="w-3.5 h-3.5 text-blue-400" />
                                            </div>
                                            <span className="text-slate-300 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </m.div>
                        </LazyMotion>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <LazyMotion features={domAnimation}>
                            <m.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8 relative"
                            >
                                <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500 rounded-full blur-3xl opacity-20" />

                                {/* Simulated Chat UI */}
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                                            <Users className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="bg-slate-700 rounded-2xl p-4 rounded-tl-none max-w-[80%]">
                                            <p className="text-sm text-slate-200">Hi, I'm interested in Dental Implants. How much is it?</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 flex-row-reverse">
                                        <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="bg-blue-600 rounded-2xl p-4 rounded-tr-none max-w-[80%] text-right">
                                            <p className="text-sm text-white">Hi! Our All-on-4 starts from RMXX,XXX. Would you like to see our successful cases?</p>
                                            <div className="text-[10px] text-blue-200 mt-1 flex items-center justify-end gap-1">
                                                Automated Response • <CheckCheck className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                                            <Users className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="bg-slate-700 rounded-2xl p-4 rounded-tl-none max-w-[80%]">
                                            <p className="text-sm text-slate-200">Yes, that sounds good. Can I book a consultation?</p>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-slate-700">
                                        <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 p-3 rounded-lg">
                                            <Phone className="w-5 h-5 text-green-400" />
                                            <div>
                                                <p className="text-xs text-green-400 font-bold uppercase">Lead Qualified</p>
                                                <p className="text-sm text-slate-300">Handing over to receptionist...</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </m.div>
                        </LazyMotion>
                    </div>

                </div>
            </div>
        </section>
    );
};
