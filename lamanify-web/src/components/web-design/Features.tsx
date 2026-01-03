
import React from 'react';
import { TrendingUp, Award, Fingerprint, Clock } from 'lucide-react';
import { m, LazyMotion, domAnimation } from 'framer-motion';

const features = [
    {
        title: "Scalable Organic Growth",
        description: "Strategies designed to grow your patient base naturally over time, reducing reliance on paid ads.",
        icon: TrendingUp,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Always Top of Mind",
        description: "Position your clinic as the authority in your field. Stay visible when patients need you most.",
        icon: Award,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Showcase Your Uniqueness",
        description: "Custom designs that reflect your clinic's unique identity and values, setting you apart from competitors.",
        icon: Fingerprint,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "24/7 Patient Magnet",
        description: "Your website works while you sleep, educating potential patients and booking appointments around the clock.",
        icon: Clock,
        color: "text-brand",
        bg: "bg-brand/10"
    }
];

export function Features() {
    return (
        <LazyMotion features={domAnimation}>
        <section className="py-24 bg-white">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="container mx-auto px-4 sm:px-6"
            >
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Power Up Your Clinic's <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Patient Growth.</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        More than just a pretty face – our websites are engineering for conversion and SEO performance.
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
            </m.div>
        </section>
        </LazyMotion>
    );
}
