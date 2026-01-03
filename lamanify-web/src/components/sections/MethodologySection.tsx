
import { Check, Search, MousePointer2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const stages = [
    {
        id: "01",
        label: "THE DRIVER",
        title: "High-Intent Acquisition.",
        description: "We don't chase traffic; we capture demand. By leveraging deep search data, we position your clinic in front of patients actively seeking specific treatments. We intercept the market intent and direct it to you.",
        bullets: ["Competitor Interception Strategy", "Intent-Based Keyword Dominance"],
        visual: "search"
    },
    {
        id: "02",
        label: "THE ENGINE",
        title: "Conversion Infrastructure.",
        description: "Traffic is wasted on a generic website. We deploy a high-performance, MOH-compliant digital infrastructure engineered to build clinical authority and convert visitors into booked consultations instantly.",
        bullets: ["Medical-Grade Compliance (KKLIU)", "Mobile-First Patient Experience"],
        visual: "mobile"
    },
    {
        id: "03",
        label: "THE CLOSER",
        title: "Pipeline Acceleration.",
        description: "Eliminate the operational chaos of missed inquiries. Our automated retention system acts as your 24/7 digital intake coordinator, ensuring every lead is nurtured until they are sitting in your waiting room.",
        bullets: ["Automated Patient Recall", "Full-Funnel Revenue Attribution"],
        visual: "notification"
    }
];

export const MethodologySection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        The Lamanify Growth <span className="text-brand block mt-2">Methodology.</span>
                    </h2>
                    <p className="text-xl text-slate-600">
                        We deploy a proven, 3-stage acquisition framework designed to connect high-value patients with Malaysia's top providers.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Center Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand/20 -translate-x-1/2 hidden lg:block" />

                    <div className="space-y-24">
                        {stages.map((stage, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={stage.id}
                                    className={cn(
                                        "fade-up flex flex-col gap-12 items-center relative",
                                        "lg:flex-row lg:gap-0"
                                    )}
                                >
                                    {/* Center Dot for Desktop */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-brand rounded-full z-10 hidden lg:block shadow-sm" />

                                    {/* Content Side */}
                                    <div className={cn(
                                        "w-full lg:w-1/2 px-4 lg:px-12",
                                        isEven ? "lg:text-right lg:order-1" : "lg:text-left lg:order-2"
                                    )}>
                                        <div className={cn(
                                            "inline-flex items-center rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-bold tracking-wider text-brand mb-6 uppercase",
                                            isEven ? "lg:ml-auto" : "lg:mr-auto"
                                        )}>
                                            <span className="mr-2">Stage {stage.id}: {stage.label}</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-4">{stage.title}</h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed">
                                            {stage.description}
                                        </p>
                                        <ul className={cn(
                                            "space-y-2 text-sm font-medium text-slate-700",
                                            isEven ? "lg:flex lg:flex-col lg:items-end" : ""
                                        )}>
                                            {stage.bullets.map((bullet, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    {!isEven && <Check className="w-4 h-4 text-brand" />}
                                                    {bullet}
                                                    {isEven && <Check className="w-4 h-4 text-brand" />}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Visual Side */}
                                    <div className={cn(
                                        "w-full lg:w-1/2 px-4 lg:px-12 flex justify-center",
                                        isEven ? "lg:order-2" : "lg:order-1"
                                    )}>
                                        <div className="relative w-full max-w-md">
                                            {/* Render specific visual based on stage */}
                                            {stage.visual === 'search' && (
                                                <div className="bg-white rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-2 transform transition-transform hover:scale-105 duration-500">
                                                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
                                                        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-4 py-3 shadow-sm mb-4">
                                                            <div className="bg-blue-100 p-1.5 rounded-full">
                                                                <Search className="w-4 h-4 text-blue-600" />
                                                            </div>
                                                            <div className="h-4 w-48 bg-slate-100 rounded-full" />
                                                        </div>
                                                        <div className="space-y-3 px-2">
                                                            <div className="h-3 w-3/4 bg-blue-100 rounded full" />
                                                            <div className="h-2 w-full bg-slate-100 rounded full" />
                                                            <div className="h-2 w-5/6 bg-slate-100 rounded full" />
                                                        </div>
                                                        <MousePointer2 className="absolute bottom-8 right-8 w-6 h-6 text-slate-900 fill-slate-900 -rotate-12 drop-shadow-md" />
                                                    </div>
                                                </div>
                                            )}

                                            {stage.visual === 'mobile' && (
                                                <div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl w-[260px] mx-auto border-4 border-slate-800">
                                                    <div className="bg-slate-50 rounded-[2rem] overflow-hidden h-[400px] relative border border-slate-200 flex flex-col items-center pt-8">
                                                        <div className="w-32 h-4 bg-slate-200 rounded-md mb-8" />
                                                        <div className="w-4/5 h-12 bg-white border border-slate-100 rounded-xl shadow-sm mb-3" />
                                                        <div className="w-4/5 h-12 bg-brand rounded-xl shadow-lg shadow-brand/30 flex items-center justify-center text-white text-sm font-bold mb-6">
                                                            Book Appointment
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-2 w-4/5">
                                                            <div className="h-20 bg-white rounded-lg border border-slate-100" />
                                                            <div className="h-20 bg-white rounded-lg border border-slate-100" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {stage.visual === 'notification' && (
                                                <div className="flex items-center justify-center h-64 w-full">
                                                    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-4 flex items-center gap-4 w-full max-w-sm relative">
                                                        <div className="h-12 w-12 rounded-full bg-slate-100 flex-shrink-0" />
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-bold text-slate-900">Appointment Confirmed</p>
                                                            <p className="text-xs text-slate-500 truncate">Sarah L. (Tomorrow, 10:00 AM)</p>
                                                        </div>
                                                        <div className="absolute -top-2 -right-2 bg-green-500 text-white p-1 rounded-full shadow-lg">
                                                            <Check className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/2 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/5 via-transparent to-transparent opacity-50 pointer-events-none" />
        </section>
    );
};
