import React from 'react';
import { UserX, Building2, SearchX } from 'lucide-react';

export function Problem() {
    const problems = [
        {
            icon: <UserX className="h-6 w-6 text-brand" />,
            title: "The Invisible Expert",
            description: "You've spent decades mastering your craft, yet patients are finding (and choosing) less experienced generalists because they aren't aware of your specialty."
        },
        {
            icon: <Building2 className="h-6 w-6 text-brand" />,
            title: "Referral Reliance",
            description: "Relying 100% on hospital walk-ins or primary care referrals means you don't own your patient flow. Your practice is at the mercy of others' networks."
        },
        {
            icon: <SearchX className="h-6 w-6 text-brand" />,
            title: "The Price Shopper",
            description: "Without a prestige-focused funnel, you attract 'price shoppers' who don't understand the value of your specific expertise, leading to lower conversion for elective procedures."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        High-Level Expertise, <br /><span className="text-brand">Low-Level Visibility?</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Most specialists are trapped in the hospital ecosystem. You don't need "more ads" — you need to establish <strong>Direct-to-Patient Authority</strong>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <div key={index} className="bg-white border border-slate-100 p-8 rounded-3xl hover:border-brand/20 hover:shadow-xl transition-all duration-300 group">
                            <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
