import React from 'react';
import { MapPin, Syringe, History, ArrowRight } from 'lucide-react';

export function Solution() {
    const features = [
        {
            icon: <MapPin className="h-6 w-6 text-white" />,
            title: "Hyper-Local SEO Dominance",
            subtitle: "Own the \"3-Pack\"",
            description: "When a patient in your Taman types \"Klinik buka 24 jam\" or \"Scan baby near me,\" your clinic appears first. We optimize your Google Business Profile to capture 80% of local search traffic."
        },
        {
            icon: <Syringe className="h-6 w-6 text-white" />,
            title: "High-Margin Service Funnels",
            subtitle: "Increase Average Order Value (AOV)",
            description: "We don't advertise \"Cough & Cold.\" We run targeted campaigns for high-value services: Health Screenings, Minor Surgeries (Circumcision), and Vaccination Packages."
        },
        {
            icon: <History className="h-6 w-6 text-white" />, // Using HISTORY as a proxy for "Recall/Time"
            title: "Automated Patient Recall",
            subtitle: "Lifetime Value (LTV)",
            description: "Our system doesn't let patients forget you. We implement automated reminders for follow-up doses, annual check-ups, and seasonal vaccines, turning one-off visits into loyal families."
        }
    ];

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e9204f]/20 rounded-full blur-[100px] pointer-events-none opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none opacity-30"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/10 mb-6">
                        <span className="text-sm font-semibold tracking-wider uppercase text-[#e9204f]">The Lamanify GP Engine</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                        A Predictable System to <br /> Fill Your Waiting Room.
                    </h2>
                </div>

                <div className="space-y-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-8 items-start md:items-center bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-[#e9204f] flex items-center justify-center shadow-lg shadow-[#e9204f]/20">
                                    {feature.icon}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                                    <span className="hidden sm:inline-block px-3 py-1 text-xs font-semibold bg-white/10 rounded-full border border-white/10">
                                        {feature.subtitle}
                                    </span>
                                </div>
                                {/* Mobile subtitle */}
                                <div className="sm:hidden mb-2">
                                    <span className="px-3 py-1 text-xs font-semibold bg-white/10 rounded-full border border-white/10">
                                        {feature.subtitle}
                                    </span>
                                </div>
                                <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
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
