
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "How much budget do I need to start?",
        answer: "We recommend a starting budget of at least RM 1,500 - RM 3,000 to get statistically significant data. This allows us to test different keywords and creatives effectively."
    },
    {
        question: "How long does it take to see results?",
        answer: "Google Ads can generate clicks instantly, but optimizing for conversions typically takes 1-3 months. You should start seeing quality leads within the first few weeks."
    },
    {
        question: "Do you guarantee leads?",
        answer: "While we cannot guarantee a specific number of leads due to market variables, we do guarantee our process and performance assurance. We work until we hit your targets."
    },
    {
        question: "Is there a long-term contract?",
        answer: "No. We operate on a month-to-month basis. We believe our results should be the reason you stay, not a contract."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-50">
            <div className="fade-up container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Common Questions & <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Terms.</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                            <button
                                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-semibold text-slate-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-slate-400" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-slate-400" />
                                )}
                            </button>
                            <div
                                className={`px-6 text-slate-600 text-sm leading-relaxed transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0 overflow-hidden'}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
