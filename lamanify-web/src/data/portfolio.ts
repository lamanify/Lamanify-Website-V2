export type PortfolioCategory = 'All' | 'Dental' | 'GP / Family' | 'Aesthetic' | 'Specialist' | 'Physio';

export interface PortfolioItem {
    id: string;
    category: PortfolioCategory;
    headline: string;
    subHeadline: string;
    result: string; // Used for "Winning" badge text if badgeText is not provided
    badgeText?: string;
    tags: string[];
    mobileImageUrl: string;
    desktopImageUrl: string;
    accentColor: string; // Hex code or Tailwind color class (e.g. 'bg-emerald-500') - but Hex is safer for inline styles
    link: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: 'klinik-ajwa',
        category: 'GP / Family',
        headline: "A Unified Digital Home for Family Wellness",
        subHeadline: "Klinik Ajwa",
        result: "#1 Ultrasound Rank",
        badgeText: "7 Branches Unified",
        tags: ['Healthcare', 'Local SEO', 'Web Design'],
        mobileImageUrl: 'https://res.cloudinary.com/lamanify/image/upload/portfolio_assets/Klinik%20Ajwa/mobile_full.webp',
        desktopImageUrl: 'https://res.cloudinary.com/lamanify/image/upload/portfolio_assets/Klinik%20Ajwa/desktop_full.webp',
        accentColor: '#10B981', // Emerald 500
        link: '/portfolio/klinik-ajwa'
    },
    {
        id: 'klinik-aurora',
        category: 'GP / Family',
        headline: "Unified 30+ Branches into a Single Authoritative Brand",
        subHeadline: "Klinik Aurora",
        result: "+300% Appointment Leads",
        badgeText: "30+ Branches Scaled",
        tags: ['Healthcare', 'Local SEO', 'Web Design'],
        mobileImageUrl: 'https://res.cloudinary.com/lamanify/image/upload/portfolio_assets/Klinik%20Aurora/mobile_full.webp',
        desktopImageUrl: 'https://res.cloudinary.com/lamanify/image/upload/portfolio_assets/Klinik%20Aurora/desktop_full.webp',
        accentColor: '#e9204f', // Brand Pink
        link: '/portfolio/klinik-aurora'
    },
    {
        id: 'kita-dental',
        category: 'Dental',
        headline: "Connecting Families with Modern Dental Care",
        subHeadline: "Kita Dental",
        result: "#1 Local Rank",
        badgeText: "Community Trusted",
        tags: ['Dental', 'Local SEO', 'Web Design'],
        mobileImageUrl: 'https://res.cloudinary.com/lamanify/image/upload/portfolio_assets/Kita%20Dental/mobile_full.webp',
        desktopImageUrl: 'https://res.cloudinary.com/lamanify/image/upload/portfolio_assets/Kita%20Dental/desktop_full.webp',
        accentColor: '#3B82F6', // Blue 500
        link: '/portfolio/kita-dental'
    },
    {
        id: 'denta-levant',
        category: 'Dental',
        headline: "A Digital Presence as Professional as Your Practice",
        subHeadline: "Denta Levant",
        result: "Elevated Brand",
        badgeText: "KumoDent Integrated",
        tags: ['Dental', 'Web Design', 'KumoDent Integration'],
        mobileImageUrl: 'https://res.cloudinary.com/lamanify/image/upload/portfolio_assets/Denta%20Levant/mobile_full.webp',
        desktopImageUrl: 'https://res.cloudinary.com/lamanify/image/upload/portfolio_assets/Denta%20Levant/desktop_full.webp',
        accentColor: '#6366f1', // Indigo 500
        link: '/portfolio/denta-levant'
    },
    {
        id: 'dermalene',
        category: 'Aesthetic',
        headline: "Dominating Search & Building Trust for a Shariah-Friendly Brand",
        subHeadline: "Dermalene",
        result: "SEO Dominance",
        badgeText: "10+ Branches",
        tags: ['Wellness', 'SEO', 'Web Design'],
        mobileImageUrl: 'https://res.cloudinary.com/lamanify/image/upload/portfolio_assets/Dermalene/mobile_full.webp',
        desktopImageUrl: 'https://res.cloudinary.com/lamanify/image/upload/portfolio_assets/Dermalene/desktop_full.webp',
        accentColor: '#059669', // Emerald 600
        link: '/portfolio/dermalene'
    },
    // Placeholders - kept for structure but hidden from main view if needed, or updated layout
    {
        id: '2',
        category: 'GP / Family',
        headline: "Achieved Top 3 Google Map Ranking in 90 Days",
        subHeadline: "Klinik [Name], Shah Alam",
        result: "#1 Map Ranking",
        badgeText: "#1 Map Ranking",
        tags: ['GP', 'SEO', 'Google Maps'],
        mobileImageUrl: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
        desktopImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        accentColor: '#64748b', // Slate 500
        link: '#'
    },
    {
        id: '3',
        category: 'Aesthetic',
        headline: "Building a Digital Brand to Match a Specialist's Reputation",
        subHeadline: "Dr. [Name] Aesthetic Clinic",
        result: "Premium Rebrand",
        badgeText: "Premium Rebrand",
        tags: ['Aesthetic', 'Branding', 'Design'],
        mobileImageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
        desktopImageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        accentColor: '#c026d3', // Fuchsia 600
        link: '#'
    },
    {
        id: '4',
        category: 'Physio',
        headline: "Streamlining Patient Bookings with WhatsApp Integration",
        subHeadline: "[Name] Physio & Rehab",
        result: "High Conversion",
        badgeText: "High Conversion",
        tags: ['Physio', 'Automation', 'WhatsApp'],
        mobileImageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
        desktopImageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        accentColor: '#eab308', // Yellow 500
        link: '#'
    },
    {
        id: '5',
        category: 'Specialist',
        headline: "Establishing Authority for a Heart Specialist",
        subHeadline: "Dr. [Name] Cardiology",
        result: "Authority Building",
        badgeText: "Authority Building",
        tags: ['Specialist', 'Content', 'Trust'],
        mobileImageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
        desktopImageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        accentColor: '#dc2626', // Red 600
        link: '#'
    }
];
