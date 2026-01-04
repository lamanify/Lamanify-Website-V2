import React from 'react';
import { AlertTriangle, TrendingDown, SearchX, Activity } from 'lucide-react';

export function Problem() {
    const problems = [
        {
            icon: <TrendingDown className="h-6 w-6 text-red-500" />,
            title: "Low Margins",
            description: "Relying on RM30-RM50 consultation fees and panel (TPA) claims with slow payouts."
        },
        {
            icon: <SearchX className="h-6 w-6 text-red-500" />,
            title: "Invisible Online",
            description: "Patients search \"Klinik near me\" but go to your competitor because they have more Google Reviews."
        },
        {
            icon: <Activity className="h-6 w-6 text-red-500" />,
            title: "Unpredictable Volume",
            description: "Some days are overflowing; other days are dead silent. No consistency in cash flow."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Is Your Clinic Stuck on the <br /><span className="text-[#e9204f]">"Consultation Treadmill"?</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Most GPs face the same struggle. You don't need <em>more</em> generic marketing. You need a system that targets <strong>High-Intent Cash Patients</strong>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <div key={index} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:border-red-200 hover:shadow-lg transition-all duration-300 group">
                            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
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
