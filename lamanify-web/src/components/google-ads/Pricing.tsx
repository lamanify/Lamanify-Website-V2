import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Check, ChevronDown, ChevronUp, Minus } from 'lucide-react';

const plans = [
    {
        name: "Launch",
        price: "RM 1,500",
        description: "Perfect for single clinics starting out.",
        features: [
            "Up to RM 3k Ad Spend",
            "1 Campaign",
            "Basic Keyword Research",
            "Monthly Reporting",
            "Standard Support"
        ],
        popular: false
    },
    {
        name: "Growth",
        price: "RM 2,500",
        description: "For clinics ready to scale aggressively.",
        features: [
            "Up to RM 10k Ad Spend",
            "3 Campaigns",
            "Advanced Bidding Strategy",
            "Bi-Weekly Reporting",
            "Priority Support",
            "Landing Page Optimization"
        ],
        popular: true
    },
    {
        name: "Scale",
        price: "RM 4,500",
        description: "Dominance for multi-branch chains.",
        features: [
            "Uncapped Ad Spend",
            "Unlimited Campaigns",
            "Full Funnel Strategy",
            "Weekly Reporting",
            "Dedicated Account Manager",
            "Conversion Rate Optimization (CRO)",
            "Competitor Analysis"
        ],
        popular: false
    }
];

const comparisonData = [
    {
        category: "CAMPAIGN STRATEGY",
        features: [
            { name: "Keyword Research", launch: "Basic", growth: "Advanced", scale: "Enterprise" },
            { name: "Ad Copywriting", launch: true, growth: true, scale: true },
            { name: "Competitor Analysis", launch: false, growth: true, scale: true },
            { name: "A/B Testing", launch: false, growth: true, scale: true },
            { name: "Geo-Fencing", launch: false, growth: true, scale: true },
        ]
    },
    {
        category: "MANAGEMENT & OPTIMIZATION",
        features: [
            { name: "Bid Management", launch: "Weekly", growth: "Daily", scale: "Real-time AI" },
            { name: "Negative Keyword Filtering", launch: "Monthly", growth: "Weekly", scale: "Daily" },
            { name: "Landing Page Optimization", launch: false, growth: "Basic Suggestions", scale: "Full CRO" },
        ]
    },
    {
        category: "REPORTING & SUPPORT",
        features: [
            { name: "Performance Dashboard", launch: true, growth: true, scale: true },
            { name: "Monthly Report", launch: "PDF", growth: "Video Walkthrough", scale: "Strategy Meeting" },
            { name: "Support Channel", launch: "Email", growth: "WhatsApp + Email", scale: "Priority 24/7" },
        ]
    }
];

export function Pricing() {
    const [isComparisonOpen, setIsComparisonOpen] = useState(false);

    return (
        <section className="py-24 bg-slate-50">
            <div className="fade-up container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-brand/10 bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent text-xs font-bold uppercase tracking-wider mb-4">
                        Investment Plans
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Transparent <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Pricing</span> for every stage.
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Choose the plan that fits your growth goals. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto align-start mb-20">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-8 border ${plan.popular ? 'border-brand shadow-xl scale-105 z-10' : 'border-slate-100 shadow-sm'} flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                                <p className="text-sm text-slate-500 mb-6 h-10">{plan.description}</p>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                                    <span className="text-slate-500 ml-2">/month</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="h-5 w-5 text-brand shrink-0 mr-3" />
                                        <span className="text-sm text-slate-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                                Choose {plan.name}
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="max-w-5xl mx-auto">
                    <button
                        onClick={() => setIsComparisonOpen(!isComparisonOpen)}
                        className="flex items-center justify-center gap-2 w-full py-4 text-slate-500 hover:text-brand transition-colors font-medium"
                    >
                        Compare Packages {isComparisonOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isComparisonOpen ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
                        <div className="md:hidden text-center mb-4 text-xs text-slate-400 font-medium">
                            <span className="flex items-center justify-center gap-2">
                                ↔ Swipe left/right to compare plans
                            </span>
                        </div>
                        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-x-auto scrollbar-hide">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-slate-50">
                                        <th className="py-8 px-8 w-1/4"></th>
                                        <th className="py-8 px-4 text-center">
                                            <span className="text-sm font-bold uppercase tracking-widest text-slate-900">Launch</span>
                                        </th>
                                        <th className="py-8 px-4 text-center">
                                            <span className="text-sm font-bold uppercase tracking-widest text-brand">Growth</span>
                                        </th>
                                        <th className="py-8 px-4 text-center">
                                            <span className="text-sm font-bold uppercase tracking-widest text-slate-900">Scale</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((category, idx) => (
                                        <React.Fragment key={idx}>
                                            <tr className="bg-slate-50/50">
                                                <td colSpan={4} className="py-4 px-8">
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{category.category}</span>
                                                </td>
                                            </tr>
                                            {category.features.map((feature, fIdx) => (
                                                <tr key={fIdx} className="border-b border-slate-50 hover:bg-slate-50/30 transition-colors">
                                                    <td className="py-5 px-8">
                                                        <span className="text-sm font-medium text-slate-700">{feature.name}</span>
                                                    </td>
                                                    <td className="py-5 px-4 text-center">
                                                        {renderValue(feature.launch)}
                                                    </td>
                                                    <td className="py-5 px-4 text-center">
                                                        {renderValue(feature.growth)}
                                                    </td>
                                                    <td className="py-5 px-4 text-center">
                                                        {renderValue(feature.scale)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <p className="text-center text-xs text-slate-400 mt-12">
                    * Ad spend is paid directly to Google. Management fee covers our service.
                </p>
            </div>
        </section>
    );
}

function renderValue(val: any) {
    if (typeof val === 'boolean') {
        return val ? <Check className="h-5 w-5 text-brand mx-auto" /> : <Minus className="h-5 w-5 text-slate-200 mx-auto" />;
    }
    return <span className="text-sm text-slate-600 font-medium">{val}</span>;
}
