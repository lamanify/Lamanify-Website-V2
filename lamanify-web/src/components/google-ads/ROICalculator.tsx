
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

export function ROICalculator() {
    const [budget, setBudget] = useState(2500);
    const [cpc, setCpc] = useState(3.50);
    const [conversionRate, setConversionRate] = useState(8);
    const [closeRate, setCloseRate] = useState(20);
    const [ltv, setLtv] = useState(1500);

    const [results, setResults] = useState({
        clicks: 0,
        leads: 0,
        sales: 0,
        revenue: 0,
        roi: 0
    });

    useEffect(() => {
        const clicks = budget / cpc;
        const leads = clicks * (conversionRate / 100);
        const sales = leads * (closeRate / 100);
        const revenue = sales * ltv;
        const roi = revenue > 0 ? ((revenue - budget) / budget) * 100 : 0;

        setResults({
            clicks: Math.floor(clicks),
            leads: Math.floor(leads),
            sales: Math.floor(sales),
            revenue: Math.floor(revenue),
            roi: Math.floor(roi)
        });
    }, [budget, cpc, conversionRate, closeRate, ltv]);

    return (
        <section className="py-24 bg-white">
            <div className="fade-up container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Project Your <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">ROI.</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        See the potential impact of a well-optimized Google Ads campaign.
                    </p>
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Inputs */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Ad Spend (RM)</label>
                                <input
                                    type="range"
                                    min="1000"
                                    max="50000"
                                    step="500"
                                    value={budget}
                                    onChange={(e) => setBudget(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand"
                                />
                                <div className="mt-2 flex justify-between text-xs text-slate-500 font-mono">
                                    <span>RM 1,000</span>
                                    <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent font-bold text-base">RM {budget.toLocaleString()}</span>
                                    <span>RM 50,000</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">Avg. CPC (RM)</label>
                                    <input
                                        type="number"
                                        value={cpc}
                                        onChange={(e) => setCpc(Number(e.target.value))}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">Conv. Rate (%)</label>
                                    <input
                                        type="number"
                                        value={conversionRate}
                                        onChange={(e) => setConversionRate(Number(e.target.value))}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">Close Rate (%)</label>
                                    <input
                                        type="number"
                                        value={closeRate}
                                        onChange={(e) => setCloseRate(Number(e.target.value))}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">LTV (RM)</label>
                                    <input
                                        type="number"
                                        value={ltv}
                                        onChange={(e) => setLtv(Number(e.target.value))}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full -mr-16 -mt-16"></div>

                            <div className="space-y-6 relative z-10">
                                <div>
                                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Projected Revenue</div>
                                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent mt-2 inline-block">
                                        RM {results.revenue.toLocaleString()}
                                    </div>
                                    <div className="text-sm text-green-600 mt-1 font-medium flex items-center">
                                        {results.roi}% ROI
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                                    <div>
                                        <div className="text-xs text-slate-400">Potential Leads</div>
                                        <div className="text-xl font-bold text-slate-900">{results.leads}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400">Projected Sales</div>
                                        <div className="text-xl font-bold text-slate-900">{results.sales}</div>
                                    </div>
                                </div>

                                <Button className="w-full mt-4">Start Scaling Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
