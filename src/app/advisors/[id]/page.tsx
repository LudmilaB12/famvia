"use client";
import { useAdvisors } from "@/src/hooks/useAdvisors";
import { notFound } from "next/navigation";
import styles from "./page.module.scss";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/src/components/ui/Loader/Loader";
import VacationForm from "@/src/components/advisors/VacationForm/VacationForm";
import AdvisorsList from "@/src/components/advisors/AdvisorsList/AdvisorsList";
import JoinTeam from "@/src/components/ui/JoinTeam/JoinTeam";

interface AdvisorPageProps {
  params: {
    id: string;
  };
}

export default function AdvisorPage({ params: { id } }: AdvisorPageProps) {
  const { getAdvisorById, isLoading, error } = useAdvisors();
  const advisor = getAdvisorById(id);

  const scrollToForm = () => {
    const form = document.getElementById("vacation-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  if (!advisor) return notFound();

  return (
    <div>
    <div className={styles.advisorProfile}>
      <div className={styles.banner}>
        <Image
          src={advisor.profile.vacationMemories[0].url}
          alt="Profile banner"
          className={styles.bannerImage}
          layout="responsive"
          width={1200}
          height={400}
        />
      </div>
      <div id="mainContent">
        <div id="profile" className={styles.contentWrapper}>
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
                  <span>
                    {advisor.location.city}, {advisor.location.country}
                  </span>
                </div>
                <p className={styles.bio}>
                  Disney loving, homeschooling mom just living her dream helping
                  plan magical vacations!
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
                <button onClick={scrollToForm} className={styles.planButton}>
                  Let me plan your vacation!
                </button>
              </div>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <section className={styles.profileTab}>
                <h2>Profile</h2>
            </section>
            <section className={styles.bioDetails}>
              <div className={styles.aboutMe}>
                <h2>About Me ✌️</h2>
                <p>{advisor.profile.aboutMe}</p>
              </div>
              <div className={styles.bioGrid}>
                <div className={styles.bioCard}>
                  <h3>
                    Why I love being a Travel Agent?
                    <span role="img" aria-label="heart">
                      ❤️
                    </span>
                  </h3>
                  <p>{advisor.profile.whyILoveBeingTravelAgent}</p>
                </div>

                <div className={styles.bioCard}>
                  <h3>
                    How I take care of my guests?
                    <span role="img" aria-label="sparkles">
                      ✨
                    </span>
                  </h3>
                  <p>{advisor.profile.aboutMe}</p>
                </div>

                <div className={styles.bioCard}>
                  <h3>
                    My Top Travel Secret
                    <span role="img" aria-label="wink">
                      😉
                    </span>
                  </h3>
                  <p>{advisor.profile.topTravelSecret}</p>
                </div>

                <div className={styles.bioCard}>
                  <h3>
                    My favorite destinations
                    <span role="img" aria-label="castle">
                      🏰
                    </span>
                  </h3>
                  <ul className={styles.favoritesList}>
                    {advisor.profile.favoriteDestinations.map(
                      (destination, index) => (
                        <li key={index}>{destination}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.favoriteMemory}>
              <div className={styles.memoryCard}>
                <Image
                  src={advisor.profile.favoriteVacationImage.url}
                  alt={advisor.profile.favoriteVacationImage.alt}
                  layout="responsive"
                  width={1200}
                  height={400}
                />
                <div className={styles.memoryContent}>
                  <h2>My favorite Family Vacation Memory</h2>
                  <p>{advisor.profile.favoriteVacationMemory}</p>
                </div>
              </div>
            </section>

            <section className={styles.vacationMemories}>
              <div className={styles.memoriesHeader}>
                <h2>
                  My Vacation Memories{" "}
                  <span role="img" aria-label="camera">
                    📸
                  </span>
                </h2>
                <p>Click the pictures to zoom in</p>
              </div>
              <div className={styles.memoriesGrid}>
                {advisor.profile.vacationMemories.map((memory, index) => (
                  <div key={index} className={styles.memoryCard}>
                    <Image src={memory.url} alt={memory.alt} layout="responsive" width={1200} height={400} />
                  </div>
                ))}
              </div>
            </section>
            <section className={styles.vacationFormSection}>
              <VacationForm />
            </section>
          </div>
    </div>
        </div>
          <div id="sideContent" >
            <section>
              <AdvisorsList currentAdvisorId={id} />
            </section>

            <JoinTeam />
          </div>
      </div>
    </div>
  );
}
