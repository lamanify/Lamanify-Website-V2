
import React from 'react';
import { BadgeCheck, Zap, HeartHandshake } from 'lucide-react';

export function Guarantee() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="fade-up container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Our Triple <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Guarantee.</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        We put our skin in the game. Partner with us with zero risk.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Guarantee 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-brand">
                            <BadgeCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Competence Assurance</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Certified experts managing your campaigns. We stay ahead of Google's changes so you don't have to.
                        </p>
                    </div>

                    {/* Guarantee 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-brand">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Performance Assurance</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            We focus on metrics that matter: Revenue and ROI, not just vanity metrics like clicks and impressions.
                        </p>
                    </div>

                    {/* Guarantee 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-brand">
                            <HeartHandshake className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Peace of Mind Assurance</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Full transparency with 24/7 access to your data. No hidden fees, no long-term lock-in contracts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
