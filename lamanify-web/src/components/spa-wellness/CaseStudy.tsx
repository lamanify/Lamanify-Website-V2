
import React from 'react';
import { motion } from 'framer-motion';

export const CaseStudy = () => {
    return (
        <section className="relative py-24 bg-[#050A09] text-white">
            {/* Background Image/Texture overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A09] via-transparent to-[#050A09]" />

            <div className="container relative z-10 px-6 mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Left: Headline & Text */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#D4AF37] tracking-widest uppercase text-xs font-bold mb-4 block">Case Study</span>
                            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 leading-tight">
                                From "Walk-Ins" to <br /><span className="italic text-[#10B981]">Recurring Revenue.</span>
                            </h2>

                            <div className="bg-[#1A2624]/80 backdrop-blur-sm p-8 rounded-xl border border-[#2A3835]">
                                <h3 className="text-xl font-bold text-white mb-2">Urban Wellness (Kuala Lumpur)</h3>
                                <p className="text-gray-400 mb-6 text-sm">
                                    <strong className="text-white">Challenge:</strong> Client was busy on weekends but empty on weekdays. Cash flow was unpredictable.
                                </p>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-white">Solution:</strong> Lamanify launched a "Corporate Escape" campaign targeting nearby offices for lunch-hour slots + a "Monthly Wellness Membership" upsell.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Metrics Grid */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { label: "Weekday Occupancy", value: "+65%", desc: "Increase in off-peak bookings" },
                                { label: "Memberships Sold", value: "40", desc: "Recurring members in Month 1" },
                                { label: "Total Revenue", value: "RM10k+", desc: "Baseline monthly recurring revenue secured" },
                                { label: "Ad Cost", value: "Low", desc: "Reduced by geo-fencing specific office blocks" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-[#1A2624] p-6 rounded-xl border border-[#2A3835] text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">{stat.value}</div>
                                    <div className="text-white font-medium mb-1">{stat.label}</div>
                                    <div className="text-xs text-gray-500">{stat.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
