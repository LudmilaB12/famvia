'use client';
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    // Cierra dropdowns al hacer click fuera
    React.useEffect(() => {
        const handleClick = (e) => {
            if (!e.target.closest(`.${styles.navbarDropdown}`)) {
                setDropdown1(false);
                setDropdown2(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <img src="/logo.svg" alt="Logo" className={styles.navbarLogoImg} />
            </div>
            <ul className={styles.navbarLinks}>
                <li>
                    <a href="#beach-resorts" className={styles.navbarLink}>Beach Resorts</a>
                </li>
                <li>
                    <a href="#cruises" className={styles.navbarLink}>Cruises</a>
                </li>
                <li>
                    <a href="#theme-parks" className={styles.navbarLink}>Theme Parks</a>
                </li>
                <li className={styles.navbarDropdown}>
                    <button
                        className={styles.navbarDropdownBtn}
                        onClick={() => {
                            setDropdown1((d) => !d);
                            setDropdown2(false);
                        }}
                        aria-expanded={dropdown1}
                        aria-haspopup="true"
                    >
                        Vacation 101
                        <ChevronDown
                            size={20}
                            style={{
                                transition: "transform 0.3s",
                                transform: dropdown1 ? "rotate(180deg)" : "none"
                            }}
                        />
                    </button>
                    {dropdown1 && (
                        <ul className={styles.navbarDropdownMenu}>
                            <li><a href="#planning" className={styles.navbarDropdownItem}>Planning Your Trip</a></li>
                            <li><a href="#why-famvia" className={styles.navbarDropdownItem}>Why Use Famvia Travel</a></li>
                            <li><a href="#rewards" className={styles.navbarDropdownItem}>Rewards Pass</a></li>
                            <li><a href="#advisor" className={styles.navbarDropdownItem}>Find Your Travel Advisor</a></li>
                        </ul>
                    )}
                </li>
                <li className={styles.navbarDropdown}>
                    <button
                        className={styles.navbarDropdownBtn}
                        onClick={() => {
                            setDropdown2((d) => !d);
                            setDropdown1(false);
                        }}
                        aria-expanded={dropdown2}
                        aria-haspopup="true"
                    >
                        About Us
                        <ChevronDown
                            size={20}
                            style={{
                                transition: "transform 0.3s",
                                transform: dropdown2 ? "rotate(180deg)" : "none"
                            }}
                        />
                    </button>
                    {dropdown2 && (
                        <ul className={styles.navbarDropdownMenu}>
                            <li><a href="#about-company" className={styles.navbarDropdownItem}>About Company</a></li>
                            <li><a href="#our-team" className={styles.navbarDropdownItem}>Our Team</a></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;