'use client';
import styles from './Loader.module.scss';

export default function Loader() {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>
            <p className={styles.text}>Finding your perfect travel advisor...</p>
        </div>
    );
}