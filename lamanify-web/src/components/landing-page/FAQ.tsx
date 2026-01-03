
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
    const faqs = [
        {
            question: "Why can't I just use my current website?",
            answer: "Website are designed for information, while Campaign Pages are designed for conversion. Websites have multiple links and navigation that distract patients, while Campaign Pages have a single focus: getting the patient to book."
        },
        {
            question: "Is it MOH compliant?",
            answer: "Yes, all our designs and copy follow MOH guidelines for healthcare marketing in Malaysia to ensure your practice remains professional and compliant."
        },
        {
            question: "How long does it take to develop?",
            answer: "Typically 7-14 days depending on the package. We prioritize speed without compromising quality."
        },
        {
            question: "Will I own the landing page?",
            answer: "Absolutely. You own the code and the designs. We can host it for you or deploy it to your preferred serverless hosting."
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Common <span className="text-brand">Questions.</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all">
                            <button
                                className="w-full flex items-center justify-between p-6 text-left"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span className="font-bold text-slate-900">{faq.question}</span>
                                {activeIndex === index ? (
                                    <Minus className="h-5 w-5 text-brand" />
                                ) : (
                                    <Plus className="h-5 w-5 text-slate-400" />
                                )}
                            </button>
                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'pb-6 max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
