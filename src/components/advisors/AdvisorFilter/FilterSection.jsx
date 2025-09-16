'use client';
import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import styles from './FilterSection.module.scss';

const ITEMS_TO_SHOW = 6;

const FilterSection = ({ 
    title, 
    options, 
    color, 
    selected, 
    onChange,
    showSearch = options.length > ITEMS_TO_SHOW 
}) => {
    const [showAll, setShowAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const visibleOptions = showAll ? filteredOptions : filteredOptions.slice(0, ITEMS_TO_SHOW);
    const hasMore = filteredOptions.length > ITEMS_TO_SHOW;

    const handleOptionChange = (optionId) => {
        setSearchTerm('');
        onChange(optionId);
    };

    return (
        <section>
            <h3>{title}</h3>
            {showSearch && (
                <div className={styles.searchContainer}>
                    <Search size={16} className={styles.searchIcon} />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                        className={styles.searchInput}
                    />
                </div>
            )}
            <div className={styles.checkboxList}>
                {visibleOptions.map(option => (
                    <label 
                        key={option.id}
                        className={styles.checkbox}
                        style={{ 
                            '--checkbox-color': color
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={selected.includes(option.id)}
                            onChange={() => handleOptionChange(option.id)}
                        />
                        <span>{option.label}</span>
                    </label>
                ))}
            </div>
            {hasMore && !showAll && (
                <button 
                    className={styles.seeMoreButton}
                    onClick={() => setShowAll(true)}
                >
                    See more
                    <ChevronDown size={16} />
                </button>
            )}
        </section>
    );
};

export default FilterSection;