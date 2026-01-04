import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';


export const FAQ = () => {
    const questions = [
        {
            q: "My area is very saturated with dentists. Can this still work?",
            a: "Saturation means there is demand. We use 'Long-tail' keywords to find the specific patients your competitors are ignoring. Instead of fighting for 'Dentist KL', we capture 'Invisalign for Teens Mont Kiara'."
        },
        {
            q: "How fast will I see results?",
            a: "Paid Ads (Google) generate calls in 48 hours. SEO takes 3-6 months. We recommend a hybrid approach for immediate cash flow while building long-term organic dominance."
        },
        {
            q: "Do you handle social media content?",
            a: "We focus on performance marketing (getting bookings). We can guide your content strategy, but our primary job is generating revenue, not filming TikTok dances."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Questions</h2>
                    <p className="text-slate-600">Clarifying your doubts before we start.</p>
                </div>

                <div className="space-y-4">
                    {questions.map((item, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 bg-slate-50 group-open:bg-white transition-colors">
                                    <span className="text-slate-900 font-semibold">{item.q}</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="text-slate-600 p-6 pt-0 bg-white leading-relaxed">
                                    {item.a}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
