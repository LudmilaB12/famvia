'use client';
import { useAdvisors } from '@/src/hooks/useAdvisors';
import {AdvisorCard} from '@/src/components/advisors/AdvisorCard/AdvisorCard';
import styles from './AdvisorsList.module.scss';

interface AdvisorsListProps {
    currentAdvisorId?: string;
}

export default function AdvisorsList({ currentAdvisorId }: AdvisorsListProps) {
    const { getRandomAdvisors, isLoading, error } = useAdvisors();
    const randomAdvisors = getRandomAdvisors(currentAdvisorId, 4);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className={styles.advisorsListContainer}>
            <h1 className={styles.title}>Meet more Travel Advisors</h1>
            <div className={styles.advisorsGrid}>
                {randomAdvisors.map((advisor) => (
                    <AdvisorCard key={advisor.id} advisor={advisor} />
                ))}
            </div>
        </div>
    );
}