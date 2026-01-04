import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '../ui/Button';

export const FinalCTA = () => {
    return (
        <section className="py-24 bg-blue-600 relative overflow-hidden text-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600 to-blue-800" />

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                    Is Your Practice Ready for <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                        20+ New Patients Next Month?
                    </span>
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        className="h-14 px-8 bg-white text-blue-700 hover:bg-slate-50 text-base shadow-2xl shadow-blue-900/20"
                        onClick={() => window.location.href = '/contact'}
                    >
                        Yes, Audit My Practice Strategy <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>

                    <Button
                        variant="ghost"
                        className="h-14 px-8 text-white border-2 border-white/20 hover:bg-white/10 text-base"
                        onClick={() => window.location.href = '#case-studies'}
                    >
                        <FileText className="mr-2 w-5 h-5" />
                        View Our Dental Case Studies
                    </Button>
                </div>
            </div>
        </section>
    );
};
