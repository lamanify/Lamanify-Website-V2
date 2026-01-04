import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';
import IndustriesMegaMenu from './navbar/IndustriesMegaMenu';
import SolutionsMegaMenuNew from './navbar/SolutionsMegaMenuNew';
import SystemMegaMenu from './navbar/SystemMegaMenu';
import ServicesMegaMenu from './navbar/ServicesMegaMenu';
import ResultsMegaMenu from './navbar/ResultsMegaMenu';
import ResourcesMegaMenu from './navbar/ResourcesMegaMenu';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Industries', href: '#', megaMenu: IndustriesMegaMenu },
        { name: 'Solutions', href: '#', megaMenu: SolutionsMegaMenuNew },
        { name: 'The System', href: '#', megaMenu: SystemMegaMenu },
        { name: 'Services', href: '#', megaMenu: ServicesMegaMenu },
        { name: 'Results', href: '#', megaMenu: ResultsMegaMenu },
        { name: 'Resources', href: '#', megaMenu: ResourcesMegaMenu },
    ];

    const toggleMobileMenu = (name: string) => {
        setOpenMobileMenu(openMobileMenu === name ? null : name);
    };

    return (
        <nav
            className={cn(
                "fixed z-50 transition-all duration-500 ease-in-out font-sans",
                "left-1/2 -translate-x-1/2",
                isScrolled
                    ? "top-4 w-[95%] max-w-[95%] rounded-full border border-slate-200 bg-white/90 backdrop-blur-md shadow-lg py-1"
                    : "top-0 w-full max-w-none rounded-none border-b border-transparent bg-transparent py-4"
            )}
        >
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <img
                        src="https://res.cloudinary.com/lamanify/image/upload/v1764535947/Lamanify_37_uvufej.webp"
                        alt="Lamanify Logo"
                        width={100}
                        height={32}
                        loading="eager"
                        decoding="async"
                        className="h-8 w-auto"
                    />
                </a>

                {/* Desktop Links */}
                <div className="hidden lg:flex lg:items-center lg:gap-6">
                    {navLinks.map((link) => {
                        return (
                            <div key={link.name} className="relative group">
                                <a
                                    href={link.href}
                                    className="text-sm font-semibold text-slate-900 group-hover:text-brand active:text-brand transition-colors py-5 inline-flex items-center gap-1"
                                >
                                    {link.name}
                                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                                </a>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out z-[60]">
                                    <link.megaMenu />
                                </div>
                            </div>
                        );
                    })}

                    <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200">
                        <Button variant="primary" onClick={() => window.location.href = '/contact'} className="h-9 px-6 rounded-full font-bold">
                            Get a Proposal
                        </Button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="h-6 w-6 text-slate-900" /> : <Menu className="h-6 w-6 text-slate-900" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 mt-2 w-full border border-slate-100 rounded-3xl bg-white p-4 shadow-2xl max-h-[85vh] overflow-y-auto">
                    <div className="flex flex-col space-y-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="flex flex-col">
                                <button
                                    onClick={() => toggleMobileMenu(link.name)}
                                    className="flex items-center justify-between w-full p-4 text-base font-bold text-slate-900 hover:text-brand active:text-brand hover:bg-slate-50 rounded-2xl transition-colors"
                                >
                                    {link.name}
                                    {openMobileMenu === link.name ? <ChevronUp className="h-5 w-5 text-brand" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                                </button>
                                {openMobileMenu === link.name && (
                                    <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                        <div className="p-4 bg-slate-50 rounded-2xl">
                                            <link.megaMenu className="!w-full !max-w-none !shadow-none !border-none !p-0 !bg-transparent !h-auto" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 px-2">
                            <Button className="w-full h-12 rounded-2xl font-bold" onClick={() => window.location.href = '/contact'}>
                                Get a Proposal
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
