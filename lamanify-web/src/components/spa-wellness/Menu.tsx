
import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        category: "Luxury Spa & Facial",
        items: ["Signature Massages", "Anti-Aging Facials", "Couple's Packages"],
        color: "#D4AF37" // Gold
    },
    {
        category: "TCM & Holistic",
        items: ["Acupuncture & Moxibustion", "Clinical Bekam (Cupping)", "Post-Natal Confinement"],
        color: "#10B981" // Emerald
    },
    {
        category: "Therapeutic Wellness",
        items: ["Lymphatic Drainage", "Infrared Saunas / Ice Baths", "Corporate Wellness Programs"],
        color: "#3B82F6" // Blueish/Calm or maybe keep within earth tones
    }
];

export const Menu = () => {
    return (
        <section className="py-24 bg-[#0F1715] text-white">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl font-medium"
                    >
                        Campaigns That <span className="italic text-[#10B981]">Soothe & Sell.</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-[#1A2624] rounded-xl overflow-hidden border border-[#2A3835] hover:border-[#D4AF37]/30 transition-all duration-300"
                        >
                            <div className="p-6 border-b border-[#2A3835]" style={{ borderColor: `${service.color}20` }}>
                                <h3 className="text-xl font-serif font-medium text-white">{service.category}</h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
