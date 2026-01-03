
import React from 'react';
import { Button } from '../ui/Button';
import { Check, ArrowRight } from 'lucide-react';

export function Pricing() {
    const tiers = [
        {
            name: "SPEED STATIC",
            price: "1,500",
            description: "Entry-level high performance landing page.",
            features: [
                "1-5 Section Campaign Page",
                "Built with Tailwind CSS/React",
                "MOH Compliance",
                "Mobile Responsive Design",
                "Google Tag Manager Setup",
                "Free 1st Month Maintenance",
                "Serverless Deployment",
                "Standard SEO Setup"
            ]
        },
        {
            name: "CONVERSION STATIC",
            price: "2,500",
            description: "Our best value for performance-driven practices.",
            popular: true,
            features: [
                "Up to 10 Sections Campaign Page",
                "MOH-Compliant Copywriting",
                "Direct Lead Dashboard Integration",
                "Custom Animation & Interactions",
                "Speed Optimization (Score > 90)",
                "Advanced Tracking (GA4/Meta Pixel)",
                "Multi-Channel Conversion Funnel",
                "Free 3 Months Maintenance"
            ]
        },
        {
            name: "DYNAMIC CMS",
            price: "3,800",
            description: "For clinics that need flexibility and scalability.",
            features: [
                "Full Custom CMS Dashboard",
                "Dynamic Content Management",
                "A/B Testing Integration",
                "Advanced CRM Connectivity",
                "Custom Multi-Step Forms",
                "Priority VIP Support",
                "Unlimited Performance Tweak",
                "Free 6 Months Hosting"
            ]
        }
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand">Pricing & Plan</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Campaign Page <span className="text-brand">Packages</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Choose simple and effective solutions for your clinic.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <div key={index} className={`bg-white rounded-3xl p-8 border ${tier.popular ? 'border-brand shadow-2xl shadow-brand/10 relative scale-105 z-10' : 'border-slate-200'} flex flex-col`}>
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white text-xs font-bold px-4 py-1 rounded-full">
                                    MOST POPULAR
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold">RM</span>
                                    <span className="text-5xl font-black tracking-tight">{tier.price}</span>
                                    <span className="text-slate-400 font-medium">/one-off</span>
                                </div>
                                <p className="mt-4 text-slate-600 text-sm">{tier.description}</p>
                            </div>

                            <Button variant={tier.popular ? 'primary' : 'outline'} className="w-full mb-8 rounded-xl h-12">
                                Book Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            <div className="space-y-4">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Everything Included:</p>
                                {tier.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-start gap-3">
                                        <div className="bg-emerald-100 text-emerald-600 rounded-full p-0.5 mt-0.5">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span className="text-sm text-slate-600">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
