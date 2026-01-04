import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                            Ready to Build Your <br /> <span className="text-brand">Specialist Legacy?</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                            Stop being the hospital's best-kept secret. Let's build a patient acquisition system that reflects your expertise.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                variant="primary"
                                className="h-16 px-10 text-xl rounded-full bg-brand hover:bg-brand/90 text-white border-none shadow-xl shadow-brand/20"
                                onClick={() => window.location.href = '/contact'}
                            >
                                Book Your Strategy Audit <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                        </div>

                        <p className="mt-8 text-slate-500 text-sm font-medium">
                            Limited to 2 Specialists per sub-specialty per region to ensure dominance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
