import React, { useState } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { redirect } from 'next/navigation'

import styles from '../styles/styles.module.css';
import Navbar from '@/components/Navbar';

const pictureLink: string = '../pic/IDE.png';

function searchFunction() {
  // Your search logic here
  console.log('Searching...');
}

function ThingToRead() {
  console.log('Harding to thing to read');
  return <Link href="/things-to-read"></Link>;
}

const IndexPage: React.FC = () => {

  // State for the list of interests
  const [interests, setInterests] = useState<string[]>([
    "Programming",
    "Reading",
    "Traveling",
    "Photography",
    "Cooking"
  ]);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if Ctrl key and 'F' key are pressed simultaneously
      if (event.ctrlKey && event.key === 'f') {
        // Call searchFunction when Ctrl + F is pressed
        searchFunction();
      }
      if (event.key === 'h') {
        // Call searchFunction when h is pressed
        ThingToRead();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  // Function to shuffle the list of interests
  const shuffleInterests = () => {
    const shuffledInterests = [...interests];
    for (let i = shuffledInterests.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledInterests[i], shuffledInterests[j]] = [shuffledInterests[j], shuffledInterests[i]];
    }
    setInterests(shuffledInterests);
    console.log('changing...');
  };


  return (
    <div className={styles.container}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7268938545487337"
          crossOrigin="anonymous"></script>
      </head>
      <Navbar />
      <h1 className={styles['welcome-message']}>Welcome to My Website!</h1>
      <p className={styles['intro']}>
        Welcome to my website! I&apos;m Houming Ge, and I&apos;m passionate about Computer science.
      </p>
      <img src="/IDE.jpg" alt="Your Image" className={styles['profile-image']} />
      <h2 className={styles['interests']}>Interests:</h2>
      <ul className={styles['interests-list']}>
        {/* Display the list of interests */}
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <button onClick={shuffleInterests} className={styles.button}>Shuffle Interests
      </button>
      <br></br>
      <br></br>
      <button className={styles.button}>
        <Link href="/things-to-read">
          Navigate to Other Page
        </Link>
      </button>
    </div>
  );

};

export default IndexPage;
