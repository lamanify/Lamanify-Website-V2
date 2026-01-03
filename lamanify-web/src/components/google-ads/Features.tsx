
import React from 'react';
import { Target, Cpu, ShieldCheck, Layout } from 'lucide-react';

const features = [
    {
        title: "Hyper-Targeted Medical Keywords",
        description: "We research and bid on high-intent keywords specifically used by patients looking for your treatments, avoiding wasted spend.",
        icon: Target,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "AI-Enhanced Bidding",
        description: "Our proprietary algorithms optimize bids in real-time to ensure you get the best ad placement for the lowest cost per click.",
        icon: Cpu,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Strict Compliance",
        description: "We navigate the complex landscape of medical advertising policies to keep your account safe and ads running smoothly.",
        icon: ShieldCheck,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Conversion Landing Pages",
        description: "We don't just send traffic to your home page. We build dedicated, high-converting landing pages for each service.",
        icon: Layout,
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
                        Why we are the top <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">PPC Agency.</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Specialized focus, advanced technology, and a results-first approach.
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
