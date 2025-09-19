'use client';
import Loader from '../../../components/ui/Loader/Loader';
import styles from './loading.module.scss';

export default function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <Loader />
        </div>
    );
}
