
import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, MessageCircle, Clock, TrendingUp } from 'lucide-react';

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
                    <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">WhatsApp Automation Service</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
                    <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Healthcare WhatsApp Automation</span> Empowered by Advanced AI Chatbot.
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
                    Ease your Team's work and Accelerate Your Clinic’s Patient Bookings with Automated WhatsApp Engagement. Always Instantly Connected. Personalized Patient Conversations. Results You Can See.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <Button variant="primary" className="h-12 px-8 text-lg rounded-full shadow-xl shadow-brand/20 hover:shadow-brand/40 transition-all">
                        Request Strategy Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>

                {/* Dashboard Mockup */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 md:p-4 rotate-x-12 transform-gpu perspective-1000">
                        {/* Mockup Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6 px-4">
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="text-xs font-medium text-slate-400 uppercase tracking-widest">Live Automation Stats</div>
                        </div>

                        {/* Chart Area */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                            {/* Stat 1 */}
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="text-sm text-slate-500">Automated Replies</div>
                                <div className="text-3xl font-bold text-slate-900">24/7</div>
                                <div className="flex items-center text-emerald-500 text-sm font-medium">
                                    <MessageCircle className="h-4 w-4 mr-1" /> Active
                                </div>
                            </div>
                            {/* Stat 2 */}
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="text-sm text-slate-500">Response Time</div>
                                <div className="text-3xl font-bold text-slate-900">Instant</div>
                                <div className="flex items-center text-emerald-500 text-sm font-medium">
                                    <Clock className="h-4 w-4 mr-1" /> &lt; 1s
                                </div>
                            </div>
                            {/* Stat 3 */}
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="text-sm text-slate-500">Bookings Increased</div>
                                <div className="text-3xl font-bold text-slate-900">+35%</div>
                                <div className="flex items-center text-emerald-500 text-sm font-medium">
                                    <TrendingUp className="h-4 w-4 mr-1" /> Growth
                                </div>
                            </div>
                        </div>

                        {/* CSS Bar Chart Simulation */}
                        <div className="mt-8 flex items-end justify-between h-48 sm:h-64 gap-2 sm:gap-4 px-4 pb-4 border-b border-slate-100/50">
                            {[30, 45, 60, 50, 75, 80, 70, 85, 90, 85, 95, 100].map((height, i) => (
                                <div key={i} className="relative w-full h-full flex items-end group">
                                    <div
                                        className="w-full bg-brand/90 rounded-t-lg transition-all duration-1000 ease-out group-hover:bg-brand group-hover:shadow-[0_0_20px_rgba(233,32,79,0.5)]"
                                        style={{ height: `${height}%`, opacity: 0.7 + (i * 0.02) }}
                                    ></div>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        Messages: {height * 10}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Glow effect under card */}
                    <div className="absolute -inset-4 bg-brand/5 blur-3xl -z-10 rounded-[3rem]" />
                </div>

            </div>
        </section>
    );
}
