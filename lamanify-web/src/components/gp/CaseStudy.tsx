import React from 'react';
import { Star } from 'lucide-react';

export function CaseStudy() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-5xl mx-auto bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-700">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-6">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                                From "Quiet Mornings" to <span className="text-[#e9204f]">"Fully Booked."</span>
                            </h2>

                            <div className="space-y-6 text-lg text-slate-300">
                                <div>
                                    <strong className="text-white block mb-1">Challenge:</strong>
                                    New clinic in a residential area, struggling to compete with established rivals.
                                </div>
                                <div>
                                    <strong className="text-white block mb-1">Solution:</strong>
                                    Lamanify "Local Dominance" SEO + Google Ads for Circumcision Packages during school holidays.
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
                                <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">The Result</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Google Maps Ranking</span>
                                        <span className="text-xl font-bold text-green-400">#1</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Circumcision Bookings</span>
                                        <span className="text-xl font-bold text-white">150+ <span className="text-sm font-normal text-slate-500">/mo</span></span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Cash Revenue</span>
                                        <span className="text-xl font-bold text-green-400">300% Increase</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
