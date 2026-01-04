
import React from 'react';
import { motion } from 'framer-motion';

export const Solution = () => {
    const phases = [
        {
            step: '01',
            title: 'Brand Authority',
            subtitle: 'The "Celebrity Doctor" Effect',
            desc: 'We position the Doctor as the Key Opinion Leader (KOL). Instead of selling "Botox," we sell *your expertise*. We build "Treatment Pages" that educate patients on the science, creating trust before they even call.'
        },
        {
            step: '02',
            title: 'The "Anti-Ban" Ad Strategy',
            subtitle: 'Stop Playing Cat-and-Mouse',
            desc: 'We stop playing cat-and-mouse with Facebook/Google AI. We use "Educational Angles" and "Benefit-Driven Copy" that pass strict ad reviews while still compelling users to click. No more banned accounts.'
        },
        {
            step: '03',
            title: 'The "Price Shopper" Filter',
            subtitle: 'Quality Over Quantity',
            desc: 'We use pre-qualification forms and "Starting At" pricing transparency in our funnels. We repel the RM50 bargain hunters so your front desk only talks to serious patients ready to invest RM1,000+.'
        }
    ];

    return (
        <section className="py-24 bg-[#0F0F0F] relative">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1A1A1A] to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <h2 className="text-[#D4AF37] font-semibold tracking-wider uppercase mb-4 text-sm">The Authority Funnel</h2>
                    <h3 className="font-serif text-4xl md:text-5xl text-white">
                        A Patient Acquisition System Built for <span className="italic">Prestige</span>.
                    </h3>
                </motion.div>

                <div className="space-y-12">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1">
                                <div className="text-8xl font-serif text-[#1A1A1A] stroke-text font-bold leading-none mb-4 md:mb-0 select-none" style={{ WebkitTextStroke: '1px #333' }}>
                                    {phase.step}
                                </div>
                            </div>

                            <div className="flex-[2] relative">
                                <div className="absolute left-[-2rem] top-0 bottom-0 w-[1px] bg-[#D4AF37]/20 hidden md:block"></div>
                                <h4 className="text-[#D4AF37] text-lg font-medium mb-2">{phase.title}</h4>
                                <h3 className="text-3xl font-serif text-white mb-6">{phase.subtitle}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed font-light">
                                    {phase.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
