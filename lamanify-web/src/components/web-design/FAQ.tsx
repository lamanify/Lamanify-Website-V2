
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
        question: "How does contact form works?",
        answer: "When a user submit an entry through your website form, one notification with the entry details will go to you as an admin, and another similar email will go to the user whom submitted the form."
    },
    {
        question: "What Content Management System (CMS) are you using?",
        answer: "We are using Wordpress as the CMS to provide an easy learning curve for everyone to learn from it. Those who don't know what a CMS is, CMS is a way to manage all your content published to the frontend of your web store."
    },
    {
        question: "What factors should I consider when choosing a package?",
        answer: "Consider your clinic's goals, budget, and the level of customization you require. Assess the features offered in each package and how they align with your specific needs."
    },
    {
        question: "What if I am unsure about the features I need?",
        answer: "It's common to be unsure about the features you require. We recommend starting with an evaluation of your clinic's website goals and functionality needs."
    },
    {
        question: "Can I customize the packages to fit my clinic's specific requirements?",
        answer: "Yes, customization options are available for certain packages. We offer tailored solutions to meet your clinic's unique needs. Contact our team to discuss your requirements."
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
