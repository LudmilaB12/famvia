'use client';
import { X } from 'lucide-react';
import styles from './SelectedFilters.module.scss';

const SelectedFilters = ({ 
    selectedFilters,
    categories,
    onRemove 
}) => {
    const getSelectedLabel = (categoryKey, optionId) => {
        const category = categories[categoryKey];
        const option = category.options.find(opt => opt.id === optionId);
        return option ? option.label : '';
    };

    return (
        <div className={styles.selectedFilters}>
            {Object.entries(selectedFilters).map(([categoryKey, selected]) => (
                selected.length > 0 && selected.map(optionId => (
                    <span
                        key={`${categoryKey}-${optionId}`}
                        className={styles.pill}
                        style={{
                            backgroundColor: `${categories[categoryKey].color}20`, // color con opacidad 0.2
                            color: categories[categoryKey].color // color sólido
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
        </div>
    );
};

export default SelectedFilters;