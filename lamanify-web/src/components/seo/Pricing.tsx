
import React from 'react';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

export function Pricing() {
    return (
        <section className="py-24 bg-slate-50" id="book">
            <div className="fade-up container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-brand/10 bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent text-xs font-bold uppercase tracking-wider mb-4">
                        Our Package
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        What's Included in All <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">SEO Packages?</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Everything you need to dominate local search results and attract more patients.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Complete Clinic SEO Solution</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                A comprehensive, done-for-you service designed specifically for Malaysian clinics. We handle everything from technical audits to content creation, so you can focus on treating patients.
                            </p>
                            <Button className="w-full md:w-auto px-8 py-4 text-lg rounded-full" onClick={() => window.open('https://api.whatsapp.com/send/?phone=601156706510&text=Hi+Lamanify%2C%0D%0A%0D%0AI+have+questions+about+your+SEO+package.&type=phone_number&app_absent=0', '_blank')}>
                                Book Your Strategy Call
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Built-for-You Discovery & Strategy",
                                "Ongoing Search Engine Momentum",
                                "Worry-Free Compliance (KKLIU) & Reputation",
                                "Local Patient Magnetism",
                                "Clinic-Ready Content That Converts",
                                "Monthly Progress Insights",
                                "Technical Website Optimization",
                                "Google Business Profile Optimization"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand/10 flex items-center justify-center mr-3 mt-0.5">
                                        <Check className="h-4 w-4 text-brand" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
