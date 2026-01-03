
import React from 'react';
import { BadgeCheck, ShieldCheck, HeartHandshake } from 'lucide-react';

export function Guarantee() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="fade-up container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        The Risk Is Ours, <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Not Yours.</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        We back our service with tangible promises.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Guarantee 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-brand">
                            <BadgeCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">WhatsApp Compatibility Guarantee</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            We guarantee successful integration with your existing WhatsApp setup or Business API, ensuring seamless communication.
                        </p>
                    </div>

                    {/* Guarantee 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-brand">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">No-Missed-Bookings Promise</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Our system monitors 24/7. We promise to capture every inquiry and ensure no potential patient is left ignored.
                        </p>
                    </div>

                    {/* Guarantee 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-brand">
                            <HeartHandshake className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Zero Tech Stress Pledge</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            We handle all technical implementation. If anything breaks, we fix it instantly at no cost to you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
