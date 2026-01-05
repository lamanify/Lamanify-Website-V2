import React, { useState } from 'react';
import {
    Target,
    Zap,
    RefreshCw,
    Megaphone,
    Search,
    MapPin,
    Layout,
    Filter,
    Star,
    MessageCircle,
    Calendar,
    ArrowRight
} from 'lucide-react';
import { cn } from '../../lib/utils';

type CategoryId = 'driver' | 'engine' | 'closer';

interface Solution {
    icon: React.ElementType;
    title: string;
    description: string;
    href: string;
}

interface Category {
    id: CategoryId;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ElementType;
    color: string;
    solutions: Solution[];
}

const data: Category[] = [
    {
        id: 'driver',
        title: 'The Driver',
        subtitle: 'Patient Acquisition',
        description: 'Capture high-intent traffic.',
        icon: Target,
        color: 'text-red-500', // Example color
        solutions: [
            { icon: Megaphone, title: 'Google Ads Management', description: 'Precision PPC campaigns for immediate bookings.', href: '/service/google-ads' },
            { icon: Search, title: 'Medical SEO', description: 'Rank #1 for procedure-specific keywords.', href: '/service/seo' },
            { icon: MapPin, title: 'Google Business Profile', description: 'Dominate the local map pack results.', href: '/service/google-business-profile' },
        ]
    },
    {
        id: 'engine',
        title: 'The Engine',
        subtitle: 'Digital Infrastructure',
        description: 'Convert visitors to bookings.',
        icon: Zap,
        color: 'text-brand', // Using brand color if available, else standard
        solutions: [
            { icon: Layout, title: 'Medical Website Design', description: 'High-converting medical website design.', href: '/service/web-design' },
            { icon: Filter, title: 'Landing Page Optimization', description: 'Optimized funnels for higher conversion rates.', href: '/service/landing-page' },
            { icon: Star, title: 'Google Review Management', description: "Protect your clinic's reputation.", href: '/service/google-review-management' },
        ]
    },
    {
        id: 'closer',
        title: 'The Closer',
        subtitle: 'Retention & Automation',
        description: 'Automate patient intake.',
        icon: RefreshCw,
        color: 'text-blue-500',
        solutions: [
            { icon: MessageCircle, title: 'WhatsApp Automation', description: 'Automated patient communication & follow-ups.', href: '/service/whatsapp-automation' },
            { icon: Calendar, title: 'Appointment System', description: 'The Booking Engine That Never Sleeps.', href: '#' },
        ]
    }
];

export default function SolutionsMegaMenu({ className }: { className?: string }) {
    const [activeCategory, setActiveCategory] = useState<CategoryId>('driver');

    const activeData = data.find(d => d.id === activeCategory) || data[0];

    return (
        <div className={cn("w-[900px] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden", className)}>
            <div className="flex h-[400px]">
                {/* Left Sidebar */}
                <div className="w-1/3 bg-slate-50 p-4 space-y-2">
                    {data.map((category) => (
                        <div
                            key={category.id}
                            onMouseEnter={() => setActiveCategory(category.id)}
                            className={cn(
                                "p-4 rounded-xl cursor-pointer transition-all duration-200 group",
                                activeCategory === category.id
                                    ? "bg-white shadow-md ring-1 ring-slate-200/50"
                                    : "hover:bg-slate-100"
                            )}
                        >
                            <div className="flex gap-4">
                                <category.icon
                                    className={cn(
                                        "w-6 h-6 mt-1",
                                        activeCategory === category.id ? "text-brand" : "text-slate-400 group-hover:text-brand"
                                    )}
                                />
                                <div>
                                    <h3 className={cn(
                                        "font-bold text-base",
                                        activeCategory === category.id ? "text-slate-900" : "text-slate-600"
                                    )}>
                                        {category.title}
                                    </h3>
                                    <p className="text-sm font-medium text-slate-900 mb-1">{category.subtitle}</p>
                                    <p className="text-xs text-slate-500 leading-snug">{category.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Content */}
                <div className="w-2/3 p-8 bg-white">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
                        SOLUTIONS FOR {activeData.subtitle.split(' ')[1]?.toUpperCase() || 'GROWTH'}
                    </h4>

                    <div className="grid grid-cols-2 gap-8">
                        {activeData.solutions.map((solution, idx) => (
                            <a key={idx} href={solution.href} className="flex gap-4 group">
                                <solution.icon className="w-6 h-6 text-slate-400 group-hover:text-brand group-active:text-brand mt-1 transition-colors" />
                                <div>
                                    <h5 className="font-semibold text-slate-900 text-lg group-hover:text-brand group-active:text-brand transition-colors">
                                        {solution.title}
                                    </h5>
                                    <p className="text-slate-500 text-sm mt-1">
                                        {solution.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center justify-between px-8">
                <span className="text-slate-600 text-sm font-medium">Not sure which stage you need?</span>
                <a href="/contact" className="text-brand font-semibold text-sm flex items-center gap-2 hover:underline">
                    Get a Free Growth Audit <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}
