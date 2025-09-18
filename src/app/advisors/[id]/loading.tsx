'use client';
import styles from './loading.module.scss';

export default function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingContent}>
                <div className={styles.loadingSpinner} />
                <p>Loading advisor profile...</p>
            </div>
        </div>
    );
}
