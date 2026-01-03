import { useState } from 'react';
import { Button } from './ui/Button';

export default function PricingCalculator() {
    const [pages, setPages] = useState(1);
    const [features, setFeatures] = useState<string[]>([]);

    const basePrice = 500;
    const pricePerPage = 100;
    const featurePrice = 200;

    const toggleFeature = (feature: string) => {
        if (features.includes(feature)) {
            setFeatures(features.filter(f => f !== feature));
        } else {
            setFeatures([...features, feature]);
        }
    };

    const totalPrice = basePrice + (pages * pricePerPage) + (features.length * featurePrice);

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Estimate Your Project</h3>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Number of Pages: {pages}
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="20"
                        value={pages}
                        onChange={(e) => setPages(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Add-ons
                    </label>
                    <div className="space-y-2">
                        {['SEO Optimization', 'CMS Integration', 'Analytics Setup'].map((feature) => (
                            <label key={feature} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-slate-50 rounded-lg transition-colors">
                                <input
                                    type="checkbox"
                                    checked={features.includes(feature)}
                                    onChange={() => toggleFeature(feature)}
                                    className="h-4 w-4 text-brand border-slate-300 rounded focus:ring-brand"
                                />
                                <span className="text-slate-600">{feature}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-slate-600">Estimated Cost</span>
                        <span className="text-3xl font-bold text-brand">${totalPrice}</span>
                    </div>
                    <Button className="w-full">Get Custom Quote</Button>
                </div>
            </div>
        </div>
    );
}
