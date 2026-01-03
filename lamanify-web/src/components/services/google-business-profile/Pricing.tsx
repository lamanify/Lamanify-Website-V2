
import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Check, ChevronDown, ChevronUp, Minus } from 'lucide-react';

const plans = [
    {
        name: "Discover",
        price: "Contact Us",
        description: "Essential visibility for new clinics.",
        features: [
            "GBP Setup & Audit",
            "Clinic Info Update",
            "Keyword Research",
            "10 Clinic Photos",
            "1 Google Post/mo",
            "Completion Report"
        ],
        popular: false
    },
    {
        name: "Attract",
        price: "Contact Us",
        description: "Enhanced presence to stand out.",
        features: [
            "Everything in Discover",
            "Competitor Mapping",
            "Review Response",
            "4 Google Posts/mo",
            "Performance Dashboard",
            "Staff Highlights"
        ],
        popular: true
    },
    {
        name: "Lead",
        price: "Contact Us",
        description: "Maximum dominance and management.",
        features: [
            "Everything in Attract",
            "Weekly Posts",
            "Review Management",
            "Spam Monitoring",
            "Competitor Tracking",
            "Priority Support"
        ],
        popular: false
    }
];

const comparisonData = [
    {
        category: "SETUP & OPTIMIZATION",
        features: [
            { name: "GBP Setup & Audit", discover: true, attract: true, lead: true },
            { name: "Clinic Info Update", discover: true, attract: true, lead: true },
            { name: "Keyword Research", discover: "Basic", attract: "Advanced", lead: "Comprehensive" },
            { name: "Service Categories", discover: true, attract: true, lead: true },
            { name: "Competitor Mapping", discover: false, attract: true, lead: true },
            { name: "Spam Monitoring", discover: false, attract: false, lead: true },
        ]
    },
    {
        category: "CONTENT & ENGAGEMENT",
        features: [
            { name: "Google Posts", discover: "1 Monthly", attract: "4 Monthly", lead: "Weekly" },
            { name: "Clinic Photos", discover: "10 Photos", attract: "Enhanced Gallery", lead: "Photo Updates" },
            { name: "Q&A Management", discover: "5 Q&A", attract: "Expansion", lead: "Proactive" },
            { name: "Staff Highlights", discover: false, attract: true, lead: true },
        ]
    },
    {
        category: "REPUTATION & REPORTING",
        features: [
            { name: "Review Management", discover: "Starter Guide", attract: "Response", lead: "Full Management" },
            { name: "Reporting", discover: "Completion", attract: "Dashboard", lead: "Custom" },
            { name: "Support", discover: "Standard", attract: "Standard", lead: "Priority" },
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
                        Service Packages
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Transparent <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Packages</span> for your needs.
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Choose the right level of optimization for your clinic.
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
                                    <span className="text-2xl font-bold text-slate-900">{plan.price}</span>
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
                        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-slate-50">
                                        <th className="py-8 px-8 w-1/4"></th>
                                        <th className="py-8 px-4 text-center">
                                            <span className="text-sm font-bold uppercase tracking-widest text-slate-900">Discover</span>
                                        </th>
                                        <th className="py-8 px-4 text-center">
                                            <span className="text-sm font-bold uppercase tracking-widest text-brand">Attract</span>
                                        </th>
                                        <th className="py-8 px-4 text-center">
                                            <span className="text-sm font-bold uppercase tracking-widest text-slate-900">Lead</span>
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
                                                        {renderValue(feature.discover)}
                                                    </td>
                                                    <td className="py-5 px-4 text-center">
                                                        {renderValue(feature.attract)}
                                                    </td>
                                                    <td className="py-5 px-4 text-center">
                                                        {renderValue(feature.lead)}
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
