
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Check, ChevronDown, ChevronUp, Minus } from 'lucide-react';
import { m, LazyMotion, domAnimation } from 'framer-motion';

const plans = [
    {
        name: "Essential",
        subtitle: "Startup Clinic",
        price: "RM 4,450",
        description: "Perfect for new clinics needing a professional online presence.",
        features: [
            "Professional Web Design",
            "5 Core Pages",
            "Basic SEO Setup",
            "Mobile Responsive",
            "Contact Form Integration"
        ],
        popular: false
    },
    {
        name: "Professional",
        subtitle: "Growth & Branding",
        price: "Contact Us",
        description: "For clinics looking to expand reach and build strong brand awareness.",
        features: [
            "Custom Premium Design",
            "Up to 10 Pages",
            "Advanced SEO Structure",
            "Blog / News Section",
            "Appointment Booking System",
            "WhatsApp Integration"
        ],
        popular: true
    },
    {
        name: "Platinum",
        subtitle: "E-Commerce Ready",
        price: "Contact Us",
        description: "Complete solution with payment gateway for selling products/services.",
        features: [
            "Everything in Professional",
            "E-Commerce Functionality",
            "Payment Gateway Integration",
            "Product Catalog",
            "Inventory Management System"
        ],
        popular: false
    }
];

const includedFeatures = [
    "FREE Domain, Hosting & SSL",
    "FREE 1 Year Technical Support",
    "Easy Content Management System",
    "Professional Web Design Structure",
    "100% Secured & Protected",
    "Advanced 3rd Party Integration"
];

export function Pricing() {
    return (
        <LazyMotion features={domAnimation}>
            <section className="py-24 bg-white" id="pricing">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="container mx-auto px-4 sm:px-6"
                >
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-block px-3 py-1 rounded-full bg-brand/10 bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent text-xs font-bold uppercase tracking-wider mb-4">
                            Packages
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Transparent <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Pricing</span> for every stage.
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Choose the package that fits your clinic's current growth stage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto align-start mb-16">
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
                                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                                    <div className="text-xs font-medium text-brand uppercase tracking-wider mb-2">{plan.subtitle}</div>
                                    <p className="text-sm text-slate-500 mb-6 h-10">{plan.description}</p>
                                    <div className="flex items-baseline">
                                        <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                                        {plan.price !== "Contact Us" && <span className="text-slate-500 ml-1 text-sm">/starting</span>}
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

                    <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <h3 className="text-center text-lg font-bold text-slate-900 mb-8">What's Included in ALL Packages?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {includedFeatures.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </m.div>
            </section>
        </LazyMotion>
    );
}
