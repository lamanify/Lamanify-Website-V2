import { motion } from 'framer-motion';
import { MousePointer2, Bell, Check, Menu, Search, User } from 'lucide-react';

export const HeroFunnel = () => {
    return (
        <div className="relative w-full h-[800px] flex items-center justify-center pointer-events-none select-none">
            {/* Background Gradient/Glow - matching the pink theme */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] -z-10" />

            {/* Connecting Lines and Dots Animation Layer */}
            <svg className="absolute inset-0 w-full h-full z-0 overflow-visible" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMin slice">
                <defs>
                    <linearGradient id="gradientLine" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e9204f" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#e9204f" stopOpacity="0.3" />
                    </linearGradient>
                </defs>

                {/* Central vertical line connecting to the first card */}
                <motion.path
                    d="M 585 80 Q 585 150 585 180"
                    stroke="url(#gradientLine)"
                    strokeWidth="2"
                    fill="none"
                />

                {/* 8 Radiating Lines converging to the top of the first card */}
                {/* Convergence Point approx: x=585, y=140 (Just above the first card) */}
                {/* We create paths starting from spread out top points and moving to 585,140 */}
                {[
                    "M 335 0 L 585 140",
                    "M 435 0 L 585 140",
                    "M 535 0 L 585 140",
                    "M 635 0 L 585 140",
                    "M 735 0 L 585 140",
                    "M 835 0 L 585 140",
                ].map((path, index) => (
                    <g key={index}>
                        {/* The static line */}
                        <path d={path} stroke="url(#gradientLine)" strokeWidth="1.5" fill="none" opacity="0.4" />
                        {/* The moving dot */}
                        <circle r="3" fill="#e9204f">
                            <animateMotion
                                dur={`${3 + index * 0.5}s`}
                                repeatCount="indefinite"
                                path={path}
                                rotate="auto"
                                keyPoints="0;1"
                                keyTimes="0;1"
                            />
                        </circle>
                    </g>
                ))}
            </svg>

            <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-2xl transform lg:translate-x-0">

                {/* Stage 1: The Driver (Search & Ads) */}
                <div className="relative w-full flex items-center justify-center lg:justify-end group cursor-default">


                    {/* Funnel Shape Container 1 */}
                    <div className="relative bg-white p-2 rounded-xl border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] w-full max-w-[500px] transform -rotate-1 transition-transform group-hover:rotate-0 duration-500">
                        {/* Browser Mockup */}
                        <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
                            <div className="h-8 bg-white border-b border-slate-200 flex items-center px-3 space-x-2">
                                <div className="flex space-x-1">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                </div>
                                <div className="flex-1 bg-slate-100 rounded-md h-5 mx-2 text-[10px] flex items-center px-2 text-slate-400 truncate">
                                    google.com/search?q=best+specialist
                                </div>
                            </div>
                            <div className="p-4 md:p-6 bg-white space-y-4">
                                <div className="flex items-center space-x-2 border rounded-full px-4 py-2 shadow-sm w-full max-w-sm mx-auto">
                                    <span className="text-blue-500 font-bold text-xs md:text-sm">Google</span>
                                    <span className="text-slate-600 outline-none text-xs md:text-sm w-full truncate">Best Specialist KL</span>
                                    <Search className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                                </div>
                                <div className="pt-2 pl-2 max-w-md mx-auto relative">
                                    <div className="text-[10px] font-bold text-slate-400 mb-1">Ad • example-clinic.com</div>
                                    <div className="text-blue-600 text-sm md:text-lg font-medium leading-tight">Top Rated Specialist Clinic - Book Online</div>
                                    <div className="text-slate-600 text-xs md:text-sm mt-1">Expert care for you and your family. Available 24/7.</div>

                                    {/* Cursor Animation */}
                                    <motion.div
                                        className="absolute top-10 right-4 md:top-20 md:right-10"
                                        animate={{
                                            x: [0, -10, 0],
                                            y: [0, 10, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <MousePointer2 className="w-4 h-4 md:w-6 md:h-6 text-slate-800 fill-slate-800 transform rotate-[-15deg]" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animated Connection to next stage */}
                    <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-slate-200 to-transparent">
                        <motion.div
                            className="w-2 h-2 bg-brand rounded-full absolute -left-[3px]"
                            animate={{ y: [0, 64] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </div>

                {/* Stage 2: The Engine (Infrastructure) */}
                <div className="relative w-full flex items-center justify-center group cursor-default">


                    {/* Funnel Shape Container 2 */}
                    <div className="relative bg-white p-2 rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] w-[240px] md:w-[280px] transform rotate-1 transition-transform group-hover:rotate-0 duration-500 overflow-hidden">
                        {/* Mobile Mockup */}
                        <div className="bg-slate-50 min-h-[340px] md:min-h-[400px] rounded-[1.5rem] overflow-hidden border border-slate-200 relative">
                            {/* Top Bar */}
                            <div className="h-10 bg-white flex items-center justify-between px-4 border-b border-slate-100">
                                <span className="text-[10px] md:text-xs font-bold">9:41</span>
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-slate-200 rounded-sm"></div>
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-slate-200 rounded-sm"></div>
                                </div>
                            </div>

                            {/* Mobile Header */}
                            <div className="px-4 py-3 bg-white flex justify-between items-center shadow-sm">
                                <span className="font-bold text-xs md:text-sm text-slate-800">Clinic</span>
                                <Menu className="w-4 h-4 text-slate-600" />
                            </div>

                            {/* Hero content inside phone */}
                            <div className="p-4 flex flex-col items-center justify-center mt-6 md:mt-8 space-y-3">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-200 rounded-full animate-pulse"></div>
                                <div className="h-2 w-24 md:w-32 bg-slate-200 rounded animate-pulse"></div>
                                <div className="h-2 w-16 md:w-24 bg-slate-200 rounded animate-pulse"></div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="mt-4 md:mt-6 bg-brand text-white text-[10px] md:text-xs px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg shadow-brand/30 w-full flex items-center justify-center"
                                >
                                    Book Now
                                    <MousePointer2 className="w-3 h-3 ml-2 fill-white/50" />
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Animated Connection to next stage */}
                    <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-slate-200 to-transparent">
                        <motion.div
                            className="w-2 h-2 bg-brand rounded-full absolute -left-[3px]"
                            animate={{ y: [0, 64] }}
                            transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </div>

                {/* Stage 3: The Closer (Automation) */}
                <div className="relative w-full flex items-center justify-center lg:justify-end group cursor-default">


                    {/* Funnel Shape Container 3 */}
                    <div className="relative bg-white p-2 rounded-xl border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] w-full max-w-[500px] transform -rotate-1 transition-transform group-hover:rotate-0 duration-500">
                        {/* Dashboard Mockup */}
                        <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200 min-h-[180px] md:min-h-[220px]">
                            {/* Dashboard Header */}
                            <div className="h-8 md:h-10 bg-white border-b border-slate-100 flex items-center justify-between px-3 md:px-4">
                                <div className="flex gap-1.5 md:gap-2">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-300 rounded-full"></div>
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-300 rounded-full"></div>
                                </div>
                                <div className="flex gap-1.5 md:gap-2">
                                    <Bell className="w-3 h-3 md:w-4 md:h-4 text-slate-400" />
                                    <User className="w-3 h-3 md:w-4 md:h-4 text-slate-400" />
                                </div>
                            </div>

                            <div className="p-3 md:p-4 grid grid-cols-4 gap-3 md:gap-4">
                                {/* Calendar Grid */}
                                <div className="col-span-1 bg-white p-2 rounded border border-slate-100 h-24 md:h-32">
                                    <div className="h-1.5 w-8 md:w-12 bg-slate-200 mb-2 rounded"></div>
                                    <div className="space-y-1">
                                        {[1, 2, 3].map(i => <div key={i} className="h-1 w-full bg-slate-100 rounded"></div>)}
                                    </div>
                                </div>
                                <div className="col-span-3 bg-white p-2 rounded border border-slate-100 h-24 md:h-32 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-brand/20"></div>
                                    <div className="p-1 md:p-2">
                                        <div className="text-[8px] md:text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1 md:mb-2">Calendar</div>
                                        <motion.div
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                            className="bg-white border border-green-100 shadow-sm rounded-lg p-2 md:p-3 flex items-start gap-2 md:gap-3"
                                        >
                                            <div className="bg-green-100 text-green-600 p-0.5 md:p-1 rounded-full shrink-0">
                                                <Check className="w-2.5 h-2.5 md:w-3 md:h-3" />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-[9px] md:text-xs font-bold text-slate-800 truncate">Appointment Confirmed</div>
                                                <div className="text-[8px] md:text-[10px] text-slate-500 truncate">Sara L. • 10:00 AM</div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Background connecting lines (SVG) extended */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* Paths for dots to travel */}
                {/* Example subtle lines */}
            </svg>
        </div>
    );
};
