
import React from 'react';
import { Clock, MessageSquare, TrendingUp, CalendarCheck } from 'lucide-react';

const features = [
    {
        title: "Always Instantly Connected",
        description: "Never miss a patient inquiry again. Our system replies instantly, 24/7, ensuring your patients feel heard immediately, even after hours.",
        icon: Clock,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Personalized Patient Conversations",
        description: "Our AI Chatbot engages patients with personalized responses, tone, and information tailored to your clinic's brand and services.",
        icon: MessageSquare,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Results You Can See",
        description: "Track every interaction and conversion. See tangible growth in patient engagement and reduced administrative workload.",
        icon: TrendingUp,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Automated Booking System",
        description: "Streamline your appointment process. Patients can book directly through WhatsApp, syncing seamlessly with your schedule.",
        icon: CalendarCheck,
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
                        Why choose <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Lamanify WhatsApp Automation?</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Ease your team's work and accelerate your clinic's patient bookings.
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
