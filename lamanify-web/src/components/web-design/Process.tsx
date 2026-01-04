
import React from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { FileText, Palette, Rocket, Search } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Brief",
        description: "We start by understanding your clinic's goals, target audience, and unique value proposition.",
        icon: FileText
    },
    {
        number: "02",
        title: "Design",
        description: "Our team crafts a custom, high-fidelity design that aligns with your brand and industry standards.",
        icon: Palette
    },
    {
        number: "03",
        title: "Launch",
        description: "After your approval, we develop and launch your site on a secure, high-performance server.",
        icon: Rocket
    },
    {
        number: "04",
        title: "SEO",
        description: "We optimize your site structure and content to ensure high visibility on Google from Day 1.",
        icon: Search
    }
];

export function Process() {
    return (
        <LazyMotion features={domAnimation}>
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Our Proven <span className="text-gradient">Process</span>
                        </h2>
                        <p className="text-slate-600 text-lg">
                            From concept to conversion, we handle everything so you can focus on your patients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10" />

                        {steps.map((step, index) => (
                            <m.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <step.icon className="h-10 w-10 text-brand" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm font-bold border-2 border-white">
                                        {step.number}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}
