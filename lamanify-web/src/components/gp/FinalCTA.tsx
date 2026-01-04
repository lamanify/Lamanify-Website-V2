import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e9204f]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                    Ready to become the <br />
                    <span className="text-[#e9204f]">#1 Clinic in your area?</span>
                </h2>
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                    Stop waiting for walk-ins. Start driving predictable patient volume today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button variant="primary" className="h-14 px-10 text-lg rounded-full shadow-2xl shadow-[#e9204f]/30 hover:shadow-[#e9204f]/50 transition-all bg-[#e9204f] hover:bg-[#d11a45] border-none text-white">
                        Claim Your Free Local SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
                <p className="mt-6 text-sm text-slate-500">
                    We will analyze your current Google Map ranking and show you exactly where you are losing patients.
                </p>
            </div>
        </section>
    );
}
