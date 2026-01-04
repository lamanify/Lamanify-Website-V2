export type PortfolioCategory = 'All' | 'Dental' | 'GP / Family' | 'Aesthetic' | 'Specialist' | 'Physio';

export interface PortfolioItem {
    id: string;
    category: PortfolioCategory;
    headline: string;
    subHeadline: string;
    result: string; // Used for "Winning" badge text if badgeText is not provided
    badgeText?: string;
    tags: string[];
    imageUrl: string;
    link: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: '1',
        category: 'Dental',
        headline: "Dominated Local Search for 'Dentist in Bangi'",
        subHeadline: "Klinik Pergigian [Name]",
        result: "Ranked #1 on Google",
        badgeText: "Ranked #1 on Google",
        tags: ['Dental', 'Local SEO', 'Web Design'],
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
        link: '#'
    },
    {
        id: '2',
        category: 'GP / Family',
        headline: "Achieved Top 3 Google Map Ranking in 90 Days",
        subHeadline: "Klinik [Name], Shah Alam",
        result: "#1 Map Ranking",
        badgeText: "#1 Map Ranking",
        tags: ['GP', 'SEO', 'Google Maps'],
        imageUrl: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
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
        imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
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
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
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
        imageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
        link: '#'
    }
];
