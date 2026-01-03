
import React from 'react';
import { Target, Search, MessageSquare, Image, Star, ShieldCheck } from 'lucide-react';

const features = [
    {
        title: "Google Maps Visibility Boost",
        description: "Rank higher in local search results when patients search for clinics near them.",
        icon: Target,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Verified, Accurate Information",
        description: "Ensure patients find your correct hours, location, and contact details every time.",
        icon: ShieldCheck,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Service Listing Enhancement",
        description: "Showcase your full range of treatments and services directly on your profile.",
        icon: Search,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Professional Photo Optimization",
        description: "Build trust instantly with high-quality, optimized images of your clinic and team.",
        icon: Image,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Reputation Jumpstart",
        description: "Implementing strategies to generate more authentic, positive patient reviews.",
        icon: Star,
        color: "text-brand",
        bg: "bg-brand/10"
    },
    {
        title: "Answers to Patient Questions",
        description: "Proactively answer common patient queries with a managed Q&A section.",
        icon: MessageSquare,
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
                        Why Optimize Your <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">GBP?</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Turn searches into appointments with a fully optimized profile.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group relative p-8 rounded-3xl border border-slate-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className={`inline-flex items-center justify-center p-3 rounded-2xl ${feature.bg} mb-6 transition-colors group-hover:scale-110 duration-300`}>
                                <feature.icon className={`h-8 w-8 ${feature.color}`} />
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
