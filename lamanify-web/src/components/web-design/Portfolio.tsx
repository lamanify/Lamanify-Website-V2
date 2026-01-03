
import React from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Klinik Aurora",
        image: "https://www.lamanify.com/wp-content/uploads/2024/09/Lamanify-Website-Design-for-Clinics-Portfolio14-768x576.webp",
        category: "Family & Wellness"
    },
    {
        title: "Dermalene",
        image: "https://www.lamanify.com/wp-content/uploads/2024/09/Lamanify-Website-Design-for-Clinics-Portfolio27-768x576.webp",
        category: "Skin & Aesthetics"
    },
    {
        title: "Denta Levant",
        image: "https://www.lamanify.com/wp-content/uploads/2024/09/Lamanify-Website-Design-for-Clinics-Portfolio1-768x576.webp",
        category: "Dental Care"
    }
];

export function Portfolio() {
    return (
        <LazyMotion features={domAnimation}>
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div>
                            <div className="text-brand font-bold uppercase tracking-widest text-sm mb-2">Our Work</div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white">
                                Trusted by Leading <br />Healthcare Providers
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <m.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                                    <div className="absolute inset-0 bg-slate-800 animate-pulse" /> {/* Placeholder while loading */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        width={768}
                                        height={576}
                                        loading="lazy"
                                        decoding="async"
                                        className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full">
                                            <ExternalLink className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                                <p className="text-slate-400">{project.category}</p>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}
