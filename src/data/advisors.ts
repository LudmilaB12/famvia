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
                destinations: ['Disney World', 'Universal Orlando', 'Universal Hollywood'],
                experienceYears: 8
            },
            {
                category: 'beachResorts',
                destinations: ['Beaches Resorts', 'Hawaii Vacations'],
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
                url: '/images/vacation-memories/sarah-disney-castle.jpeg',
                alt: 'Sarah at Disney Castle during sunset',
                description: 'Capturing the magic at Disney\'s Magic Kingdom during my favorite time of day - sunset behind Cinderella Castle.'
            },
            favoriteVacationMemory: 'My most cherished vacation memory was taking my niece to Disney World for the first time. Seeing her face light up when she met Cinderella, and the pure joy in her eyes during the fireworks show reminded me why I love what I do. It was a perfect day that ended with ice cream on Main Street while watching the night parade.',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/sarah-caribbean-beach.jpeg',
                    alt: 'Beautiful sunset at a Caribbean beach',
                    description: 'Exploring the pristine beaches of Turks and Caicos'
                },
                {
                    url: '/images/vacation-memories/sarah-universal.jpeg',
                    alt: 'At Universal\'s Wizarding World',
                    description: 'Living the magic at The Wizarding World of Harry Potter'
                },
                {
                    url: '/images/vacation-memories/sarah-cruise.jpeg',
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
            url: '/images/advisors/michael-chen.jpeg',
            alt: 'Michael Chen - Travel Advisor'
        },
        specialties: [
            {
                category: 'cruises',
                destinations: ['Norwegian Cruise Line', 'Royal Caribbean International', 'Celebrity Cruise Line'],
                experienceYears: 10
            },
            {
                category: 'beachResorts',
                destinations: ['Maldives Resorts', 'Sandals Resorts', 'Elite Islands Resorts'],
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
                url: '/images/vacation-memories/michael-alaska-cruise.jpeg',
                alt: 'Michael on an Alaska cruise with glaciers in background',
                description: 'Witnessing the majesty of Glacier Bay National Park from the deck of a luxury cruise ship.'
            },
            favoriteVacationMemory: 'During my first Alaska cruise, we had an unexpected encounter with a pod of humpback whales during sunset. The captain stopped the ship, and we watched in awe as these magnificent creatures breached and played in the golden light. It was a moment that reminded me of the incredible experiences travel can bring.',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/michael-maldives.jpeg',
                    alt: 'Overwater bungalow in Maldives',
                    description: 'Experiencing paradise in the Maldives'
                },
                {
                    url: '/images/vacation-memories/michael-hong-kong.jpeg',
                    alt: 'Hong Kong harbor at night',
                    description: 'The magical Hong Kong skyline at night'
                },
                {
                    url: '/images/vacation-memories/michael-bali-temple.jpeg',
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
            url: '/images/advisors/emma-schmidt.jpeg',
            alt: 'Emma Schmidt - Travel Advisor'
        },
        specialties: [
            {
                category: 'themeParks',
                destinations: ['Disneyland', 'LEGOLAND', 'Universal Hollywood'],
                experienceYears: 5
            },
            {
                category: 'cruises',
                destinations: ['Viking Cruises', 'A-ROSA River Cruises', 'AMA Waterways'],
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
                url: '/images/vacation-memories/emma-europa-park.jpeg',
                alt: 'Emma at Europa Park\'s Silver Star coaster',
                description: 'Conquering Europa Park\'s Silver Star coaster - still my favorite ride after all these years!'
            },
            favoriteVacationMemory: 'My most magical memory was organizing a surprise marriage proposal for a client on a Rhine River cruise. We arranged for the boat to stop at a medieval castle at sunset, with a local orchestra playing their favorite song. The look of pure joy and surprise on both their faces made me realize how special my job truly is.',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/emma-disneyland-paris.jpeg',
                    alt: 'Disneyland Paris castle in winter',
                    description: 'The enchanting Disneyland Paris during the Christmas season'
                },
                {
                    url: '/images/vacation-memories/emma-river-cruise.jpeg',
                    alt: 'Rhine River cruise through castles',
                    description: 'Cruising past historic castles on the Rhine'
                },
                {
                    url: '/images/vacation-memories/emma-portaventura.jpeg',
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
            url: '/images/advisors/isabella-martinez.jpeg',
            alt: 'Isabella Martinez - Travel Advisor'
        },
        specialties: [
            {
                category: 'beachResorts',
                destinations: ['Disney Aulani', 'Beaches Resorts', 'Hawaii Vacations'],
                experienceYears: 9
            },
            {
                category: 'cruises',
                destinations: ['Disney Cruise Line', 'Princess Cruises', 'MSC Cruises'],
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
                url: '/images/vacation-memories/isabella-great-barrier.jpeg',
                alt: 'Isabella snorkeling at Great Barrier Reef',
                description: 'My perfect day: snorkeling at the Great Barrier Reef, surrounded by vibrant coral and tropical fish.'
            },
            favoriteVacationMemory: 'During a trip to the remote Yasawa Islands in Fiji, I spent an evening with a local family who taught me traditional cooking methods and shared stories of their ancestors. We ended the night with song and dance under the stars. It was a powerful reminder of how travel can create genuine connections across cultures.',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/isabella-fiji.jpeg',
                    alt: 'Sunset in Fiji',
                    description: 'Magical sunset at a private island resort in Fiji'
                },
                {
                    url: '/images/vacation-memories/isabella-bora-bora.jpeg',
                    alt: 'Overwater bungalow in Bora Bora',
                    description: 'Living the dream in Bora Bora'
                },
                {
                    url: '/images/vacation-memories/isabella-whitsundays.jpeg',
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
            url: '/images/advisors/james-wilson.jpeg',
            alt: 'James Wilson - Travel Advisor'
        },
        specialties: [
            {
                category: 'themeParks',
                destinations: ['Disney World', 'Universal Orlando', 'Universal Hollywood'],
                experienceYears: 7
            },
            {
                category: 'beachResorts',
                destinations: ['Hawaii Vacations', 'Elite Islands Resorts', 'Sandals Resorts'],
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
                url: '/images/vacation-memories/james-disney-california.jpeg',
                alt: 'James at Disney California Adventure',
                description: 'Celebrating the sunset at Paradise Pier in Disney California Adventure.'
            },
            favoriteVacationMemory: 'I once arranged a multi-generational family reunion at Disneyland, with relatives coming from all over the country. Watching three generations experience the magic together, from grandparents to toddlers, was incredibly special. The grandmother told me it was the first time her entire family had been together in 15 years.',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/james-universal.jpeg',
                    alt: 'Universal Studios Hollywood',
                    description: 'Behind the scenes at Universal Studios'
                },
                {
                    url: '/images/vacation-memories/james-beach.jpeg',
                    alt: 'Sunset at Santa Monica',
                    description: 'Perfect evening at Santa Monica Beach'
                },
                {
                    url: '/images/vacation-memories/james-catalina.jpeg',
                    alt: 'Catalina Island adventure',
                    description: 'Exploring the beauty of Catalina Island'
                }
            ]
        }
    },
    {
        id: '6',
        firstName: 'Sofia',
        lastName: 'Patel',
        fullName: 'Sofia Patel',
        location: {
            country: 'United Kingdom',
            city: 'London'
        },
        image: {
            url: '/images/advisors/sofia-patel.jpeg',
            alt: 'Sofia Patel - Travel Advisor'
        },
        specialties: [
            {
                category: 'themeParks',
                destinations: ['Disneyland Paris', 'Europa Park', 'LEGOLAND'],
                experienceYears: 6
            },
            {
                category: 'cruises',
                destinations: ['Royal Caribbean International', 'MSC Cruises', 'Celebrity Cruise Line'],
                experienceYears: 4
            }
        ],
        languages: ['English', 'Hindi', 'French'],
        bio: 'European family travel expert specializing in theme parks and Mediterranean cruises.',
        profile: {
            aboutMe: 'With my multicultural background and extensive travels across Europe, I bring a unique perspective to family vacation planning. My passion lies in helping families discover the perfect blend of cultural experiences and entertainment.',
            whyILoveBeingTravelAgent: 'Creating itineraries that allow families to experience both the magical world of theme parks and the rich cultural heritage of Europe brings me immense satisfaction. Every trip is an opportunity to create lasting memories.',
            topTravelSecret: 'Book Disneyland Paris for late January. The crowds are minimal, prices are lower, and the park has a special winter charm that many miss!',
            favoriteDestinations: [
                'Disneyland Paris',
                'Mediterranean Coast',
                'British Theme Parks',
                'Greek Islands'
            ],
            favoriteVacationImage: {
                url: '/images/vacation-memories/james-disney-california.jpeg',
                alt: 'Sofia at Disneyland Paris',
                description: 'Experiencing the magic of Disneyland Paris during its 30th anniversary celebration.'
            },
            favoriteVacationMemory: 'My most memorable experience was organizing a surprise multi-generational family trip to Disneyland Paris. Three generations, five different countries, all coming together for a magical week. The grandparents relived their youth, and the children experienced the magic for the first time. Pure joy!',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/sofia-greek-cruise.jpeg',
                    alt: 'Mediterranean Cruise',
                    description: 'Sunset sailing in the Mediterranean'
                },
                {
                    url: '/images/vacation-memories/sofia-legoland.jpeg',
                    alt: 'LEGOLAND Windsor',
                    description: 'Fun day at LEGOLAND Windsor'
                },
                {
                    url: '/images/vacation-memories/sofia-europa.jpeg',
                    alt: 'Europa Park adventures',
                    description: 'Exploring the wonders of Europa Park'
                }
            ]
        }
    },
    {
        id: '7',
        firstName: 'Carlos',
        lastName: 'Ruiz',
        fullName: 'Carlos Ruiz',
        location: {
            country: 'Mexico',
            city: 'Cancun'
        },
        image: {
            url: '/images/advisors/carlos-ruiz.jpeg',
            alt: 'Carlos Ruiz - Travel Advisor'
        },
        specialties: [
            {
                category: 'beachResorts',
                destinations: ['Cancun Resorts', 'Riviera Maya', 'Los Cabos'],
                experienceYears: 10
            },
            {
                category: 'cruises',
                destinations: ['Carnival Cruise Line', 'Norwegian Cruise Line', 'Royal Caribbean International'],
                experienceYears: 5
            }
        ],
        languages: ['Spanish', 'English'],
        bio: 'Caribbean and Mexico resort specialist with extensive local knowledge.',
        profile: {
            aboutMe: 'Born and raised in Cancun, I have an intimate knowledge of Mexico\'s best resorts and hidden gems. My decade of experience in luxury resorts helps me create unforgettable beach vacations.',
            whyILoveBeingTravelAgent: 'I love sharing the beauty and warmth of my homeland with visitors, helping them discover not just the beaches, but the rich culture and hospitality of Mexico.',
            topTravelSecret: 'Visit Riviera Maya in May - perfect weather, fewer crowds, and you might catch the sea turtle nesting season!',
            favoriteDestinations: [
                'Cancun',
                'Tulum',
                'Los Cabos',
                'Caribbean Islands'
            ],
            favoriteVacationImage: {
                url: '/images/vacation-memories/carlos-tulum.jpeg',
                alt: 'Carlos at Tulum ruins',
                description: 'Sharing the ancient wonders of Tulum with visitors.'
            },
            favoriteVacationMemory: 'One of my most treasured memories was guiding a family through their first snorkeling experience in a secluded cenote. The look of wonder on their faces as they discovered the underwater world, followed by an authentic Mayan lunch prepared by local families, created a perfect blend of adventure and cultural immersion.',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/carlos-beach.jpeg',
                    alt: 'Pristine Mexican beach',
                    description: 'Perfect day at a hidden beach in Los Cabos'
                },
                {
                    url: '/images/vacation-memories/carlos-cruise.jpeg',
                    alt: 'Caribbean cruise experience',
                    description: 'Exploring the Caribbean by sea'
                },
                {
                    url: '/images/vacation-memories/carlos-cenote.jpeg',
                    alt: 'Swimming in cenote',
                    description: 'Adventure at a secret cenote'
                }
            ]
        }
    },
    {
        id: '8',
        firstName: 'Maya',
        lastName: 'Wong',
        fullName: 'Maya Wong',
        location: {
            country: 'Singapore',
            city: 'Singapore'
        },
        image: {
            url: '/images/advisors/maya-wong.jpeg',
            alt: 'Maya Wong - Travel Advisor'
        },
        specialties: [
            {
                category: 'themeParks',
                destinations: ['Universal Studios Singapore', 'Tokyo Disneyland', 'Hong Kong Disneyland'],
                experienceYears: 7
            },
            {
                category: 'beachResorts',
                destinations: ['Bali Resorts', 'Thailand Resorts', 'Maldives Resorts'],
                experienceYears: 5
            }
        ],
        languages: ['English', 'Mandarin', 'Malay'],
        bio: 'Asian theme parks and luxury resort specialist with expertise in family-friendly destinations.',
        profile: {
            aboutMe: 'Based in Singapore, I specialize in creating perfect Asian getaways that combine theme park excitement with luxury resort relaxation. My knowledge of Asian cultures and destinations helps families navigate and enjoy the best of both worlds.',
            whyILoveBeingTravelAgent: 'Helping families discover the unique charm of Asian theme parks and resorts, while ensuring they experience authentic local culture and traditions.',
            topTravelSecret: 'Visit Tokyo Disneyland during early December - you\'ll experience the magical Christmas decorations with smaller crowds than peak season!',
            favoriteDestinations: [
                'Tokyo Disney Resort',
                'Sentosa Island',
                'Bali',
                'Phuket'
            ],
            favoriteVacationImage: {
                url: '/images/vacation-memories/maya-tokyo.jpeg',
                alt: 'Maya at Tokyo Disneyland',
                description: 'Creating magical moments at Tokyo Disneyland.'
            },
            favoriteVacationMemory: 'My most unforgettable experience was helping a family with a child on the autism spectrum enjoy their first theme park visit at Tokyo DisneySea. We carefully planned every detail, used the disability access services, and created a sensory-friendly itinerary. Seeing their joy and relief as they experienced the park comfortably was incredibly rewarding.',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/maya-bali.jpeg',
                    alt: 'Luxury resort in Bali',
                    description: 'Sunset at a luxury Bali resort'
                },
                {
                    url: '/images/vacation-memories/maya-sentosa.jpeg',
                    alt: 'Universal Studios Singapore',
                    description: 'Fun at Universal Studios Singapore'
                },
                {
                    url: '/images/vacation-memories/maya-phuket.jpeg',
                    alt: 'Thailand beach resort',
                    description: 'Paradise found in Phuket'
                }
            ]
        }
    },
    {
        id: '9',
        firstName: 'Liam',
        lastName: 'O\'Connor',
        fullName: 'Liam O\'Connor',
        location: {
            country: 'Ireland',
            city: 'Dublin'
        },
        image: {
            url: '/images/advisors/liam-oconnor.jpeg',
            alt: 'Liam O\'Connor - Travel Advisor'
        },
        specialties: [
            {
                category: 'cruises',
                destinations: ['Viking Cruises', 'AMA Waterways', 'Cunard Line'],
                experienceYears: 12
            },
            {
                category: 'themeParks',
                destinations: ['Disneyland Paris', 'Europa Park', 'Alton Towers'],
                experienceYears: 4
            }
        ],
        languages: ['English', 'Irish'],
        bio: 'European river cruise expert and family adventure specialist.',
        profile: {
            aboutMe: 'With over a decade of experience in luxury river cruising and European travel, I specialize in creating immersive family adventures that blend cultural experiences with entertainment.',
            whyILoveBeingTravelAgent: 'Nothing beats the feeling of helping families discover the magic of Europe, whether it\'s their first river cruise or their annual theme park adventure.',
            topTravelSecret: 'Book a Christmas Market river cruise for early December instead of late December - better weather, fewer crowds, and all the festive charm!',
            favoriteDestinations: [
                'Rhine River Valley',
                'Scottish Highlands',
                'Paris',
                'Lake Como'
            ],
            favoriteVacationImage: {
                url: '/images/vacation-memories/liam-river.jpeg',
                alt: 'Liam on a river cruise',
                description: 'Experiencing the magic of a Rhine River cruise.'
            },
            favoriteVacationMemory: 'During a Christmas Market river cruise, I arranged for a family to have a private cooking class with a local chef in a medieval castle along the Rhine. Together, they learned to make traditional German Christmas cookies while snow fell outside the castle windows. The evening ended with carols and Glühwein by the fireplace - pure magic!',
            vacationMemories: [
                {
                    url: '/images/vacation-memories/liam-paris.jpeg',
                    alt: 'Paris adventures',
                    description: 'Magical evening in Paris'
                },
                {
                    url: '/images/vacation-memories/liam-alton.jpeg',
                    alt: 'Alton Towers theme park',
                    description: 'Thrills at Alton Towers'
                },
                {
                    url: '/images/vacation-memories/liam-scotland.jpeg',
                    alt: 'Scottish Highlands tour',
                    description: 'Exploring the Scottish Highlands'
                }
            ]
        }
    }
];