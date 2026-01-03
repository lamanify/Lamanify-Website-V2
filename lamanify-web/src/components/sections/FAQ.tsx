
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../lib/utils';

const faqs = [
    {
        question: "How long does it take to see results?",
        answer: "For Google Ads and Landing Pages, you can start seeing patient inquiries within the first 7-14 days. For SEO, it typically takes 3-6 months to see significant organic growth, but our 'quick wins' strategy often shows movement sooner."
    },
    {
        question: "Do you only work with healthcare providers?",
        answer: "Yes. Lamanify is 100% focused on healthcare. This specialization allow us to understand MOH compliance (KKLIU), medical patient psychology, and the specific search terms patients use for various specialities."
    },
    {
        question: "What is your pricing model?",
        answer: "We offer transparent, fixed-price monthly packages with no long-term lock-in contracts. You pay for performance and transparency. Use our pricing calculator to get an instant estimate."
    },
    {
        question: "Are your websites MOH/KKLIU compliant?",
        answer: "Absolutely. We understand the strict regulations governing medical advertising in Malaysia. All our designs and copy are crafted to be compliant while remaining highly persuasive."
    },
    {
        question: "Will I own the website and the ad accounts?",
        answer: "Yes, you have 100% ownership of everything we build. We believe in earning your business every month, not holding your assets hostage."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white" id="faqs">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Common <span className="text-brand">Questions.</span>
                    </h2>
                    <p className="text-xl text-slate-600">
                        Everything you need to know about partnering with Lamanify to grow your practice.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border rounded-2xl transition-all duration-300",
                                openIndex === index ? "border-brand bg-slate-50 shadow-md" : "border-slate-100 hover:border-slate-200"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-brand" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-slate-400" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5">
                                    <p className="text-slate-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
