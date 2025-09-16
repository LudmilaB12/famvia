'use client';
import { useState, useRef, useEffect } from 'react';
import { X, Search, ChevronDown } from 'lucide-react';
import styles from './Multiselect.module.scss';

const Multiselect = ({ 
    options, 
    accentColor = '#E75A94',
    value = [], 
    onChange = () => {} 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef(null);

    // Reemplazamos el estado local por las props
    const selectedOptions = value;
    const setSelectedOptions = onChange;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleOptionToggle = (option) => {
        setSelectedOptions(prev => {
            if (prev.some(item => item.id === option.id)) {
                return prev.filter(item => item.id !== option.id);
            }
            return [...prev, option];
        });
    };

    const handleRemoveOption = (optionId) => {
        setSelectedOptions(prev => prev.filter(item => item.id !== optionId));
    };

    const filteredOptions = options.filter(option => 
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputClick = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className={styles.multiSelect} ref={containerRef}>
            <div 
                className={styles.inputContainer} 
                onClick={handleInputClick}
                style={{
                    '--accent-color': accentColor
                }}
            >
                <div className={styles.pillsContainer}>
                    {selectedOptions.map(option => (
                        <span 
                            key={option.id} 
                            className={styles.pill}
                            style={{
                                backgroundColor: `${accentColor}20`,
                                color: accentColor
                            }}
                        >
                            {option.label}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveOption(option.id);
                                }}
                                className={styles.removeBtn}
                            >
                                <X size={14} />
                            </button>
                        </span>
                    ))}
                </div>
                <ChevronDown 
                    className={`${styles.chevronIcon} ${isOpen ? styles.chevronUp : ''}`} 
                    size={20} 
                />
            </div>

            {isOpen && (
                <div className={styles.optionsContainer}>
                    <div className={styles.searchContainer}>
                        <Search size={18} className={styles.searchIcon} />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className={styles.searchInput}
                            autoFocus
                        />
                    </div>
                    <div className={styles.optionsGrid}>
                        {filteredOptions.map(option => (
                            <label 
                                key={option.id} 
                                className={styles.optionItem}
                                style={{
                                    '--accent-color': accentColor
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedOptions.some(item => item.id === option.id)}
                                    onChange={() => handleOptionToggle(option)}
                                />
                                <span>{option.label}</span>
                            </label>
                        ))}
                        {filteredOptions.length === 0 && (
                            <div className={styles.noResults}>No results found</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Multiselect;