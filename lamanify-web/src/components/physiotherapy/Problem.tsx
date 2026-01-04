import React from 'react';
import { motion } from 'framer-motion';

const ProblemCard = ({ icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
    >
        <div className="w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
);

export const Problem = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                        Are You Tired of Patients Expecting a <span className="text-teal-600">"Miracle Cure"</span> in 30 Minutes?
                    </h2>
                    <p className="text-lg text-slate-600">
                        Running a Physio center is frustrating when you are constantly battling price shoppers and one-off seekers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ProblemCard
                        delay={0.1}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                        title='The "Urut" Comparison'
                        description='Leads ask, "Is this like massage? How much for 1 hour?" completely devaluing your clinical degree.'
                    />
                    <ProblemCard
                        delay={0.2}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        }
                        title="The Drop-Off"
                        description="Patients come for one session, feel slightly better, and cancel the rest of their treatment plan."
                    />
                    <ProblemCard
                        delay={0.3}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                        title="The Empty Slots"
                        description="Mid-day gaps (11 AM - 3 PM) that eat into your profitability while evenings are overbooked."
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-4xl mx-auto"
                >
                    <p className="text-xl font-medium text-slate-800">
                        <span className="text-teal-600 font-bold">The Reality:</span> You don't need <span className="italic">more</span> leads. You need <span className="underline decoration-teal-400 decoration-2 underline-offset-4">educated</span> patients who understand that recovery is a journey, not a quick fix.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
