import { MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactInfo() {
    return (
        <div className="space-y-12 h-full flex flex-col justify-center">
            {/* Header Content */}
            <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-brand uppercase shadow-sm">
                    Connect With Us
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                    Let's Build Your <br />
                    <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Growth Engine.</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                    Skip the generic inquiries. Let's discuss a unified system engineered to turn your clinic into a high-performance patient acquisition machine.
                </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
                {/* WhatsApp */}
                <a
                    href="https://wa.me/601156706510"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-5 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300"
                >
                    <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                        <MessageCircle className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-slate-900">WhatsApp Us</h3>
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Live Now</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">+60 11-5670 6510</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </a>

                {/* Email */}
                <a
                    href="mailto:hello@lamanify.com"
                    className="group bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-5 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300"
                >
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                        <Mail className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-slate-900 mb-1 text-base">Email Strategy</h3>
                        <p className="text-slate-500 text-sm font-medium">hello@lamanify.com</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </a>

                {/* Location */}
                <div className="bg-slate-50/50 p-6 rounded-2xl border border-dashed border-slate-200 flex items-center gap-5">
                    <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="w-7 h-7 text-slate-500" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-0.5">Global Operations</h3>
                        <p className="text-slate-500 text-sm font-medium">Kuala Lumpur, Malaysia</p>
                    </div>
                </div>
            </div>

            {/* Social Proof / Trust */}
            <div className="pt-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Trusted by modern providers</p>
                <div className="flex gap-4 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                    {/* Placeholder for small clinic icons or trust signals */}
                    <div className="h-6 w-20 bg-slate-300 rounded" />
                    <div className="h-6 w-24 bg-slate-300 rounded" />
                    <div className="h-6 w-16 bg-slate-300 rounded" />
                </div>
            </div>
        </div>
    );
}
