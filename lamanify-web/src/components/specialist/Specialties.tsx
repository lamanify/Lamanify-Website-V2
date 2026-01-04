import React from 'react';
import { Heart, Brain, Baby, Activity, Eye, Zap } from 'lucide-react';

export function Specialties() {
    const specialties = [
        { icon: <Heart className="h-5 w-5" />, name: "Cardiology" },
        { icon: <Zap className="h-5 w-5" />, name: "Orthopaedics" },
        { icon: <Baby className="h-5 w-5" />, name: "Paediatrics" },
        { icon: <Brain className="h-5 w-5" />, name: "Neurology" },
        { icon: <Eye className="h-5 w-5" />, name: "Ophthalmology" },
        { icon: <Activity className="h-5 w-5" />, name: "ENT / ORL" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Specialties We Scale</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">We deploy tailored funnels for highly specialized medical fields, ensuring the right message reaches the right patient.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {specialties.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand/20 hover:shadow-md transition-all group">
                            <div className="p-3 bg-white rounded-xl shadow-sm group-hover:text-brand transition-colors">
                                {item.icon}
                            </div>
                            <span className="font-bold text-slate-900">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
