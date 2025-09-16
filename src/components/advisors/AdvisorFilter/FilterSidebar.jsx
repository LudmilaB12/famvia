'use client';
import { useState } from 'react';
import FilterSection from './FilterSection';
import styles from './FilterSidebar.module.scss';
import { CATEGORIES_CONFIG } from '@/src/config/categories';

const FilterSidebar = ({ selectedFilters, onFilterChange }) => {
    const handleResetFilters = () => {
        onFilterChange('location', []);
        onFilterChange('beachResorts', []);
        onFilterChange('cruises', []);
        onFilterChange('themeParks', []);
    };

    const hexToRgba = (hex, alpha = 1) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return (
        <aside className={styles.filterSidebar}>
            {Object.entries(CATEGORIES_CONFIG).map(([key, category]) => (
                <FilterSection
                    key={key}
                    title={category.title}
                    options={category.options}
                    color={category.color}
                    backgroundColor={hexToRgba(category.color, 0.1)} 
                    selected={selectedFilters[key]}
                    onChange={(optionId) => onFilterChange(key, optionId)}
                />
            ))}
            <button 
                onClick={handleResetFilters}
                className={styles.resetButton}
            >
                Reset Filters
            </button>
        </aside>
    );
};

export default FilterSidebar;