
import React from 'react';
import { motion } from 'framer-motion';

export const Problem = () => {
    const painPoints = [
        {
            title: 'The "Discount War"',
            desc: 'Competitors slashing prices on fillers and lasers, forcing you to erode your margins just to compete.',
            icon: '📉'
        },
        {
            title: 'The Ad Account Bans',
            desc: 'One "Before & After" photo gets your Facebook Ad Account restricted for violating policy.',
            icon: '🚫'
        },
        {
            title: 'The Low-Quality Leads',
            desc: 'Hundreds of WhatsApp messages, but zero actual bookings. Just endless "PM price" queries.',
            icon: '👻'
        }
    ];

    return (
        <section className="py-24 bg-[#121212] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-[#C5A0A5] font-semibold tracking-wider uppercase mb-4 text-sm">The Commodity Trap</h2>
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                        Tired of leads asking <span className="italic text-[#D4AF37]">"Pm price"</span> and ghosting?
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Marketing an aesthetic clinic in Malaysia is becoming a nightmare. You are a medical professional, not a flea market. Your marketing should reflect your expertise, not your discounts.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {painPoints.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 bg-[#1A1A1A] border border-[#333] hover:border-[#D4AF37]/50 transition-colors duration-300 rounded-sm"
                        >
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h4 className="text-xl font-serif text-white mb-4">{item.title}</h4>
                            <p className="text-gray-400 font-light leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
