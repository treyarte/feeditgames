'use client';
import { useEffect } from 'react';
import styles from './nav-mobile.module.css';
import Link from 'next/link';

type Props = {
    isMenuOpen:boolean;
    toggleMenu:() => void;
}

export default function NavMobile({isMenuOpen, toggleMenu}:Props) {

    //When active disable scrolling because the menu should be out
    useEffect(() => {
        if(isMenuOpen) {
            document.body.style.overflow = 'hidden'
            return;
        }

        document.body.style.overflow = 'auto';

    }, [isMenuOpen]);

    /** 
    * Get styles for when the mobile menu is open
    * @returns 
    */
   const getActiveStyle = () => {
       return isMenuOpen ? styles["is-open"] : "";
   }

   return (
    <nav className={`${styles["mobile-nav"]} ${getActiveStyle()}`}>
        <ul className={styles["mobile-nav-links"]}>
            <li>
                <a 
                    onClick={toggleMenu} 
                    href="/feed"
                >
                    News Feed
                </a>
            </li>
            <li>
                <a 
                    onClick={toggleMenu} 
                    href="#experience"
                >
                    Upcoming Games
                </a>
            </li>
            <li>
                <a 
                    onClick={toggleMenu} 
                    href="#projects"
                >
                    Reviews
                </a>
            </li>
            <li>
                <a 
                    onClick={toggleMenu} 
                    href="#contact"
                >
                    User Topics
                </a>
            </li>
            <li>
                <a 
                    onClick={toggleMenu} 
                    href="#contact"
                >
                    Trending Games
                </a>
            </li>
            <li>
                <Link
                    onClick={toggleMenu} 
                    href='/login'
                >
                    Login
                </Link>
            </li>
            <li>
                <Link
                    onClick={toggleMenu} 
                    href='/register'
                >
                    Sign Up
                </Link>
            </li>
        </ul>
    </nav>
   )
}