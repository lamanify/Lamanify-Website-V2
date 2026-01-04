import React from 'react';
import {
    BookOpen,
    Video,
    FileSearch,
    ArrowRight,
    Search
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface ResourceItem {
    icon: React.ElementType;
    title: string;
    description: string;
    href: string;
}

const resources: ResourceItem[] = [
    {
        icon: BookOpen,
        title: 'Our Blog',
        description: 'Expert insights on clinic marketing in Malaysia.',
        href: '/blog'
    },
    {
        icon: Video,
        title: 'Webinars & Whitepapers',
        description: 'In-depth guides like "The 2026 Guide to KKLIU".',
        href: '/resources/library'
    },
    {
        icon: FileSearch,
        title: 'Medical Glossary',
        description: 'Digital marketing terms explained for healthcare professionals.',
        href: '/resources/glossary'
    },
];

export default function ResourcesMegaMenu({ className }: { className?: string }) {
    return (
        <div className={cn("w-[500px] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden", className)}>
            <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Knowledge Hub</h4>
                        <p className="text-sm text-slate-500">Stay ahead with the latest industry insights.</p>
                    </div>
                    <Search className="w-5 h-5 text-slate-300" />
                </div>

                <div className="grid grid-cols-1 gap-1">
                    {resources.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all group"
                        >
                            <div className="mt-1">
                                <item.icon className="w-5 h-5 text-slate-400 group-hover:text-brand group-active:text-brand transition-colors" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-slate-900 text-sm group-hover:text-brand group-active:text-brand transition-colors">
                                    {item.title}
                                </h5>
                                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="bg-slate-50 p-4 border-t border-slate-100">
                <a href="/blog" className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-900 hover:text-brand active:text-brand transition-colors">
                    Browse all resources <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}
