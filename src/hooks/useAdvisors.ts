import { useState, useEffect } from 'react';
import { Advisor } from '../types/advisor';
import { advisors as advisorsData } from '../data/advisors';

interface UseAdvisorsReturn {
    advisors: Advisor[];
    isLoading: boolean;
    error: Error | null;
    getAdvisorById: (id: string) => Advisor | undefined;
    getRandomAdvisors: (excludeId?: string, limit?: number) => Advisor[];
}

export const useAdvisors = (): UseAdvisorsReturn => {
    const [advisors, setAdvisors] = useState<Advisor[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        try {
            setTimeout(() => {
                setAdvisors(advisorsData);
                setIsLoading(false);
            }, 500);
        } catch (err) {
            setError(err as Error);
            setIsLoading(false);
        }
    }, []);

    const getAdvisorById = (id: string): Advisor | undefined => {
        return advisors.find(advisor => advisor.id === id);
    };

    const getRandomAdvisors = (excludeId?: string, limit: number = 3): Advisor[] => {
        const filteredAdvisors = excludeId 
            ? advisors.filter(advisor => advisor.id !== excludeId)
            : [...advisors];
        
        return filteredAdvisors
            .sort(() => Math.random() - 0.5)
            .slice(0, limit);
    };

    return {
        advisors,
        isLoading,
        error,
        getAdvisorById,
        getRandomAdvisors
    };
};