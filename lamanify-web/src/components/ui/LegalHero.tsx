
import React from 'react';

interface LegalHeroProps {
    title: string;
    lastUpdated?: string;
}

export const LegalHero = ({ title, lastUpdated }: LegalHeroProps) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    {title}
                </h1>
                {lastUpdated && (
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
                        Last Updated: {lastUpdated}
                    </p>
                )}
            </div>
        </section>
    );
};
