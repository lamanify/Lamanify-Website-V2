import { useState } from 'react';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'web-design',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setStatus('success');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <LazyMotion features={domAnimation}>
            <div className="relative">
                {/* Background Accent */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand/10 to-blue-500/10 rounded-[2.5rem] blur-2xl -z-10" />

                <div className="bg-white/80 backdrop-blur-xl border border-white p-8 md:p-10 rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <m.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-16 text-center"
                            >
                                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                    <CheckCircle className="w-10 h-10" />
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-3">Strategy Session Booked!</h4>
                                <p className="text-slate-600 mb-8 max-w-sm">
                                    Your message has been routed to our growth team. We'll reach out within the next 2 hours.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setStatus('idle');
                                        setFormData({ name: '', email: '', phone: '', service: 'web-design', message: '' });
                                    }}
                                    className="rounded-full px-8"
                                >
                                    Send another message
                                </Button>
                            </m.div>
                        ) : (
                            <m.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div className="space-y-1 content-start mb-8">
                                    <h3 className="text-2xl font-bold text-slate-900">Secure Your Session</h3>
                                    <p className="text-slate-500 text-sm">Tell us about your clinic goals and current challenges.</p>
                                </div>

                                <div className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all placeholder:text-slate-300 text-slate-900 bg-slate-50/50"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all placeholder:text-slate-300 text-slate-900 bg-slate-50/50"
                                                placeholder="+60 12-345 6789"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Work Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all placeholder:text-slate-300 text-slate-900 bg-slate-50/50"
                                            placeholder="dr.name@clinic.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Interested Service</label>
                                        <div className="relative">
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all appearance-none bg-slate-50/50 text-slate-900 font-medium"
                                            >
                                                <option value="web-design">Premium Web Design</option>
                                                <option value="seo">SEO & Local Dominance</option>
                                                <option value="google-ads">Google Ads (SEM)</option>
                                                <option value="automation">WhatsApp Automation</option>
                                                <option value="review">Review Management</option>
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all resize-none placeholder:text-slate-300 text-slate-900 bg-slate-50/50"
                                            placeholder="How can we help you grow?"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full group relative overflow-hidden bg-brand hover:bg-brand-dark text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-brand/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                                >
                                    <div className="relative z-10 flex items-center justify-center gap-2">
                                        {status === 'submitting' ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                <span>Submitting...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Deploy My Growth Engine</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </button>

                                <p className="text-center text-[10px] text-slate-400">
                                    Protected by enterprise-grade security. By clicking, you agree to our terms.
                                </p>
                            </m.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </LazyMotion>
    );
}
