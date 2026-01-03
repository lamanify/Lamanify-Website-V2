
import React from 'react';
import { QrCode, Send, ShieldAlert, MessageSquare, MapPin } from 'lucide-react';

const features = [
    {
        title: "Easy Review Access",
        description: "Provide patients with convenient links to leave reviews seamlessly after their appointment.",
        icon: QrCode,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Multi-Channel Invitations",
        description: "Send review requests via QR Code, SMS, WhatsApp, and Email to reach patients where they are.",
        icon: Send,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Negative Review Protection",
        description: "Prevent bad reviews from going public. Our system intercepts 1-3 star ratings and redirects them to a private feedback form.",
        icon: ShieldAlert,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Feedback Management",
        description: "Collect, organize, and analyze structured feedback to improve your clinic's services.",
        icon: MessageSquare,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Google Profile Integration",
        description: "Seamlessly link 4-5 star reviews directly to your Google Business Profile to boost your public rating.",
        icon: MapPin,
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
                        How Our System <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Works.</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        A complete ecosystem to grow your reputation and manage patient feedback.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
