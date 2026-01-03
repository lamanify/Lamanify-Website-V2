
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';

export function Pricing() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Simple, Transparent <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Pricing.</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Get the complete review management system for a flat annual fee.
                    </p>
                </div>

                <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="p-8 sm:p-12 text-center">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Annual License</h3>
                        <div className="flex items-center justify-center gap-1 mb-6">
                            <span className="text-4xl sm:text-5xl font-bold text-slate-900">RM 650</span>
                            <span className="text-slate-500 self-end mb-2">/year</span>
                        </div>
                        <p className="text-slate-500 text-sm mb-8">Per Clinic Branch</p>

                        <ul className="text-left space-y-4 mb-8">
                            {[
                                "Unlimited Review Invitations",
                                "Negative Review Filtering (1-3 Stars)",
                                "Google Business Profile Integration",
                                "Feedback Management Dashboard",
                                "QR Code Generation",
                                "SMS & WhatsApp Templates"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700">
                                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button variant="primary" className="w-full py-6 text-lg rounded-xl shadow-lg shadow-brand/20">
                            Get Started Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
