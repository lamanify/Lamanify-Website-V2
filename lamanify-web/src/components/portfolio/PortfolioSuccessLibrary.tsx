import React, { useState, useMemo } from 'react';
import PortfolioFilter from './PortfolioFilter';
import PortfolioCard from './PortfolioCard';
import { portfolioItems, type PortfolioCategory } from '../../data/portfolio';

const CATEGORIES: PortfolioCategory[] = ['All', 'Dental', 'GP / Family', 'Aesthetic', 'Specialist', 'Physio'];

const PortfolioSuccessLibrary: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All');

    const filteredItems = useMemo(() => {
        if (selectedCategory === 'All') return portfolioItems;
        return portfolioItems.filter(item => item.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="w-full">
            {/* Filter Bar */}
            <PortfolioFilter
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                {filteredItems.length > 0 ? (
                    filteredItems.map(item => (
                        <PortfolioCard key={item.id} item={item} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                        <p className="text-slate-500 font-medium">No case studies found for this category yet.</p>
                        <p className="text-slate-400 text-sm mt-2">Check back soon or view "All" to see our full library.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioSuccessLibrary;
