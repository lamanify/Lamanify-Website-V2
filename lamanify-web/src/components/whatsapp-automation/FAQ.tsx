
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "Does this work with my existing WhatsApp number or Business account?",
        answer: "Yes! Our automation connects directly to your current WhatsApp setup—no need to change numbers or devices."
    },
    {
        question: "What if I miss a patient booking or message?",
        answer: "Our system instantly replies to all inquiries 24/7. If a booking is missed, our support team will resolve it and compensate you fully."
    },
    {
        question: "Is it hard for my staff to use or learn?",
        answer: "No technical skills needed. We onboard your team personally—most clinics are live in under 48 hours."
    },
    {
        question: "Can this reduce my clinic's no-show rates?",
        answer: "Yes! Automated WhatsApp reminders have helped clinics reduce no-shows by up to 25%."
    },
    {
        question: "Is patient data and clinic information secure?",
        answer: "Absolutely. Everything is encrypted, stored only in Malaysia, and never shared externally. Full healthcare data compliance."
    },
    {
        question: "How will this help overwhelmed staff?",
        answer: "80% of routine patient conversations—bookings, FAQs, reminders—are handled by automation, freeing staff for real care."
    },
    {
        question: "What languages are supported?",
        answer: "Our AI chatbot works in English, Malay, Mandarin, and can be custom-trained for your clinic's needs."
    },
    {
        question: "Will patients get the same professional service as humans?",
        answer: "Yes—professional, friendly replies are always delivered. You can customize the tone and info for your clinic."
    },
    {
        question: "What support do I get if something goes wrong?",
        answer: "24/7 WhatsApp support is provided. Any downtime or issue is resolved instantly and at no cost to you."
    },
    {
        question: "How soon will I see results?",
        answer: "Most clinics see more bookings and fewer missed inquiries within the first week. Patient satisfaction and staff productivity improve immediately."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-50">
            <div className="fade-up container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Common Questions & <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Answers.</span>
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
                                className={`px-6 text-slate-600 text-sm leading-relaxed transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100 overflow-y-auto' : 'max-h-0 pb-0 opacity-0 overflow-hidden'}`}
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
