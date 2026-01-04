import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { MapPin, Search, Layout, MessageCircle } from 'lucide-react';

const steps = [
    {
        icon: MapPin,
        title: "Local Dominance (SEO & Maps)",
        description: "We optimize your Google Business Profile so you own the 'Dentist Near Me' map pack. When a patient in your area has a toothache, they see you first."
    },
    {
        icon: Search,
        title: "High-Intent Acquisition (PPC)",
        description: "We run hyper-targeted campaigns. We don't bid on generic 'Dentist'. We bid on 'Invisalign Price KL' and 'All-on-4 Implants' to bring you revenue, not busy work."
    },
    {
        icon: Layout,
        title: "Conversion-Focused Web Design",
        description: "A pretty website doesn't sell veneers; trust does. We build 'Trust Infrastructure'—highlighting your Before & After gallery, testimonials, and credentials to convert visitors."
    },
    {
        icon: MessageCircle,
        title: "Automated Reactivation",
        description: "The money is in the recall. We automate 6-month reminders and 'Unfinished Treatment' follow-ups via WhatsApp, keeping your hygiene schedule full without manual work."
    }
];

export const Solution = () => {
    return (
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            {/* Gradient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">The Dental GrowthBooster™</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">A Scientifically Engineered Patient Pipeline.</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        We don't just "do marketing". We install a proven system that captures, converts, and retains high-value patients.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <LazyMotion features={domAnimation}>
                        {steps.map((step, idx) => (
                            <m.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-xl bg-blue-600/10 flex items-center justify-center border border-blue-600/20">
                                        <step.icon className="w-7 h-7 text-blue-400" />
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <span className="text-4xl font-bold text-white/5 font-mono">0{idx + 1}</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </m.div>
                        ))}
                    </LazyMotion>
                </div>
            </div>
        </section>
    );
};
