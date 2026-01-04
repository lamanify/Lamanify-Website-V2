import React from 'react';
import { motion } from 'framer-motion';

const Step = ({ number, title, subtitle, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="relative pl-16 md:pl-24 py-8"
    >
        {/* Line connector */}
        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-0.5 bg-slate-200 last:bottom-auto last:h-full" />

        {/* Step Number */}
        <div className="absolute left-0 md:left-4 top-8 w-12 h-12 md:w-12 md:h-12 bg-white border-2 border-teal-500 rounded-full flex items-center justify-center z-10">
            <span className="text-teal-600 font-bold text-lg">{number}</span>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h4 className="text-teal-600 font-bold tracking-wide text-sm uppercase mb-2">{title}</h4>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{subtitle}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

export const Solution = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                            A System That Fills Your Books with <br /><span className="text-teal-600">"Plan of Care"</span> Patients.
                        </h2>
                        <p className="text-lg text-slate-600">
                            We implement the "Pain-to-Patient" funnel that filters for high-quality patients.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Step
                        number="1"
                        title="Phase 1: Symptom-Aware Search (SEO)"
                        subtitle="Capture Them When They Are In Pain"
                        description="Patients don't always search 'Physio.' They search 'Sakit pinggang chronic' or 'ACL surgery recovery.' We build pages that answer these specific pain points, positioning your center as the Medical Authority, not a spa."
                        delay={0.2}
                    />
                    <Step
                        number="2"
                        title="Phase 2: The 'Education First' Ad Strategy"
                        subtitle="Pre-Frame Value Before They Click"
                        description="We use video ads showing the root cause of pain (e.g., 'Why your lower back hurts at the office'). By the time they click 'Book,' they know you are a clinical expert, justifying your fees."
                        delay={0.4}
                    />
                    <Step
                        number="3"
                        title="Phase 3: Automated Retention (The LTV Booster)"
                        subtitle="Turn 1 Visit Into 10"
                        description="Recovery takes time. Our automated WhatsApp & Email sequences nurture patients between sessions, reminding them to do their home exercises and re-booking them for their next slot. This reduces 'No-Shows' by up to 40%."
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};
