
import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Star, MessageCircle, ShieldCheck } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-40 -left-64 w-96 h-96 bg-brand/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-20 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 border border-slate-200 backdrop-blur-sm mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
                    <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Google Review Management</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
                    <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Protect Your Reputation</span> & Turn Patients into Advocates.
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
                    Don’t let one negative review ruin your clinic’s reputation. Stop relying on unethical review buying. Our system protects your rating and prevents bad reviews.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <Button variant="primary" className="h-12 px-8 text-lg rounded-full shadow-xl shadow-brand/20 hover:shadow-brand/40 transition-all">
                        Get Your Proposal <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>

                {/* Dashboard Mockup - Review Stats */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 md:p-4 rotate-x-12 transform-gpu perspective-1000">
                        {/* Mockup Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6 px-4">
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="text-xs font-medium text-slate-400 uppercase tracking-widest">Reputation Monitor</div>
                        </div>

                        {/* Stats Area */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                            {/* Stat 1 */}
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="text-sm text-slate-500">Average Rating</div>
                                <div className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                                    4.9 <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                                </div>
                                <div className="flex items-center text-emerald-500 text-sm font-medium">
                                    Top 1% in Region
                                </div>
                            </div>
                            {/* Stat 2 */}
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="text-sm text-slate-500">Total Reviews</div>
                                <div className="text-3xl font-bold text-slate-900">1,248</div>
                                <div className="flex items-center text-emerald-500 text-sm font-medium">
                                    <MessageCircle className="h-4 w-4 mr-1" /> +12 this week
                                </div>
                            </div>
                            {/* Stat 3 */}
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="text-sm text-slate-500">Negative Intercepted</div>
                                <div className="text-3xl font-bold text-slate-900">14</div>
                                <div className="flex items-center text-emerald-500 text-sm font-medium">
                                    <ShieldCheck className="h-4 w-4 mr-1" /> Protected
                                </div>
                            </div>
                        </div>

                        {/* Recent Reviews List Simulation */}
                        <div className="mt-8 px-4 pb-4">
                            <div className="space-y-4">
                                {[
                                    { name: "Sarah Jenkins", rating: 5, text: "The staff was incredibly helpful and professional. Highly recommended!", time: "2 hours ago" },
                                    { name: "Michael Tan", rating: 5, text: "Best clinic experience I've had. Fast and efficient.", time: "5 hours ago" },
                                    { name: "Priya M.", rating: 5, text: "Doctor was very attentive. Will come back.", time: "1 day ago" }
                                ].map((review, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="h-10 w-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-sm">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div className="flex-1 text-left">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-semibold text-slate-900">{review.name}</h4>
                                                <span className="text-xs text-slate-400">{review.time}</span>
                                            </div>
                                            <div className="flex text-yellow-500 my-1">
                                                {[...Array(5)].map((_, j) => (
                                                    <Star key={j} className="h-3 w-3 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-sm text-slate-600">{review.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Glow effect under card */}
                    <div className="absolute -inset-4 bg-brand/5 blur-3xl -z-10 rounded-[3rem]" />
                </div>

            </div>
        </section>
    );
}
