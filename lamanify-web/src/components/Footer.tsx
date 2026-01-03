import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div>
                        <a href="/" className="inline-block mb-6">
                            <img
                                src="https://res.cloudinary.com/lamanify/image/upload/v1764535947/Lamanify_37_uvufej.webp"
                                alt="Lamanify Logo"
                                width={100}
                                height={32}
                                loading="lazy"
                                decoding="async"
                                className="h-8 w-auto"
                            />
                        </a>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm">
                            Lamanify is a healthcare performance marketing agency focused on driving growth for healthcare providers in Malaysia.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="/" className="text-slate-600 hover:text-brand transition-colors text-sm">Home</a></li>
                            <li><a href="/about" className="text-slate-600 hover:text-brand transition-colors text-sm">About Us</a></li>
                            <li><a href="/#pricing" className="text-slate-600 hover:text-brand transition-colors text-sm">Package</a></li>
                            <li><a href="/#portfolio" className="text-slate-600 hover:text-brand transition-colors text-sm">Portfolio</a></li>
                            <li><a href="/blog" className="text-slate-600 hover:text-brand transition-colors text-sm">Blog</a></li>
                            <li><a href="/contact" className="text-slate-600 hover:text-brand transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Links</h4>
                        <ul className="space-y-4">
                            <li><a href="/terms-conditions" className="text-slate-600 hover:text-brand transition-colors text-sm">Terms & Conditions</a></li>
                            <li><a href="/privacy-policy" className="text-slate-600 hover:text-brand transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="/refund-policy" className="text-slate-600 hover:text-brand transition-colors text-sm">Refund Policy</a></li>
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-slate-600 text-sm leading-relaxed">
                                    Level 23-1, Premier Suite, One Mont Kiara, Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:admin@lamanify.com" className="text-slate-600 hover:text-brand transition-colors text-sm">
                                    admin@lamanify.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+601156706510" className="text-slate-600 hover:text-brand transition-colors text-sm">
                                    +6011-5670 6510
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 text-center">
                    <p className="text-slate-400 text-xs">
                        Copyrights &copy; {new Date().getFullYear()} Lamanify Sdn. Bhd. [1605252-U] All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
