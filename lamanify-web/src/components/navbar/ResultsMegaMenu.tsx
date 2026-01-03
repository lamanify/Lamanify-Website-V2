import React from 'react';
import {
    FileText,
    Award,
    Calculator,
    ArrowRight,
    TrendingUp
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface ResultItem {
    icon: React.ElementType;
    title: string;
    description: string;
    href: string;
}

const results: ResultItem[] = [
    {
        icon: FileText,
        title: 'Case Studies',
        description: 'Detailed breakdowns of how we solved clinic growth problems.',
        href: '/results/case-studies'
    },
    {
        icon: Award,
        title: 'Client Roster',
        description: 'The clinics we partner with and the impact we have made.',
        href: '/results/client-roster'
    },
    {
        icon: Calculator,
        title: 'ROI Calculator',
        description: 'Calculate your potential revenue growth with our system.',
        href: '/results/roi-calculator'
    },
];

export default function ResultsMegaMenu({ className }: { className?: string }) {
    return (
        <div className={cn("w-[500px] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden p-6", className)}>
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Our Results</h4>
                    <p className="text-sm text-slate-500">Real data, real growth, real impact.</p>
                </div>
                <div className="bg-brand/10 p-2 rounded-full">
                    <TrendingUp className="w-5 h-5 text-brand" />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                {results.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                        <div className="mt-1">
                            <item.icon className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" />
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-900 text-sm group-hover:text-brand transition-colors">
                                {item.title}
                            </h5>
                            <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-slate-600 text-xs font-medium">Ready for these results?</span>
                <a href="/contact" className="text-brand font-semibold text-xs flex items-center gap-2 hover:underline">
                    Get a Quote <ArrowRight className="w-3 h-3" />
                </a>
            </div>
        </div>
    );
}
