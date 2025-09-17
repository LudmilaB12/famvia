export type Location = {
    country: string;
    city: string;
};

export type Specialty = {
    category: 'beachResorts' | 'cruises' | 'themeParks';
    destinations: string[];
    experienceYears?: number;
};

type VacationImage = {
    url: string;
    alt: string;
    description?: string;
};

export type Advisor = {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    location: Location;
    image: VacationImage;
    specialties: Specialty[];
    bio?: string;
    languages?: string[];
    contact?: {
        email: string;
        phone?: string;
    };
    profile: {
        aboutMe: string;
        whyILoveBeingTravelAgent: string;
        topTravelSecret: string;
        favoriteDestinations: string[];
        favoriteVacationImage: VacationImage;
        favoriteVacationMemory: string;
        vacationMemories: VacationImage[];
    };
};