import React from 'react';
import { ShieldCheck, Scale, FileCheck2 } from 'lucide-react';

export function Compliance() {
    return (
        <section className="py-20 bg-slate-900 text-white border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
                        Compliant Authority. <br /><span className="text-brand">Zero Compromise.</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        Advertising as a Specialist in Malaysia requires absolute adherence to the MMC and Medicines Act. We ensure your prestige is built on a foundation of ethical compliance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-colors">
                        <div className="p-3 bg-brand/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                            <Scale className="h-6 w-6 text-brand" />
                        </div>
                        <h3 className="font-bold text-white mb-2">MMC Specialist Standards</h3>
                        <p className="text-sm text-slate-400">
                            We strictly follow the MMC Code of Professional Conduct for specialist titles and academic descriptors.
                        </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-colors">
                        <div className="p-3 bg-brand/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                            <ShieldCheck className="h-6 w-6 text-brand" />
                        </div>
                        <h3 className="font-bold text-white mb-2">PHFSA Compliance</h3>
                        <p className="text-sm text-slate-400">
                            Our patient acquisition systems are designed to comply with Private Healthcare Facilities and Services Act (PHFSA) guidelines.
                        </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-colors">
                        <div className="p-3 bg-brand/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                            <FileCheck2 className="h-6 w-6 text-brand" />
                        </div>
                        <h3 className="font-bold text-white mb-2">Evidence-Based Copy</h3>
                        <p className="text-sm text-slate-400">
                            We communicate clinical expertise and success rates using evidence-based copy that passes medical audit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
