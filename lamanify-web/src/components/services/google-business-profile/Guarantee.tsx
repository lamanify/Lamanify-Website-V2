
import React from 'react';
import { BadgeCheck, Zap, HeartHandshake } from 'lucide-react';

export function Guarantee() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="fade-up container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Our Promise to <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">You.</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        You Only Pay for Visible Value, Not Empty Promises.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Guarantee 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-brand">
                            <BadgeCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Clinic-First Compliance</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            We strictly follow all Malaysian healthcare regulations. Your profile stays safe and professional.
                        </p>
                    </div>

                    {/* Guarantee 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-brand">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">No Lock-in Contracts</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            If you're ever dissatisfied, you can pause or cancel our monthly management with just 30 days' notice.
                        </p>
                    </div>

                    {/* Guarantee 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-brand">
                            <HeartHandshake className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">100% Transparency</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Regular progress updates and transparent reporting throughout the process. Your Profile—Your Control.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
