// Import necessary modules
import React from 'react';
import styles from '../styles/ThingsToRead.module.css'
import Link from 'next/link';
import Navbar from '@/components/Navbar';

// Define the ThingsToRead component
const ThingsToRead: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* Apply the heading style */}
      <h1 className={styles.heading}>Things to Read</h1>
      <ul className={styles['link-list']}>
        {/* List of links with applied styles */}
        <li className={styles['link-list-item']}><a className={styles.link} href="https://www.google.com">Google</a></li>
        <li className={styles['link-list-item']}><a className={styles.link} href="https://www.wikipedia.org">Wikipedia</a></li>
        <li className={styles['link-list-item']}><a className={styles.link} href="https://tryhackme.com/">TryHackMe</a></li>
        <li className={styles['link-list-item']}><a className={styles.link} href="https://www.torproject.org/">Tor</a></li>
        <li className={styles['link-list-item']}><a className={styles.link} href="https://thehiddenwiki.org/">Hidden Wiki</a></li>
        <li className={styles['link-list-item']}><a className={styles.link} href="https://www.virustotal.com/gui/home/upload">VirusTotal</a></li>
        <li className={styles['link-list-item']}><a className={styles.link} href="https://myanimelist.net/">MyAnimeList</a></li>
        <li className={styles['link-list-item']}><a className={styles.link} href="https://ublockorigin.com/">uBlock Origin</a></li>
        <li className={styles['link-list-item']}><a className={styles.link} href="https://www.tampermonkey.net/">Tampermonkey</a></li>
        <li className={styles['link-list-item']}><a className={styles.link} href="https://anydesk.com/en">AnyDesk</a></li>
        <li className={styles['link-list-item']}><a className={styles.link} href="https://code.visualstudio.com/">Visual Studio Code</a></li>
      </ul>

      <Link href="/">
        <button className={styles.button}>

          Navigate to Home Page

        </button>
      </Link>
    </div>
  );
};

// Export the component
export default ThingsToRead;
