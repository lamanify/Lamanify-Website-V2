import React from 'react';
import { motion } from 'framer-motion';

const ConditionColumn = ({ title, items, delay, colorClass }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
        <h3 className={`text-xl font-bold mb-6 pb-4 border-b ${colorClass} text-slate-900`}>
            {title}
        </h3>
        <ul className="space-y-4">
            {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{item}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

export const Conditions = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                        Targeted Campaigns for Every Specialty.
                    </h2>
                    <p className="text-lg text-slate-600">
                        We understand the difference between MSK and Neuro. Our campaigns are tailored to the specific patients you want to treat.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConditionColumn
                        title="Musculoskeletal (MSK)"
                        colorClass="border-teal-500"
                        delay={0.1}
                        items={[
                            "Chronic Lower Back Pain",
                            "Slip Disc Management",
                            "Frozen Shoulder / Neck Pain",
                            "Sciatica & Nerve Pain",
                            "Postural Correction"
                        ]}
                    />
                    <ConditionColumn
                        title="Sports Performance"
                        colorClass="border-blue-500"
                        delay={0.2}
                        items={[
                            "ACL / Meniscus Post-Op",
                            "Runner’s Knee",
                            "Rotator Cuff Injuries",
                            "Ankle Sprains & Instability",
                            "Return-to-Sport Rehab"
                        ]}
                    />
                    <ConditionColumn
                        title="Specialized Rehab"
                        colorClass="border-purple-500"
                        delay={0.3}
                        items={[
                            "Stroke / Neuro Rehab",
                            "Geriatric (Elderly) Mobility",
                            "Paediatric Physio",
                            "Vestibular Rehabilitation",
                            "Women's Health"
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};
