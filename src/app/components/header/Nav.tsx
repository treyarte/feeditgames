'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import styles from './nav.module.css';
import HamburgerBtn from "../buttons/MobileNavButton";
import NavMobile from "./NavMobile";


type Props = {
    session:null;
}

export default function Nav({session}:Props) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
  
    /**
     * Toggles the mobile menu open or close
     * @returns 
     */
    const toggleMobileMenu = () => (setIsMobileOpen(!isMobileOpen));

    return (
        <>
        {/* <nav className={styles.nav}> */}
        <nav className={styles.nav}>
            <div className={styles.navLogo}>
                <Link href='/'>
                    <Image 
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width: '100%', height: 'auto'}}
                        src={'/images/logos/logo.png'}
                        alt='Logo'
                    />
                </Link>
            </div>
          <ul className={styles.navLinks}>
            <li>
              <Link href='/feed'>
                <span className='display-tablet'>Feed</span>
                <span className='display-desktop'>News Feed</span>
              </Link>
            </li>
            <li>
              <Link href='#experience'>
                <span className='display-tablet'>Upcoming</span>
                <span className='display-desktop'>Upcoming Games</span>
              </Link>
            </li>
            <li>
              <Link href='#projects'>Reviews</Link>
            </li>
            <li>
              <Link href='#contact'>
                <span className='display-tablet'>Topics</span>
                <span className='display-desktop'>User Topics</span>
              </Link>
            </li>
            <li>
              <Link href='#contact'>
                <span className='display-tablet'>Trending</span>
                <span className='display-desktop'>Trending Games</span>
              </Link>
            </li>
          </ul>
          <div className={styles.navLinks}>
            {session ? (
              <>
                {/* <div>Hello, {session.user.name}</div>
                <SignOutBtn /> */}
              </>
            ) : (
              <>
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
              </>
            )}
          </div>
          <HamburgerBtn
            isMenuOpen={isMobileOpen}
            toggleMenu={toggleMobileMenu}
          />
        </nav>
        <NavMobile
          isMenuOpen={isMobileOpen}
          toggleMenu={toggleMobileMenu}
        />
        </>
    );
}