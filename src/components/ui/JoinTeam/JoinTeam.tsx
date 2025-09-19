"use client";
import styles from "./JoinTeam.module.scss";

export default function JoinTeam() {
  return (
    <section className={styles.joinTeamSection}>
      <div className={styles.joinTeamContent}>
        <div>
          <h1>Want to join the best team in travel?</h1>
          <p>
            Check out <span>VacationLab.io</span>, our Travel Agent hub where we
            have all the tools to take you and your travel biz from zero to
            hero.
          </p>
          <a
            href="https://vacationlab.io"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitButton}
          >
            Visit VacationLab ↗
          </a>
        </div>
        <img
          src="/svg/deco6.svg"
          alt=""
          className={styles.decorativeImage}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
