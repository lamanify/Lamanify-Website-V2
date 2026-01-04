import React from 'react';
import { BookOpen, Target, Award } from 'lucide-react';

export function Solution() {
    const features = [
        {
            icon: <BookOpen className="h-6 w-6 text-white" />,
            title: "Patient Education Funnels",
            subtitle: "Expert Awareness",
            description: "Instead of raw ads, we deploy high-value educational content that explains the 'Why' behind your specialized procedures. We build trust before the patient even steps into the hospital."
        },
        {
            icon: <Target className="h-6 w-6 text-white" />,
            title: "Symptom-to-Specialist Targeting",
            subtitle: "High-Intent Capture",
            description: "We target patients searching for specific symptoms or conditions (e.g., 'chronic knee pain' or 'sinus surgery') and guide them directly to your clinical expertise, bypassing the general practitioner bottleneck."
        },
        {
            icon: <Award className="h-6 w-6 text-white" />,
            title: "Prestige Branding & Social Proof",
            subtitle: "Authority Established",
            description: "We position you as the definitive expert through professional video content, academic contributions, and patient outcome success stories—all while staying strictly MOH compliant."
        }
    ];

    return (
        <section className="py-24 bg-white text-slate-900 overflow-hidden relative border-y border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-brand/10 rounded-full border border-brand/20 mb-6">
                        <span className="text-sm font-semibold tracking-wider uppercase text-brand">The Specialist Growth Framework</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                        From Invisible Expert to <br /> <span className="text-brand">The Definitive Choice.</span>
                    </h2>
                </div>

                <div className="space-y-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-8 items-start md:items-center bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:bg-slate-100 transition-colors">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center shadow-lg shadow-brand/20">
                                    {feature.icon}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                                    <span className="hidden sm:inline-block px-3 py-1 text-xs font-semibold bg-white rounded-full border border-slate-200">
                                        {feature.subtitle}
                                    </span>
                                </div>
                                <div className="sm:hidden mb-2">
                                    <span className="px-3 py-1 text-xs font-semibold bg-white rounded-full border border-slate-200">
                                        {feature.subtitle}
                                    </span>
                                </div>
                                <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
