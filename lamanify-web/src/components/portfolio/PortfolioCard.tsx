import React from 'react';
import type { PortfolioItem } from '../../data/portfolio';

interface PortfolioCardProps {
    item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
    return (
        <div className="group relative flex flex-col h-full bg-white rounded-xl overflow-hidden hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-100/50">
            {/* Visual - Mobile Mockup Frame */}
            <div className="relative pt-[110%] bg-[#F8FAFC] overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {/* Phone Frame - Realistic & Sleek */}
                <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[65%] h-[95%] bg-white rounded-[2.5rem] border-[6px] border-slate-900 shadow-2xl overflow-hidden transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:-translate-y-4">
                    {/* Inner Border (Bezel) */}
                    <div className="absolute inset-0 border-[2px] border-black rounded-[2.2rem] pointer-events-none z-20"></div>

                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-6 bg-black rounded-b-2xl z-30 pointer-events-none"></div>

                    {/* Screen Image */}
                    <div className="relative w-full h-full bg-slate-200 overflow-hidden">
                        <img
                            src={item.imageUrl}
                            alt={`${item.subHeadline} mobile design`}
                            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                        />

                        {/* Premium Hover Overlay */}
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10 backdrop-blur-[2px]">
                            <span className="text-white text-sm font-medium px-6 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                                View Case Study
                            </span>
                        </div>
                    </div>
                </div>

                {/* Glassmorphic Badge */}
                <div className="absolute top-5 right-5 z-30">
                    <div className="bg-white/80 backdrop-blur-md border border-white/50 text-slate-800 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        {item.badgeText || item.result}
                    </div>
                </div>
            </div>

            {/* Copy Content - Editorial Style */}
            <div className="p-8 flex-1 flex flex-col relative z-20 bg-white border-t border-slate-50">
                <div className="mb-4 flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                        <span key={tag} className="text-[9px] uppercase tracking-widest font-semibold text-slate-400 border border-slate-100 px-2 py-1 rounded inline-block">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-[1.3] group-hover:text-brand transition-colors duration-300">
                    {item.headline}
                </h3>

                <p className="text-sm text-slate-500 font-medium mb-6">
                    {item.subHeadline}
                </p>

                <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Result</span>
                    <span className="text-sm font-bold text-slate-900">{item.result}</span>
                </div>
            </div>

            {/* Invisible Link */}
            <a href={item.link} className="absolute inset-0 z-40" aria-label={`View case study for ${item.subHeadline}`}></a>
        </div>
    );
};

export default PortfolioCard;
