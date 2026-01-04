import React from 'react';
import {
    Users,
    TrendingUp,
    Rocket,
    UserPlus,
    ArrowRight
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface SolutionGoal {
    icon: React.ElementType;
    title: string;
    description: string;
    href: string;
}

const goals: SolutionGoal[] = [
    {
        icon: Users,
        title: 'New Patient Acquisition',
        description: 'Focus on volume and filling calendars with high-intent patients.',
        href: '/solutions/new-patient-acquisition'
    },
    {
        icon: TrendingUp,
        title: 'Multi-Location Scaling',
        description: 'Strategic growth for chains opening their 2nd, 3rd, or 10th branch.',
        href: '/solutions/multi-location-scaling'
    },
    {
        icon: Rocket,
        title: 'Clinic Launch',
        description: 'A "Go-to-market" package for new clinics to hit the ground running.',
        href: '/solutions/clinic-launch'
    },
    {
        icon: UserPlus,
        title: 'Patient Reactivation',
        description: 'Strategies to bring old patients back using CRM and Email marketing.',
        href: '/solutions/patient-reactivation'
    },
];

export default function SolutionsMegaMenuNew({ className }: { className?: string }) {
    return (
        <div className={cn("w-[600px] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden p-6", className)}>
            <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Business Goals</h4>
                <p className="text-sm text-slate-500">Solve your clinic's biggest challenges with targeted solutions.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {goals.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100"
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
                <span className="text-slate-600 text-xs font-medium">Want a custom growth plan?</span>
                <a href="/contact" className="text-brand font-semibold text-xs flex items-center gap-2 hover:underline">
                    Book a Strategy Session <ArrowRight className="w-3 h-3" />
                </a>
            </div>
        </div>
    );
}
