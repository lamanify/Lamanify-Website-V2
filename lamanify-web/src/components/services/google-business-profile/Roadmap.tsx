
import React from 'react';

const steps = [
    {
        title: "Clinic Discovery & Local Analysis",
        description: "We start by analyzing your current local presence, competition, and clinic details to create a tailored optimization plan.",
        side: "left"
    },
    {
        title: "Profile Audit & Action Plan",
        description: "A deep dive into your existing GBP to identify gaps, errors, and opportunities for immediate improvement.",
        side: "right"
    },
    {
        title: "Complete Optimization",
        description: "We execute the plan: updating info, enhancing photos, reseaching keywords, and setting up Q&A to fully polish your profile.",
        side: "left"
    },
    {
        title: "Visibility Launch & Ongoing Support",
        description: "Your optimized profile goes live. We then provide monthly updates, posts, and reporting to keep you ranking high.",
        side: "right"
    }
];

export function Roadmap() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="fade-up container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Our <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Process.</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        How we take you from invisible to unmissable.
                    </p>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 md:translate-x-0"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center ${step.side === 'left' ? 'md:flex-row-reverse' : ''} gap-8`}>

                                {/* Content */}
                                <div className="flex-1 md:text-right pl-12 md:pl-0">
                                    <div className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all ${step.side === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent font-bold text-sm tracking-widest uppercase mb-2">Step 0{index + 1}</div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-600 text-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Dot */}
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand border-4 border-white shadow-lg z-10"></div>

                                {/* Spacer for the other side */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
