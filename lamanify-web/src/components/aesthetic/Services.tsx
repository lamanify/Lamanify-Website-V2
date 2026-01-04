
import React from 'react';
import { motion } from 'framer-motion';

export const Services = () => {

    const categories = [
        {
            title: 'Injectables & Lifting',
            items: [
                'Dermal Fillers & Bio-Stimulators (Profhilo/Rejuran)',
                'Anti-Wrinkle Injections',
                'Thread Lifts'
            ]
        },
        {
            title: 'Laser & Skin',
            items: [
                'Pico Laser & Pigmentation',
                'CO2 Fractional (Acne Scars)',
                'HIFU / Ultherapy'
            ]
        },
        {
            title: 'Body Contouring',
            items: [
                'Fat Freezing (Cryo)',
                'Muscle Sculpting (EMS)',
                'Weight Management Programs'
            ]
        }
    ];

    return (
        <section className="py-24 bg-[#0F0F0F] relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[#C5A0A5] font-semibold tracking-wider uppercase mb-4 text-sm">Our Expertise</h2>
                    <h3 className="font-serif text-4xl md:text-5xl text-white">
                        Campaigns We <span className="italic text-[#D4AF37]">Scale</span>.
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#1A1A1A] group hover:bg-[#222] transition-colors duration-500 rounded-sm overflow-hidden"
                        >
                            <div className="h-2 w-full bg-gradient-to-r from-[#D4AF37] to-[#C5A0A5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="p-10">
                                <h4 className="text-2xl font-serif text-white mb-8 pb-4 border-b border-[#333]">{cat.title}</h4>
                                <ul className="space-y-4">
                                    {cat.items.map((item, i) => (
                                        <li key={i} className="text-gray-400 flex items-start gap-3">
                                            <span className="text-[#D4AF37] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
                                            <span>{item}</span>
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
