import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from 'usehooks-ts'; // Or custom hook if not available, will use useEffect
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import { Button } from '../ui/Button';

const caseStudies = [
    {
        id: 1,
        client: "Klinik Aafiyah",
        type: "General Practice & Minor Surgery",
        challenge: "High reliance on walk-ins; low visibility for high-margin procedures.",
        strategy: "Implemented \"Local Dominance\" SEO and hyper-local Google Ads for specific treatments.",
        results: [
            { label: "New Patient Bookings", value: "+40%", sub: "Month over Month" },
            { label: "Cost Per Lead", value: "-25%", sub: "Reduction" },
            { label: "Ranking", value: "#1", sub: "For \"Klinik 24 Jam\"" }
        ],
        link: "#"
    },
    {
        id: 2,
        client: "Dr. Rose Aesthetics",
        type: "New Branch Opening",
        challenge: "Zero digital footprint; needed to fill the calendar for a Grand Opening.",
        strategy: "\"Pre-Launch\" Social Media blitz + High-Intent Google Search Ads.",
        results: [
            { label: "Leads Generated", value: "300+", sub: "In 30 Days" },
            { label: "Cost Per Lead", value: "RM 18", sub: "Average CPL" },
            { label: "Opening Week", value: "Full", sub: "Bookings" }
        ],
        link: "#"
    }
];

export const ResultsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    return (
        <section className="py-20 bg-slate-50 overflow-hidden" id="results">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Real Growth. <span className="text-brand">Verified Data.</span>
                    </h2>
                    <p className="text-xl text-slate-600">
                        We don't hide behind "brand awareness." We measure our success by your patient volume and revenue growth.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/50">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid md:grid-cols-2"
                            >
                                {/* Left: Content */}
                                <div className="p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
                                    <div className="mb-8">
                                        <div className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-4">
                                            Case Study
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{caseStudies[currentIndex].client}</h3>
                                        <p className="text-slate-500 font-medium mb-6">{caseStudies[currentIndex].type}</p>

                                        <div className="space-y-4 mb-8">
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">The Challenge</h4>
                                                <p className="text-slate-600 text-sm leading-relaxed">{caseStudies[currentIndex].challenge}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">The Strategy</h4>
                                                <p className="text-slate-600 text-sm leading-relaxed">{caseStudies[currentIndex].strategy}</p>
                                            </div>
                                        </div>

                                        <a href={caseStudies[currentIndex].link} className="inline-flex items-center font-bold text-brand hover:text-brand-dark transition-colors items-center gap-2 group">
                                            Read The Full Case Study
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>

                                {/* Right: Stats */}
                                <div className="p-8 md:p-12 bg-slate-50/50 flex flex-col justify-center">
                                    <div className="space-y-6">
                                        {caseStudies[currentIndex].results.map((result, idx) => (
                                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-brand/30 transition-colors">
                                                <div>
                                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{result.sub}</p>
                                                    <p className="text-slate-900 font-medium text-sm">{result.label}</p>
                                                </div>
                                                <div className="text-3xl md:text-4xl font-black text-brand group-hover:scale-110 transition-transform origin-right">
                                                    {result.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center mt-8 gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand hover:border-brand transition-all shadow-sm hover:shadow-md"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand hover:border-brand transition-all shadow-sm hover:shadow-md"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
