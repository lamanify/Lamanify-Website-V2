import React from 'react';
import {
    Stethoscope,
    Sparkles,
    User,
    Heart,
    Activity,
    Building2,
    ArrowRight
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface Industry {
    icon: React.ElementType;
    title: string;
    description: string;
    href: string;
}

const industries: Industry[] = [
    {
        icon: Stethoscope,
        title: 'Dentist',
        description: 'General, Ortho, and Cosmetic dentistry growth strategies.',
        href: '/industry/dentist'
    },
    {
        icon: User,
        title: 'GP',
        description: 'Volume-based growth and local SEO dominance.',
        href: '/industry/gp'
    },
    {
        icon: Sparkles,
        title: 'Aesthetic',
        description: 'High-ticket lead generation with a visual focus.',
        href: '/industry/aesthetic'
    },
    {
        icon: Heart,
        title: 'Wellness & Spa',
        description: 'Experience & retention strategies for luxury wellness.',
        href: '/industry/wellness-spa'
    },
    {
        icon: Activity,
        title: 'Physiotherapy',
        description: 'Sell recovery plans, not just one-off sessions.',
        href: '/industry/physiotherapy'
    },
    {
        icon: Building2,
        title: 'Specialist/consultant',
        description: 'Prestige-focused marketing for expert consultants.',
        href: '/industry/specialist-consultant'
    },
];

export default function IndustriesMegaMenu({ className }: { className?: string }) {
    return (
        <div className={cn("w-[600px] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden p-6", className)}>
            <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Who We Serve</h4>
                <p className="text-sm text-slate-500">Tailored marketing strategies for your specific medical field.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {industries.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                        <div className="mt-1">
                            <item.icon className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" />
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-900 text-sm group-hover:text-brand transition-colors">
                                {item.title}
                            </h5>
                            <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-slate-600 text-xs font-medium">Don't see your specialty?</span>
                <a href="/contact" className="text-brand font-semibold text-xs flex items-center gap-2 hover:underline">
                    Talk to our specialists <ArrowRight className="w-3 h-3" />
                </a>
            </div>
        </div>
    );
}
