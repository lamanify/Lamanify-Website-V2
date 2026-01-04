import React from 'react';
import {
    Cpu,
    ShieldCheck,
    BarChart3,
    ArrowRight
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface SystemModule {
    icon: React.ElementType;
    title: string;
    description: string;
    href: string;
}

const modules: SystemModule[] = [
    {
        icon: Cpu,
        title: 'The GrowthBooster Framework',
        description: 'Our core methodology explaining the "Recipe" for clinic success.',
        href: '/growthbooster-framework'
    },
    {
        icon: ShieldCheck,
        title: 'KKLIU Compliance Shield',
        description: 'Expertly navigating MOH guidelines to keep your ads compliant.',
        href: '/kkliu-compliance-shield'
    },
    {
        icon: BarChart3,
        title: 'Analytics & Reporting',
        description: 'Custom dashboards for a real-time "Agency OS" feel.',
        href: '/the-system/analytics'
    },
];

export default function SystemMegaMenu({ className }: { className?: string }) {
    return (
        <div className={cn("w-[500px] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden p-6", className)}>
            <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Proprietary Method</h4>
                <p className="text-sm text-slate-500">The technology and framework that powers your growth.</p>
            </div>

            <div className="flex flex-col gap-2">
                {modules.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                        <div className="mt-1">
                            <item.icon className="w-6 h-6 text-slate-400 group-hover:text-brand group-active:text-brand transition-colors" />
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-900 text-base group-hover:text-brand group-active:text-brand transition-colors">
                                {item.title}
                            </h5>
                            <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-4 pt-6 border-t border-slate-50">
                <a href="/contact" className="group flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-brand/5 transition-colors">
                    <div>
                        <p className="text-sm font-bold text-slate-900">See the system in action</p>
                        <p className="text-xs text-slate-500">Schedule a demo of our dashboard</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </a>
            </div>
        </div>
    );
}
