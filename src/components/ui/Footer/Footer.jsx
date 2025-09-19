

'use client';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wave}>
                <img src="/svg/deco7.svg" alt="" aria-hidden="true" />
            </div>
            <div className={styles.footerContent}>
                <div className={styles.footerColumns}>
                    <div className={styles.column}>
                        <h3>Book a Trip</h3>
                        <ul>
                            <li><Link href="/beach-resorts">Beach Resorts</Link></li>
                            <li><Link href="/cruises">Cruises</Link></li>
                            <li><Link href="/theme-parks">Theme Parks</Link></li>
                            <li><Link href="/find-agent">Find a Travel Agent</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Our Company</h3>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/become-agent">Become a Travel Agent</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms and Conditions</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <img src="/logo.svg" alt="Famvia" className={styles.logo} />
                    <div className={styles.contactInfo}>
                        <p>Find us @ famviatravel</p>
                        <div className={styles.socialLinks}>
                            <Facebook size={20} />
                            <Instagram size={20} />
                            <Mail size={20} />
                        </div>
                    </div>
                    <p className={styles.copyright}>© 2025 | Famvia Travel, Inc. - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;