
import React from 'react';
import { Target, Shield, Zap } from 'lucide-react';

export function ConversionFeatures() {
    const conversionFeatures = [
        {
            icon: <Target className="h-6 w-6 text-brand" />,
            title: "The Sticky CTA",
            description: "Meticulously tested call-to-action buttons that ensure patients never lose the path to booking."
        },
        {
            icon: <Shield className="h-6 w-6 text-brand" />,
            title: "MOH-Compliant Copy",
            description: "Professional landing page content that complies with MOH regulations while driving patient trust."
        },
        {
            icon: <Zap className="h-6 w-6 text-brand" />,
            title: "Speed Architecture",
            description: "Built on serverless modern infrastructure (ASTRO) that loads in under 1 second."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Engineered for <span className="text-brand">Conversion.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {conversionFeatures.map((feature, index) => (
                        <div key={index} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl transition-all group">
                            <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
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
