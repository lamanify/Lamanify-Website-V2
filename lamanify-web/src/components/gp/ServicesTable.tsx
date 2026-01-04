import React from 'react';
import { ChevronRight } from 'lucide-react';

export function ServicesTable() {
    const categories = [
        {
            title: "Screening & Lab",
            items: [
                "Executive Blood Panels",
                "Fomema / Pre-Employment",
                "Dengue/Influenza Tests"
            ]
        },
        {
            title: "Procedures",
            items: [
                "Circumcision (Sunat)",
                "Ear Syringing",
                "Nebulizer & Wound Care"
            ]
        },
        {
            title: "Family Health",
            items: [
                "Antenatal Scans (2D/3D)",
                "Vaccination Schedules",
                "Family Planning"
            ]
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        What We Help You Sell.
                    </h2>
                    <p className="text-slate-600">Focusing on high-margin services to boost profitability.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand font-bold text-sm mb-6">
                                {category.title}
                            </div>
                            <ul className="space-y-4">
                                {category.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <ChevronRight className="h-5 w-5 text-slate-400 mt-0.5" />
                                        <span className="text-lg text-slate-800 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
