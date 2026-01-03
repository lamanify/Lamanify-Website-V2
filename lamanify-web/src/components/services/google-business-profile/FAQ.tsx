
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "How soon will I see results after GBP optimization?",
        answer: "Most clinics see profile improvements and more Google Maps actions within 30–90 days. Timelines depend on your clinic's current reputation, competition, and local search factors."
    },
    {
        question: "Can you guarantee that my clinic will be #1 on Google Maps?",
        answer: "No agency can guarantee a #1 ranking due to Google's ever-changing algorithms. Our service is designed to maximize your visibility and calls, but results will vary based on location and competition."
    },
    {
        question: "What do I need to provide to get started?",
        answer: "We'll need your clinic's official details, preferred contact info, a brief list of services, operating hours, and (if available) recent clinic photos. For new profiles, you'll also assist with verification."
    },
    {
        question: "Is this safe and compliant for Malaysian clinics?",
        answer: "Yes. We strictly follow all Malaysian healthcare advertising regulations and Google guidelines. You maintain control and approval of all profile info."
    },
    {
        question: "Do you manage reviews and respond to patient feedback too?",
        answer: "Yes, our Attract and Lead packages include review strategy, personalized reply templates, and hands-on response management to boost your reputation."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-50">
            <div className="fade-up container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Frequently Asked <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Questions.</span>
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
