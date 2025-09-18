'use client';
import { useAdvisors } from '@/src/hooks/useAdvisors';
import { notFound } from 'next/navigation';
import styles from './page.module.scss';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/src/components/ui/Navbar/Navbar';

interface AdvisorPageProps {
    params: {
        id: string;
    };
}

export default function AdvisorPage({ params: { id } }: AdvisorPageProps) {
    const { getAdvisorById, isLoading, error } = useAdvisors();
    const advisor = getAdvisorById(id);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!advisor) return notFound();

    return (
        <div className={styles.advisorProfile}>
        <Navbar />
            <div className={styles.banner}>
                <img 
                    src={advisor.profile.vacationMemories[0].url} 
                    alt="Profile banner"
                    className={styles.bannerImage}
                />
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.leftColumn}>
                    <div className={styles.profileCard}>
                        <div className={styles.profileImageContainer}>
                        <img 
                            src={advisor.image.url} 
                            alt={advisor.image.alt} 
                            className={styles.profileImage}
                        />
                    </div>
                    <div className={styles.profileInfo}>
                        <h1>{advisor.fullName}</h1>
                        <div className={styles.location}>
                            <MapPin size={16} />
                            <span>{advisor.location.city}, {advisor.location.country}</span>
                        </div>
                        <p className={styles.bio}>
                            Disney loving, homeschooling mom just living her dream helping plan magical vacations!
                        </p>
                        <div className={styles.socialLinks}>
                            <Link href="#" className={styles.socialButton}>
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className={styles.socialButton}>
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className={styles.socialButton}>
                                <Mail size={20} />
                            </Link>
                        </div>
                        <button className={styles.planButton}>
                            Let me plan your vacation!
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.rightColumn}>

            <section className={styles.bioDetails}>
                <div>
                    <h2>About Me ✌️</h2>
                    <p>{advisor.profile.aboutMe}</p>
                </div>
                <div className={styles.bioGrid}>
                    <div className={styles.bioCard}>
                        <h3>
                            Why I love being a Travel Agent?
                            <span role="img" aria-label="heart">❤️</span>
                        </h3>
                        <p>{advisor.profile.whyILoveBeingTravelAgent}</p>
                    </div>

                    <div className={styles.bioCard}>
                        <h3>
                            How I take care of my guests?
                            <span role="img" aria-label="sparkles">✨</span>
                        </h3>
                        <p>{advisor.profile.aboutMe}</p>
                    </div>

                    <div className={styles.bioCard}>
                        <h3>
                            My Top Travel Secret
                            <span role="img" aria-label="wink">😉</span>
                        </h3>
                        <p>{advisor.profile.topTravelSecret}</p>
                    </div>

                    <div className={styles.bioCard}>
                        <h3>
                            My favorite destinations
                            <span role="img" aria-label="castle">🏰</span>
                        </h3>
                        <ul className={styles.favoritesList}>
                            {advisor.profile.favoriteDestinations.map((destination, index) => (
                                <li key={index}>{destination}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.favoriteMemory}>
                <h2>Favorite Vacation Memory</h2>
                <div className={styles.memoryCard}>
                    <img 
                        src={advisor.profile.favoriteVacationImage.url} 
                        alt={advisor.profile.favoriteVacationImage.alt}
                    />
                    <p>{advisor.profile.favoriteVacationMemory}</p>
                </div>
            </section>

            <section className={styles.vacationMemories}>
                <h2>Vacation Memories</h2>
                <div className={styles.memoriesGrid}>
                    {advisor.profile.vacationMemories.map((memory, index) => (
                        <div key={index} className={styles.memoryCard}>
                            <img src={memory.url} alt={memory.alt} />
                            {memory.description && <p>{memory.description}</p>}
                        </div>
                    ))}
                </div>
            </section>
        </div>
        </div>
    </div>
    );

}
