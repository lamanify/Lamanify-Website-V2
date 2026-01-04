import React from 'react';
import { motion } from 'framer-motion';

const Stat = ({ label, value, subtext }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
        <p className="text-3xl font-bold text-teal-600 mb-2">{value}</p>
        <p className="font-bold text-slate-800 mb-1">{label}</p>
        <p className="text-xs text-slate-500">{subtext}</p>
    </div>
);

export const CaseStudy = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2 block">Case Study</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                                From "Price Shoppers" to <br /> <span className="text-teal-600">"Loyal Patients."</span>
                            </h2>

                            <div className="space-y-6 text-lg text-slate-600 mb-8">
                                <p>
                                    <strong className="text-slate-900">Client:</strong> Penang Physio & Sports
                                </p>
                                <p>
                                    <strong className="text-slate-900">Challenge:</strong> High volume of leads, but 70% were looking for "cheap massage" and dropping off after Session 1.
                                </p>
                                <p>
                                    <strong className="text-slate-900">Solution:</strong> Lamanify reframed the offer from "First Trial RMXX" to <strong className="text-teal-600">"Full Body Mobility Assessment."</strong> We targeted "Office Syndrome" keywords on Google.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <Stat
                                    value="High Quality"
                                    label="Lead Quality"
                                    subtext='"Can you fix my back?"'
                                />
                                <Stat
                                    value="40%"
                                    label="Conversion"
                                    subtext="Signed 10-Session Package"
                                />
                                <Stat
                                    value="< 10%"
                                    label="Retention"
                                    subtext='"No-Show" Rate'
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            {/* Placeholder image for a clinic environment or a chart showing growth */}
                            <img
                                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Modern Physiotherapy Clinic"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                                    <p className="text-white italic text-lg mb-4">"We stopped competing on price. Now, patients trust our clinical expertise before they even walk in the door."</p>
                                    <p className="text-teal-400 font-bold">— Clinical Director, Penang Physio & Sports</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};
