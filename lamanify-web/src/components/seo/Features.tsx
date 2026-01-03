
import React from 'react';
import { Target, Cpu, ShieldCheck, Layout } from 'lucide-react';

const features = [
    {
        title: "Always Top of Mind",
        description: "Be the first clinic patients see when searching for treatments in your area. Secure your spot at the top of Google results.",
        icon: Target,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "AI Optimized Strategies",
        description: "Our proprietary AI algorithms analyze search patterns to identify high-value keywords that drive actual patient bookings.",
        icon: Cpu,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Showcase Your Uniqueness",
        description: "We create custom, medical-grade content that highlights your expertise and builds trust before patients even visit.",
        icon: Layout,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Growth You Can Measure",
        description: "Clear, transparent reporting. We track not just rankings, but phone calls, WhatsApp inquiries, and appointment bookings.",
        icon: ShieldCheck,
        color: "text-brand",
        bg: "bg-brand/10"
    }
];

export function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="fade-up container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Scalable <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Organic Growth</span> Strategies.
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Power up your clinic's patient growth with AI Optimized, Healthcare SEO.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="group relative p-8 rounded-3xl border border-slate-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className={`inline-flex items-center justify-center p-3 rounded-2xl ${feature.bg} mb-6 transition-colors group-hover:scale-110 duration-300`}>
                                <feature.icon className={`h-8 w-8 ${feature.color}`} />
                            </div>
                            <div className="absolute top-8 right-8 text-6xl font-black text-slate-50 opacity-[0.03] select-none">
                                0{index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
