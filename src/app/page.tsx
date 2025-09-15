'use client';
import styles from "./page.module.scss";
import Navbar from "@/src/components/ui/Navbar/Navbar"
import FilterSidebar from "@/src/components/advisors/AdvisorFilter/FilterSidebar";
import SelectedFilters from "@/src/components/advisors/AdvisorFilter/SelectedFilters";
import { useState } from "react";
import { CATEGORIES_CONFIG } from '@/src/config/categories';

export default function Home() {
  // Estado para los filtros seleccionados
  const [selectedLocations, setSelectedLocations] = useState<any[]>([]);
  const [selectedBeachResorts, setSelectedBeachResorts] = useState<any[]>([]);
  const [selectedCruises, setSelectedCruises] = useState<any[]>([]);
  const [selectedThemeParks, setSelectedThemeParks] = useState<any[]>([]);

  const selectedFilters = {
    location: selectedLocations,
    beachResorts: selectedBeachResorts,
    cruises: selectedCruises,
    themeParks: selectedThemeParks
  };

  const handleFilterChange = (
    category: 'location' | 'beachResorts' | 'cruises' | 'themeParks',
    optionId: any
  ) => {
    const setters = {
      location: setSelectedLocations,
      beachResorts: setSelectedBeachResorts,
      cruises: setSelectedCruises,
      themeParks: setSelectedThemeParks
    };

    setters[category]((prev: any[]) => {
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
            />
            <p>Content goes here</p>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
