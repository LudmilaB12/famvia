import { Advisor } from '../types/advisor';

export const advisors: Advisor[] = [
    {
        id: '1',
        firstName: 'Sarah',
        lastName: 'Thompson',
        fullName: 'Sarah Thompson',
        location: {
            country: 'USA',
            city: 'Orlando'
        },
        image: {
            url: '/images/advisors/sarah-thompson.jpeg',
            alt: 'Sarah Thompson - Travel Advisor'
        },
        specialties: [
            {
                category: 'themeParks',
                destinations: ['Walt Disney World', 'Universal Orlando', 'Disneyland California'],
                experienceYears: 8
            },
            {
                category: 'beachResorts',
                destinations: ['Caribbean', 'Hawaii'],
                experienceYears: 5
            }
        ],
        languages: ['English', 'Spanish'],
        bio: 'Theme park expert with extensive knowledge of Disney destinations and Caribbean getaways.',
        profile: {
            aboutMe: 'Growing up in Florida, I developed a deep passion for theme parks and tropical destinations. With over 8 years of experience in the travel industry, I\'ve had the privilege of helping countless families create magical memories at Disney parks and beautiful Caribbean resorts. My background in hospitality and firsthand experience living near major attractions gives me unique insights into creating perfect vacation experiences.',
            whyILoveBeingTravelAgent: 'There\'s nothing more rewarding than seeing families\' faces light up when I help them plan their dream Disney vacation or their first Caribbean adventure. I love being able to share insider tips and create personalized itineraries that make each trip special and stress-free.',
            topTravelSecret: 'The best time to visit Walt Disney World isn\'t during major holidays, but during the "shoulder season" in early May or September. You\'ll find shorter lines, better hotel rates, and still get to enjoy amazing weather!',
            favoriteDestinations: [
                'Walt Disney World, Florida',
                'St. Lucia',
                'Turks and Caicos',
                'Disneyland California'
            ],
            favoriteVacationImage: {
                url: '/images/vacation-memories/sarah-disney-castle.jpg',
                alt: 'Sarah at Disney Castle during sunset',
                description: 'Capturing the magic at Disney\'s Magic Kingdom during my favorite time of day - sunset behind Cinderella Castle.'
            },
            favoriteVacationMemory: 'My most cherished vacation memory was taking my niece to Disney World for the first time. Seeing her face light up when she met Cinderella, and the pure joy in her eyes during the fireworks show reminded me why I love what I do. It was a perfect day that ended with ice cream on Main Street while watching the night parade.',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/sarah-caribbean-beach.jpg',
                    alt: 'Beautiful sunset at a Caribbean beach',
                    description: 'Exploring the pristine beaches of Turks and Caicos'
                },
                {
                    url: '/images/vacation-memories/sarah-universal.jpg',
                    alt: 'At Universal\'s Wizarding World',
                    description: 'Living the magic at The Wizarding World of Harry Potter'
                },
                {
                    url: '/images/vacation-memories/sarah-cruise.jpg',
                    alt: 'Caribbean cruise experience',
                    description: 'Enjoying a sunset sail in the Caribbean'
                }
            ]
        }
    },
    {
        id: '2',
        firstName: 'Michael',
        lastName: 'Chen',
        fullName: 'Michael Chen',
        location: {
            country: 'Canada',
            city: 'Vancouver'
        },
        image: {
            url: '/images/advisors/michael-chen.jpg',
            alt: 'Michael Chen - Travel Advisor'
        },
        specialties: [
            {
                category: 'cruises',
                destinations: ['Alaska', 'Pacific Coast', 'Caribbean'],
                experienceYears: 10
            },
            {
                category: 'beachResorts',
                destinations: ['Maldives', 'Bali', 'Thailand'],
                experienceYears: 6
            }
        ],
        languages: ['English', 'Mandarin', 'Cantonese'],
        bio: 'Cruise specialist focusing on luxury experiences and Asian destinations.',
        profile: {
            aboutMe: 'Born and raised in Vancouver, I\'ve always been fascinated by the majestic cruise ships that dock in our harbor. This fascination led me to a career in luxury travel, specializing in cruise experiences and Asian destinations. With my multicultural background and extensive travels throughout Asia and the Pacific, I bring a unique perspective to planning unforgettable journeys.',
            whyILoveBeingTravelAgent: 'Being a travel agent allows me to bridge cultures and create experiences that transform people\'s perspectives. There\'s something magical about helping someone discover the beauty of a new culture or experience the luxury of a perfectly planned cruise vacation.',
            topTravelSecret: 'Book Alaska cruises for September. You\'ll get amazing deals, see the Northern Lights, and enjoy the stunning fall colors. Plus, the wildlife is still active before winter!',
            favoriteDestinations: [
                'Alaska Inside Passage',
                'Maldives',
                'Hong Kong',
                'Bali'
            ],
            favoriteVacationImage: {
                url: '/images/vacation-memories/michael-alaska-cruise.jpg',
                alt: 'Michael on an Alaska cruise with glaciers in background',
                description: 'Witnessing the majesty of Glacier Bay National Park from the deck of a luxury cruise ship.'
            },
            favoriteVacationMemory: 'During my first Alaska cruise, we had an unexpected encounter with a pod of humpback whales during sunset. The captain stopped the ship, and we watched in awe as these magnificent creatures breached and played in the golden light. It was a moment that reminded me of the incredible experiences travel can bring.',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/michael-maldives.jpg',
                    alt: 'Overwater bungalow in Maldives',
                    description: 'Experiencing paradise in the Maldives'
                },
                {
                    url: '/images/vacation-memories/michael-hong-kong.jpg',
                    alt: 'Hong Kong harbor at night',
                    description: 'The magical Hong Kong skyline at night'
                },
                {
                    url: '/images/vacation-memories/michael-bali-temple.jpg',
                    alt: 'Ancient temple in Bali',
                    description: 'Exploring the spiritual side of Bali'
                }
            ]
        }
    },
    {
        id: '3',
        firstName: 'Emma',
        lastName: 'Schmidt',
        fullName: 'Emma Schmidt',
        location: {
            country: 'Switzerland',
            city: 'Zurich'
        },
        image: {
            url: '/images/advisors/emma-schmidt.jpg',
            alt: 'Emma Schmidt - Travel Advisor'
        },
        specialties: [
            {
                category: 'themeParks',
                destinations: ['Disneyland Paris', 'Europa Park', 'PortAventura World'],
                experienceYears: 5
            },
            {
                category: 'cruises',
                destinations: ['Mediterranean', 'Northern Europe', 'River Cruises'],
                experienceYears: 7
            }
        ],
        languages: ['German', 'English', 'French'],
        bio: 'European theme park expert and river cruise specialist.',
        profile: {
            aboutMe: 'As a native of Zurich with a deep love for European culture and entertainment, I\'ve made it my mission to help families discover the magic of Europe\'s best theme parks and the elegance of river cruising. My background in hospitality and extensive knowledge of European destinations allows me to create unique experiences that blend adventure with cultural enrichment.',
            whyILoveBeingTravelAgent: 'I love breaking down the complexity of European travel for my clients. Whether it\'s helping them navigate Disneyland Paris or planning a perfect Rhine River cruise, seeing them experience the charm and beauty of Europe brings me immense joy.',
            topTravelSecret: 'Visit Europa Park during their Food & Wine Festival in autumn. You get shorter queues, beautiful weather, and amazing seasonal events that most tourists don\'t know about!',
            favoriteDestinations: [
                'Disneyland Paris',
                'Rhine River',
                'Europa Park',
                'French Riviera'
            ],
            favoriteVacationImage: {
                url: '/images/vacation-memories/emma-europa-park.jpg',
                alt: 'Emma at Europa Park\'s Silver Star coaster',
                description: 'Conquering Europa Park\'s Silver Star coaster - still my favorite ride after all these years!'
            },
            favoriteVacationMemory: 'My most magical memory was organizing a surprise marriage proposal for a client on a Rhine River cruise. We arranged for the boat to stop at a medieval castle at sunset, with a local orchestra playing their favorite song. The look of pure joy and surprise on both their faces made me realize how special my job truly is.',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/emma-disneyland-paris.jpg',
                    alt: 'Disneyland Paris castle in winter',
                    description: 'The enchanting Disneyland Paris during the Christmas season'
                },
                {
                    url: '/images/vacation-memories/emma-river-cruise.jpg',
                    alt: 'Rhine River cruise through castles',
                    description: 'Cruising past historic castles on the Rhine'
                },
                {
                    url: '/images/vacation-memories/emma-portaventura.jpg',
                    alt: 'PortAventura World adventure',
                    description: 'Exploring the thrills at PortAventura World'
                }
            ]
        }
    },
    {
        id: '4',
        firstName: 'Isabella',
        lastName: 'Martinez',
        fullName: 'Isabella Martinez',
        location: {
            country: 'Australia',
            city: 'Sydney'
        },
        image: {
            url: '/images/advisors/isabella-martinez.jpg',
            alt: 'Isabella Martinez - Travel Advisor'
        },
        specialties: [
            {
                category: 'beachResorts',
                destinations: ['Great Barrier Reef', 'Gold Coast', 'Fiji', 'Bora Bora'],
                experienceYears: 9
            },
            {
                category: 'cruises',
                destinations: ['South Pacific', 'New Zealand', 'Australian Coast'],
                experienceYears: 6
            }
        ],
        languages: ['English', 'Spanish'],
        bio: 'South Pacific expert specializing in luxury beach resorts and ocean cruises.',
        profile: {
            aboutMe: 'Having grown up in Sydney, the ocean has always been a part of my life. My Latin American heritage and Australian upbringing give me a unique perspective on blending adventure with relaxation. I specialize in creating luxurious beach getaways and unforgettable cruise experiences in the South Pacific region.',
            whyILoveBeingTravelAgent: 'Every day, I get to help people discover the paradise I call home. Whether it\'s planning their first snorkel at the Great Barrier Reef or arranging a luxury escape to Fiji, I love sharing the beauty of the South Pacific with others.',
            topTravelSecret: 'The best time to visit the Great Barrier Reef is during "shoulder season" (April-May). You\'ll get perfect weather, fewer tourists, and better visibility for snorkeling and diving!',
            favoriteDestinations: [
                'Great Barrier Reef',
                'Fiji',
                'Bora Bora',
                'New Zealand'
            ],
            favoriteVacationImage: {
                url: '/images/vacation-memories/isabella-great-barrier.jpg',
                alt: 'Isabella snorkeling at Great Barrier Reef',
                description: 'My perfect day: snorkeling at the Great Barrier Reef, surrounded by vibrant coral and tropical fish.'
            },
            favoriteVacationMemory: 'During a trip to the remote Yasawa Islands in Fiji, I spent an evening with a local family who taught me traditional cooking methods and shared stories of their ancestors. We ended the night with song and dance under the stars. It was a powerful reminder of how travel can create genuine connections across cultures.',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/isabella-fiji.jpg',
                    alt: 'Sunset in Fiji',
                    description: 'Magical sunset at a private island resort in Fiji'
                },
                {
                    url: '/images/vacation-memories/isabella-bora-bora.jpg',
                    alt: 'Overwater bungalow in Bora Bora',
                    description: 'Living the dream in Bora Bora'
                },
                {
                    url: '/images/vacation-memories/isabella-whitsundays.jpg',
                    alt: 'Sailing in the Whitsundays',
                    description: 'Sailing through the pristine Whitsunday Islands'
                }
            ]
        }
    },
    {
        id: '5',
        firstName: 'James',
        lastName: 'Wilson',
        fullName: 'James Wilson',
        location: {
            country: 'USA',
            city: 'Los Angeles'
        },
        image: {
            url: '/images/advisors/james-wilson.jpg',
            alt: 'James Wilson - Travel Advisor'
        },
        specialties: [
            {
                category: 'themeParks',
                destinations: ['Disneyland California', 'Universal Studios Hollywood', 'Six Flags'],
                experienceYears: 7
            },
            {
                category: 'beachResorts',
                destinations: ['Mexico', 'California Coast', 'Hawaii'],
                experienceYears: 5
            }
        ],
        languages: ['English'],
        bio: 'West Coast theme park expert and beach destination specialist.',
        profile: {
            aboutMe: 'Los Angeles has been my home for over a decade, and I\'ve turned my love for California\'s entertainment and beaches into a career. With extensive experience in both theme parks and coastal destinations, I specialize in creating perfect West Coast vacations that combine thrills with relaxation.',
            whyILoveBeingTravelAgent: 'There\'s something special about helping families experience the magic of California. Whether it\'s their first time seeing the Pacific Ocean or their tenth visit to Disneyland, I love crafting experiences that become cherished memories.',
            topTravelSecret: 'Visit Disneyland during the first two weeks of December. You get all the holiday decorations and special events, but with significantly smaller crowds than during peak holiday times!',
            favoriteDestinations: [
                'Disneyland California',
                'San Diego',
                'Santa Barbara',
                'Catalina Island'
            ],
            favoriteVacationImage: {
                url: '/images/vacation-memories/james-disney-california.jpg',
                alt: 'James at Disney California Adventure',
                description: 'Celebrating the sunset at Paradise Pier in Disney California Adventure.'
            },
            favoriteVacationMemory: 'I once arranged a multi-generational family reunion at Disneyland, with relatives coming from all over the country. Watching three generations experience the magic together, from grandparents to toddlers, was incredibly special. The grandmother told me it was the first time her entire family had been together in 15 years.',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/james-universal.jpg',
                    alt: 'Universal Studios Hollywood',
                    description: 'Behind the scenes at Universal Studios'
                },
                {
                    url: '/images/vacation-memories/james-beach.jpg',
                    alt: 'Sunset at Santa Monica',
                    description: 'Perfect evening at Santa Monica Beach'
                },
                {
                    url: '/images/vacation-memories/james-catalina.jpg',
                    alt: 'Catalina Island adventure',
                    description: 'Exploring the beauty of Catalina Island'
                }
            ]
        }
    }
];