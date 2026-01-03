
import React from 'react';
import { Zap, Shield, Smartphone } from 'lucide-react';

export function SpeedSection() {
    const features = [
        {
            icon: <Zap className="h-6 w-6 text-brand" />,
            title: "0.5s Load Time",
            description: "No more heavy page builders. Built with modern tech stack like Astro & React."
        },
        {
            icon: <Smartphone className="h-6 w-6 text-brand" />,
            title: "Unbreakable",
            description: "Serverless technology ensures your landing page never goes down during high traffic."
        },
        {
            icon: <Shield className="h-6 w-6 text-brand" />,
            title: "Pixel Perfect",
            description: "MOH-Compliant designs that maintain your professional brand image across all devices."
        }
    ];

    return (
        <section className="py-24 bg-slate-950 text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                        <span className="text-brand">Speed.</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        For every second a page delays, you lose <span className="text-brand font-bold">RM RM RM!</span>
                        <br />
                        <span className="text-sm italic">Finally, Speed. You deserve better.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-brand/50 transition-colors group">
                            <div className="bg-slate-800 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
