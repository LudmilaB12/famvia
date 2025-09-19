'use client';
import React from 'react';
import Link from 'next/link';
import { Advisor, Specialty } from '@/src/types/advisor';
import styles from './AdvisorCard.module.scss';
import { MapPin } from 'lucide-react';

interface AdvisorCardProps {
    advisor: Advisor;
}

type DestinationWithCategory = {
    destination: string;
    category: 'beachResorts' | 'cruises' | 'themeParks';
    isHighlighted: boolean;
};

export const AdvisorCard: React.FC<AdvisorCardProps> = ({ advisor }) => {
    const getDestinations = (): DestinationWithCategory[] => {
        // Primero, recolectamos todas las destinations con su información
        const allDestinations = advisor.specialties.flatMap(specialty =>
            specialty.destinations.map(destination => ({
                destination,
                category: specialty.category as 'beachResorts' | 'cruises' | 'themeParks'
            }))
        );
        return allDestinations;
    };

    const destinations = getDestinations();

    return (
        <Link href={`/advisors/${advisor.id}`} className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={advisor.image.url} alt={advisor.image.alt} />
            </div>
            <div className={styles.content}>
                <h3>{advisor.fullName}</h3>
                <p className={styles.location}>
                    <MapPin className={styles.locationIcon} size={16} />
                    {advisor.location.city}, {advisor.location.country}
                </p>
                <div className={styles.specialties}>
                    {destinations.map((item, index) => (
                        <span 
                            key={`${item.destination}-${index}`}
                            className={`${styles.specialty} ${styles[item.category]} ${
                                item.isHighlighted ? styles.highlighted : ''
                            }`}
                        >
                            {item.destination}
                        </span>
                    ))}
                </div>
                <p className={styles.bio}>{advisor.bio}</p>
            </div>
        </Link>
    );
};