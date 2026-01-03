
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Check, ChevronDown, ChevronUp, Minus } from 'lucide-react';

const plans = [
    {
        name: "Lite",
        price: "Contact Us",
        description: "Essential automation for growing clinics.",
        features: [
            "FREE CRM (Worth RM799)",
            "Auto-Save Patient to Database",
            "WhatsApp Appointment Form",
            "Appointment Reminders",
            "Auto Reply Chat",
            "Patient Notifications",
            "Staff Alerts",
            "FAQ Templates"
        ],
        popular: false
    },
    {
        name: "Plus",
        price: "Contact Us",
        description: "Advanced AI-powered engagement and automation.",
        features: [
            "Everything in Lite",
            "AI Chatbot Replies",
            "Smart Q&A Automation",
            "Personalized Follow-up",
            "Language Adaptation",
            "Free-Text Booking",
            "Instant Patient Data"
        ],
        popular: true
    }
];

const comparisonData = [
    {
        category: "CORE FEATURES",
        features: [
            { name: "CRM Integration", lite: true, plus: true },
            { name: "Auto-Save Contacts", lite: true, plus: true },
            { name: "Appointment Reminders", lite: true, plus: true },
        ]
    },
    {
        category: "AI & AUTOMATION",
        features: [
            { name: "Auto Reply", lite: "Standard", plus: "AI Chatbot" },
            { name: "Q&A Automation", lite: "Templates", plus: "Smart AI" },
            { name: "Language Support", lite: "Single", plus: "Multi-Language" },
            { name: "Booking Method", lite: "Form", plus: "Free-Text + Form" },
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
                        Our Packages
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Transparent <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Pricing</span> for every stage.
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Choose the plan that fits your growth goals.
                    </p>
                </div>

                {/* Adjusted grid for 2 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto align-start mb-20">
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
                                    <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
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
                                Get {plan.name}
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <button
                        onClick={() => setIsComparisonOpen(!isComparisonOpen)}
                        className="flex items-center justify-center gap-2 w-full py-4 text-slate-500 hover:text-brand transition-colors font-medium"
                    >
                        Compare Packages {isComparisonOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isComparisonOpen ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
                        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="border-b border-slate-50">
                                        <th className="py-8 px-8 w-1/3"></th>
                                        <th className="py-8 px-4 text-center">
                                            <span className="text-sm font-bold uppercase tracking-widest text-slate-900">Lite</span>
                                        </th>
                                        <th className="py-8 px-4 text-center">
                                            <span className="text-sm font-bold uppercase tracking-widest text-brand">Plus</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((category, idx) => (
                                        <React.Fragment key={idx}>
                                            <tr className="bg-slate-50/50">
                                                <td colSpan={3} className="py-4 px-8">
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{category.category}</span>
                                                </td>
                                            </tr>
                                            {category.features.map((feature, fIdx) => (
                                                <tr key={fIdx} className="border-b border-slate-50 hover:bg-slate-50/30 transition-colors">
                                                    <td className="py-5 px-8">
                                                        <span className="text-sm font-medium text-slate-700">{feature.name}</span>
                                                    </td>
                                                    <td className="py-5 px-4 text-center">
                                                        {renderValue(feature.lite)}
                                                    </td>
                                                    <td className="py-5 px-4 text-center">
                                                        {renderValue(feature.plus)}
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
