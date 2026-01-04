import React from 'react';
import type { PortfolioCategory } from '../../data/portfolio';

interface PortfolioFilterProps {
    categories: PortfolioCategory[];
    selectedCategory: PortfolioCategory;
    onSelectCategory: (category: PortfolioCategory) => void;
}

const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
    categories,
    selectedCategory,
    onSelectCategory,
}) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                            ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                            : 'bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900 border border-slate-100'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default PortfolioFilter;
