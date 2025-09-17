'use client';
import { X, RotateCcw } from 'lucide-react';
import styles from './SelectedFilters.module.scss';

const SelectedFilters = ({ 
    selectedFilters,
    categories,
    onRemove,
    onReset
}) => {
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

    return (
        <div className={styles.selectedFilters}>
            <div className={styles.content}>
                <div className={styles.pillsContainer}>
                    {!hasSelectedFilters ? (
                        <span className={styles.noFilters}>No filters selected</span>
                    ) : (
                        Object.entries(selectedFilters).map(([categoryKey, selected]) => (
                            selected.length > 0 && selected.map(optionId => {
                                const pillKey = `${categoryKey}-${optionId}`;
                                return (
                                    <span
                                        key={pillKey}
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
                                );
                            })
                        ))
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