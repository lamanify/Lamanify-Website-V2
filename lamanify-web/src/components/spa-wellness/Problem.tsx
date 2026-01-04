
import React from 'react';
import { motion } from 'framer-motion';

export const Problem = () => {
    return (
        <section className="relative w-full py-20 bg-[#0F1715] text-white overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#10B981] opacity-5 blur-[100px] rounded-full z-0" />

            <div className="container relative z-10 px-6 mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Visual/Left Side - Can be text heavy or image, here we use text heavy focus as per copy */}
                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#D4AF37] tracking-widest uppercase text-xs font-bold mb-4 block">The Problem</span>
                            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 leading-tight">
                                Is Your Spa Full on Weekends but <span className="text-gray-500 italic">"Dead"</span> on Weekdays?
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Running a wellness business is expensive. You have rent, staff salaries, and utilities to pay, regardless of how many customers walk in.
                            </p>
                        </motion.div>
                    </div>

                    {/* Points/Right Side */}
                    <div className="md:w-1/2 grid gap-6">
                        {[
                            {
                                title: 'The "Groupon" Curse',
                                description: 'You run discounts to get customers, but they are "cheap hunters" who never return for full-priced services.',
                                icon: '😫'
                            },
                            {
                                title: 'The Weekday Slump',
                                description: 'Mondays to Thursdays are quiet, while you turn away customers on Saturdays.',
                                icon: '📉'
                            },
                            {
                                title: 'The Ghosting',
                                description: 'Clients book via WhatsApp but forget to show up, leaving your therapists idle.',
                                icon: '👻'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-[#1A2624] p-6 rounded-lg border border-[#2A3835] hover:border-[#10B981] transition-colors duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Punchline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 text-center max-w-3xl mx-auto bg-[#10B981]/10 p-8 rounded-2xl border border-[#10B981]/20"
                >
                    <p className="text-xl md:text-2xl font-serif text-white">
                        The Reality: <span className="text-[#10B981]">You don't just need more customers.</span> You need a <span className="italic font-semibold text-white">Demand Management System</span> that fills your off-peak hours with high-value guests.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
