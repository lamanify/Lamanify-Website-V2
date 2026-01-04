import React from 'react';
import { ShieldCheck, Scale, FileCheck2 } from 'lucide-react';

export function Compliance() {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                        Growth Without The Risk.
                    </h2>
                    <p className="text-lg text-slate-600">
                        Marketing a medical practice requires precision. One wrong word can lead to fines. We navigate the complexities of KKM/MOH regulations for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                        <div className="p-3 bg-green-50 rounded-full mb-4">
                            <Scale className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">We know the Acts</h3>
                        <p className="text-sm text-slate-600">
                            Our copywriters are trained on the Medicines (Advertisement and Sale) Act 1956.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                        <div className="p-3 bg-green-50 rounded-full mb-4">
                            <ShieldCheck className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">We know the Limits</h3>
                        <p className="text-sm text-slate-600">
                            We know how to frame "Before & After" and "Testimonials" ethically to build authority without breaking rules.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                        <div className="p-3 bg-green-50 rounded-full mb-4">
                            <FileCheck2 className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Zero "Over-Claiming"</h3>
                        <p className="text-sm text-slate-600">
                            We market your <em>services</em>, not guaranteed cures. Compliance is our top priority.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
