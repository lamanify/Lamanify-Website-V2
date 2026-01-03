
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "Can SEO really help my clinic attract more patients?",
        answer: "Yes! SEO makes your website visible when locals search for clinics or treatments. More visibility means more patient inquiries and bookings over time."
    },
    {
        question: "How long does it take to see results?",
        answer: "Most clinics see improvements in Google rankings and traffic within 30–60 days. Significant patient growth often starts between 3 and 6 months—with regular momentum after."
    },
    {
        question: "Isn't SEO just for big hospitals or chains?",
        answer: "No—SEO is essential for solo GP clinics, dental offices, and specialists too. Any clinic competing for local patients online will benefit from better visibility."
    },
    {
        question: "What makes Lamanify's SEO different from other agencies?",
        answer: "We specialize in healthcare only—no generic strategies. Every package is built for local clinics and includes KKLIU compliance, AI-powered optimization, and transparent reporting."
    },
    {
        question: "Is it better to do Google Ads instead?",
        answer: "Both work well together. SEO builds long-term patient growth and trust (organic, unpaid traffic); Ads can provide instant bookings. Our team guides you to the best mix for your goals."
    },
    {
        question: "Will I have to create blog posts or content myself?",
        answer: "No! Our package handles all content creation—treatment pages, FAQs, blog articles, and more. We make your clinic the authority, with zero extra work for you."
    },
    {
        question: "What if my clinic's website is outdated?",
        answer: "We'll handle technical fixes, mobile-friendly upgrades, and all necessary changes. You don't need to be tech-savvy—we do it all for you."
    },
    {
        question: "Why do I need at least 6 months for SEO?",
        answer: "SEO is a long-term strategy. Google takes time to recognize changes and rank your website. Stopping early means quitting just before the real gains begin. Our 6-month minimum ensures you get lasting improvements."
    },
    {
        question: "Is SEO safe? Will it hurt my reputation or break KKM rules?",
        answer: "Absolutely safe—with Lamanify. Every step follows Malaysian KKM (KKLIU) and Google medical guidelines. If anything gets flagged, we fix it immediately, free of charge."
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
                                <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                                )}
                            </button>
                            <div
                                className={`px-6 text-slate-600 text-sm leading-relaxed transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0 overflow-hidden'}`}
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
