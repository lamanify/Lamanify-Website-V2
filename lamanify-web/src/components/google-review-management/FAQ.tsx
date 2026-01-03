
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What is the Google Review Management System?",
        answer: "It's a platform that helps clinics manage online reviews by filtering negative feedback and encouraging positive reviews on Google."
    },
    {
        question: "How does the system work?",
        answer: "Patients scan a QR code or receive a link to rate their experience. If they rate 4-5 stars, they are redirected to Google Maps to post a public review. If they rate 1-3 stars, they are redirected to a private internal feedback form."
    },
    {
        question: "How does it prevent bad reviews?",
        answer: "By intercepting low ratings (1-3 stars) before they reach Google. This 'gatekeeping' process allows you to address patient concerns privately without damaging your public reputation."
    },
    {
        question: "How can patients leave reviews?",
        answer: "You can invite patients via automatically generated QR codes, SMS links, WhatsApp messages, or email invitations."
    },
    {
        question: "Is it directly linked with my Google Business Profile?",
        answer: "Yes, the system integrates with your Google Business Profile to facilitate the posting of positive reviews directly to your listing."
    },
    {
        question: "What is the cost?",
        answer: "The complete system costs RM 650 per year for 1 clinic branch."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="fade-up container mx-auto px-4 sm:px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Frequently Asked <span className="text-brand">Questions.</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-brand shrink-0" />
                                ) : (
                                    <Plus className="h-5 w-5 text-slate-400 shrink-0" />
                                )}
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100/50 pt-4">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
