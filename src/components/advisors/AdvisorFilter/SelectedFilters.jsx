'use client';
import { useState, useRef, useEffect } from 'react';
import { X, RotateCcw, MoreHorizontal } from 'lucide-react';
import styles from './SelectedFilters.module.scss';

const SelectedFilters = ({ 
    selectedFilters,
    categories,
    onRemove,
    onReset
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasOverflow, setHasOverflow] = useState(false);
    const containerRef = useRef(null);

    const getSelectedLabel = (categoryKey, optionId) => {
        const category = categories[categoryKey];
        const option = category.options.find(opt => opt.id === optionId);
        return option ? option.label : '';
    };

    const hexToRgba = (hex, alpha = 1) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const hasSelectedFilters = Object.values(selectedFilters).some(filters => filters.length > 0);

    useEffect(() => {
        const checkOverflow = () => {
            if (containerRef.current) {
                const pillsContainer = containerRef.current.querySelector(`.${styles.pillsContainer}`);
                if (pillsContainer) {
                    const hasVerticalOverflow = pillsContainer.scrollHeight > pillsContainer.clientHeight;
                    setHasOverflow(hasVerticalOverflow && !isExpanded);
                }
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [selectedFilters, isExpanded]);

    return (
        <div 
            ref={containerRef}
            className={`${styles.selectedFilters} ${isExpanded ? styles.expanded : ''}`}
        >
            <div className={styles.content}>
                <div className={styles.pillsContainer}>
                    {!hasSelectedFilters ? (
                        <span className={styles.noFilters}>No filters selected</span>
                    ) : (
                        <>
                            {Object.entries(selectedFilters).map(([categoryKey, selected]) => (
                                selected.length > 0 && selected.map(optionId => (
                                    <span
                                        key={`${categoryKey}-${optionId}`}
                                        className={styles.pill}
                                        style={{
                                            backgroundColor: hexToRgba(categories[categoryKey].color, 0.1),
                                            color: categories[categoryKey].color
                                        }}
                                    >
                                        {getSelectedLabel(categoryKey, optionId)}
                                        <button
                                            onClick={() => onRemove(categoryKey, optionId)}
                                            className={styles.removeBtn}
                                        >
                                            <X size={14} />
                                        </button>
                                    </span>
                                ))
                            ))}
                            {hasOverflow && !isExpanded && (
                                <button 
                                    className={`${styles.pill} ${styles.morePill}`}
                                    onClick={() => setIsExpanded(true)}
                                >
                                    <MoreHorizontal size={14} />
                                </button>
                            )}
                        </>
                    )}
                </div>
                <button 
                    onClick={onReset}
                    className={styles.resetBtn}
                    disabled={!hasSelectedFilters}
                >
                    <RotateCcw size={16} />
                    Reset filters
                </button>
            </div>
        </div>
    );
};

export default SelectedFilters;