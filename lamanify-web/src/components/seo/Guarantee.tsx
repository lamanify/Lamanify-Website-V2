
import React from 'react';
import { BadgeCheck, Zap, HeartHandshake } from 'lucide-react';

export function Guarantee() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="fade-up container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        The Risk Is Ours, <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Not Yours.</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        We prioritize your peace of mind with our triple guarantee.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Guarantee 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-brand">
                            <BadgeCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance Guarantee</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Every step follows Malaysian KKM (KKLIU) and Google medical guidelines. If anything gets flagged, we fix it immediately, free of charge.
                        </p>
                    </div>

                    {/* Guarantee 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-brand">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Results-Driven Promise</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            We don't quit. We optimize relentlessly to ensure your clinic sees genuine, lasting improvements in rankings and patient growth.
                        </p>
                    </div>

                    {/* Guarantee 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-brand">
                            <HeartHandshake className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Full Transparency Commitment</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Clear, monthly progress insights. You'll always know exactly what we're doing and how it's impacting your clinic's growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
