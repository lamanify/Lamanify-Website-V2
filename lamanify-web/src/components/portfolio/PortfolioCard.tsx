import React from 'react';
import type { PortfolioItem } from '../../data/portfolio';

interface PortfolioCardProps {
    item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
    return (
        <div
            className="group relative flex flex-col h-[500px] bg-white rounded-[24px] overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
        >
            {/* Dynamic Background Gradient */}
            <div
                className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: item.accentColor }}
            ></div>
            <div
                className="absolute bottom-0 left-0 right-0 h-3/4 opacity-[0.15] pointer-events-none"
                style={{
                    background: `linear-gradient(to top, ${item.accentColor}, transparent)`
                }}
            ></div>

            {/* Typography Section */}
            <div className="px-8 pt-10 pb-4 relative z-20">
                {/* Win Metric */}
                <div className="flex items-center gap-2 mb-3">
                    <span
                        className="text-xs font-bold uppercase tracking-wider bg-white/50 px-2 py-1 rounded-md border border-slate-100/50 backdrop-blur-sm"
                        style={{ color: item.accentColor }}
                    >
                        {item.category} <span className="text-slate-300 mx-1">|</span> {item.badgeText || item.result}
                    </span>
                </div>

                {/* Client Name (Headline) */}
                <h3 className="text-[1.25rem] font-bold text-slate-900 leading-tight mb-2">
                    {item.subHeadline}
                </h3>

                <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {item.headline}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                    {item.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="bg-slate-50 px-2 py-1 rounded border border-slate-100">{tag}</span>
                    ))}
                </div>
            </div>

            {/* Image Composition */}
            <div className="absolute inset-x-0 bottom-0 h-[65%] z-10 overflow-hidden">
                <div className="relative w-full h-full transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:translate-y-2">

                    {/* 1. Desktop Mockup (Back Layer) */}
                    <div className="absolute bottom-[-15%] -left-[10%] w-[85%] h-auto z-10 transform rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:translate-x-4">
                        <div className="relative rounded-t-xl bg-slate-900 p-[2%] shadow-2xl pb-0 ring-1 ring-white/10">
                            {/* Screen Container */}
                            <div className="relative bg-slate-800 rounded-t-lg overflow-hidden aspect-[16/10]">
                                <img
                                    src={item.desktopImageUrl}
                                    alt={`${item.subHeadline} desktop preview`}
                                    className="w-full h-full object-cover object-top"
                                    loading="lazy"
                                />
                                {/* Reflection Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                            </div>
                            {/* Laptop Base Hint */}
                            <div className="h-[4%] bg-slate-800 rounded-b-md w-full mt-[1px]"></div>
                        </div>
                    </div>

                    {/* 2. Mobile Mockup (Front Layer) */}
                    <div className="absolute bottom-[-10%] -right-[5%] w-[40%] md:w-[35%] z-20 transform -rotate-3 transition-transform duration-700 group-hover:rotate-0 group-hover:-translate-x-2">
                        {/* Shadow */}
                        <div className="absolute inset-4 bg-black/40 blur-xl rounded-full opacity-60"></div>

                        {/* Phone Body */}
                        <div className="relative bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-900 shadow-2xl overflow-hidden aspect-[9/19.5] ring-1 ring-white/20">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[20px] bg-slate-900 rounded-b-xl z-30"></div>

                            {/* Screen Image */}
                            <div className="w-full h-full bg-slate-100">
                                <img
                                    src={item.mobileImageUrl}
                                    alt={`${item.subHeadline} mobile preview`}
                                    className="w-full h-full object-cover object-top"
                                    loading="lazy"
                                />
                            </div>

                            {/* Glare */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Data Badge (Overlay) */}
            <div className="absolute top-[45%] right-4 z-30 transform translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                <div className="bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 rounded-xl py-3 px-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-xl shadow-inner">💪</span>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Result</span>
                        <span className="text-sm font-bold text-slate-900 leading-none">
                            {item.result}
                        </span>
                    </div>
                </div>
            </div>

            {/* Invisible Link */}
            <a href={item.link} className="absolute inset-0 z-40" aria-label={`View case study for ${item.subHeadline}`}></a>
        </div>
    );
};

export default PortfolioCard;
