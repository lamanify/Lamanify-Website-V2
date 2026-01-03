
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What's the difference between the packages?",
        answer: "The Essential package is perfect for new clinics needing a basic presence (less than 5 pages). The Professional package is for clinics wanting to expand their reach with a larger site (up to 10 pages) and stronger SEO foundation. Platinum is for clinics selling products online (E-commerce)."
    },
    {
        question: "What is included in the Maintenance Fee?",
        answer: "It covers hosting renewal, domain renewal, SSL security, daily backups, virus/malware scanning, and protection against bot attacks. It also includes minor content updates to keep your site fresh."
    },
    {
        question: "How long does it take to complete a website?",
        answer: "Typically, it takes 7-14 days to complete a website, provided that we receive all necessary details and content from you in a timely manner."
    },
    {
        question: "Is there a monthly fee?",
        answer: "All packages come with 1 year FREE maintenance. After the first year, a monthly or annual retainer fee applies to cover hosting, domain, security, and support services to keep your site running smoothly."
    },
    {
        question: "What Content Management System (CMS) do you use?",
        answer: "We use WordPress, the world's most popular CMS. It offers an easy learning curve, robust security, and flexibility for future growth."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-50">
            <div className="fade-up container mx-auto px-4 sm:px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Frequently Asked <span className="text-brand">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-brand shrink-0" />
                                ) : (
                                    <Plus className="h-5 w-5 text-slate-400 shrink-0" />
                                )}
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">
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
