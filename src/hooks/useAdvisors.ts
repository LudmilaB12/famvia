import { useState, useEffect } from 'react';
import { Advisor } from '../types/advisor';
import { advisors as advisorsData } from '../data/advisors';

interface UseAdvisorsReturn {
    advisors: Advisor[];
    isLoading: boolean;
    error: Error | null;
    getAdvisorById: (id: string) => Advisor | undefined;
}

export const useAdvisors = (): UseAdvisorsReturn => {
    const [advisors, setAdvisors] = useState<Advisor[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        try {
            // Simulamos una carga asíncrona
            // En un caso real, aquí harías el fetch a tu API
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

    return {
        advisors,
        isLoading,
        error,
        getAdvisorById
    };
};