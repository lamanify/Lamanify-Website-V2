
import React from 'react';

export function OneRatioRule() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        The <span className="text-brand">"One Ratio"</span> Rule.
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Your main website is a maze of information. While it's great for performance, it's terrible for conversion.
                    </p>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
                        <span className="font-bold">Campaign Page focus on One Destination.</span>
                    </p>
                    <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-sm">
                        Research shows that pages with a 1:1 attention ratio (one link for one goal) convert significantly higher than pages with many links.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">The Maze</h3>
                            <p className="text-slate-600 text-sm">Typical Website: Multiple components that distract from the main message.</p>
                            <div className="mt-4 aspect-video bg-white rounded-lg border border-slate-200 p-4 space-y-2">
                                <div className="h-4 w-full bg-slate-100 rounded-full"></div>
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="h-3 w-full bg-slate-100 rounded-full"></div>
                                    <div className="h-3 w-full bg-slate-100 rounded-full"></div>
                                    <div className="h-3 w-full bg-slate-100 rounded-full"></div>
                                    <div className="h-3 w-full bg-slate-100 rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="aspect-square bg-slate-50 rounded-lg"></div>
                                    <div className="aspect-square bg-slate-50 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-brand/5 rounded-2xl p-6 border border-brand/20 shadow-xl shadow-brand/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3">
                                <div className="bg-brand text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">80% More Conversions</div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">The Campaign Page</h3>
                            <p className="text-slate-600 text-sm">Focus on one single goal. No distractions, just conversion.</p>
                            <div className="mt-4 aspect-video bg-white rounded-lg border border-brand/30 p-4 flex flex-col items-center justify-center space-y-4">
                                <div className="h-4 w-3/4 bg-slate-100 rounded-full"></div>
                                <div className="h-4 w-1/2 bg-slate-100 rounded-full"></div>
                                <div className="h-4 w-2/3 bg-slate-100 rounded-full"></div>
                                <div className="w-32 h-10 bg-brand rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
