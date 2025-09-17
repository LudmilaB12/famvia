'use client';
import styles from "./page.module.scss";
import Navbar from "@/src/components/ui/Navbar/Navbar"
import FilterSidebar from "@/src/components/advisors/AdvisorFilter/FilterSidebar";
import SelectedFilters from "@/src/components/advisors/AdvisorFilter/SelectedFilters";
import { AdvisorCard } from "@/src/components/advisors/AdvisorCard/AdvisorCard";
import { useAdvisors } from "@/src/hooks/useAdvisors";
import { useState, useMemo } from "react";
import { CATEGORIES_CONFIG } from '@/src/config/categories';
import type { Advisor } from "@/src/types/advisor";

export default function Home() {
  // Obtener los advisors usando el hook
  const { advisors, isLoading, error } = useAdvisors();

  // Estado para los filtros seleccionados
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedBeachResorts, setSelectedBeachResorts] = useState<string[]>([]);
  const [selectedCruises, setSelectedCruises] = useState<string[]>([]);
  const [selectedThemeParks, setSelectedThemeParks] = useState<string[]>([]);

  const selectedFilters = {
    location: selectedLocations,
    beachResorts: selectedBeachResorts,
    cruises: selectedCruises,
    themeParks: selectedThemeParks
  };

  // Obtener el label de una opción por su ID
  const getOptionLabelById = (category: string, optionId: string): string => {
    return CATEGORIES_CONFIG[category as keyof typeof CATEGORIES_CONFIG]?.options.find(
      opt => opt.id === optionId
    )?.label || '';
  };

  // Filtrar los advisors según los filtros seleccionados
  const filteredAdvisors = useMemo(() => {
    if (!advisors) return [];

    return advisors.filter((advisor: Advisor) => {
      // Si no hay filtros seleccionados, mostrar todos los advisors
      if (Object.values(selectedFilters).every(filters => filters.length === 0)) {
        return true;
      }

      // Filtrar por ubicación
      if (selectedLocations.length > 0) {
        const selectedCountries = selectedLocations.map(id => getOptionLabelById('location', id));
        if (!selectedCountries.includes(advisor.location.country)) {
          return false;
        }
      }

      // Filtrar por especialidades
      const specialtyCategories = [
        { filters: selectedBeachResorts, category: 'beachResorts' },
        { filters: selectedCruises, category: 'cruises' },
        { filters: selectedThemeParks, category: 'themeParks' }
      ];

      // Verificar si hay algún filtro de especialidad seleccionado
      const hasSpecialtyFilters = specialtyCategories.some(({ filters }) => filters.length > 0);

      if (hasSpecialtyFilters) {
        // Verificar si el advisor coincide con alguno de los filtros seleccionados
        const hasMatch = specialtyCategories.some(({ filters, category }) => {
          if (filters.length === 0) return false;

          const selectedLabels = filters.map(id => getOptionLabelById(category, id));
          
          return advisor.specialties.some(specialty =>
            specialty.category === category &&
            specialty.destinations.some(dest => selectedLabels.includes(dest))
          );
        });

        if (!hasMatch) return false;
      }

      return true;
    });
  }, [advisors, selectedFilters, selectedLocations, selectedBeachResorts, selectedCruises, selectedThemeParks]);

  const handleFilterChange = (
    category: 'location' | 'beachResorts' | 'cruises' | 'themeParks',
    optionId: string
  ) => {
    const setters = {
      location: setSelectedLocations,
      beachResorts: setSelectedBeachResorts,
      cruises: setSelectedCruises,
      themeParks: setSelectedThemeParks
    };

    setters[category]((prev: string[]) => {
      if (prev.includes(optionId)) {
        return prev.filter(id => id !== optionId);
      }
      return [...prev, optionId];
    });
  };

  return (
    <div>
      <main className={styles.bgr}> 
        <Navbar />
        <div className={styles.description}>
          <h1>Meet our Travel Advisors and find your perfect match!</h1>
          <h3>Ready to actually enjoy your next family vacation?</h3>
        </div>

        <div className={styles.container}>
          <div className={styles.sidebar}>
            <FilterSidebar 
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className={styles.content}>
            <SelectedFilters
              selectedFilters={selectedFilters}
              categories={CATEGORIES_CONFIG}
              onRemove={handleFilterChange}
              onReset={() => {
                setSelectedLocations([]);
                setSelectedBeachResorts([]);
                setSelectedCruises([]);
                setSelectedThemeParks([]);
              }}
            />
            
            {isLoading && <div className={styles.loading}>Loading advisors...</div>}
            
            {error && <div className={styles.error}>Error: {error.message}</div>}
            {!isLoading && !error && (
              <div className={styles.advisorsGrid}>
                {filteredAdvisors.length === 0 ? (
                  <div className={styles.noResults}>
                    No advisors found matching your filters. Try adjusting your selection.
                  </div>
                ) : (
                  filteredAdvisors.map((advisor: Advisor) => (
                    <AdvisorCard 
                      key={advisor.id} 
                      advisor={advisor}
                      selectedFilters={{
                        beachResorts: selectedBeachResorts,
                        cruises: selectedCruises,
                        themeParks: selectedThemeParks
                      }}
                    />
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
