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

    return (
        <aside className={styles.filterSidebar}>
            {Object.entries(CATEGORIES_CONFIG).map(([key, category]) => (
                <FilterSection
                    key={key}
                    title={category.title}
                    options={category.options}
                    color={category.color}
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