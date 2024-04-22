import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/styles.module.css';

const pictureLink: string = '../pic/IDE.png';

const IndexPage: React.FC = () => {
  
  // State for the list of interests
  const [interests, setInterests] = useState<string[]>([
    "Programming",
    "Reading",
    "Traveling",
    "Photography",
    "Cooking"
  ]);

  // Function to shuffle the list of interests
  const shuffleInterests = () => {
    const shuffledInterests = [...interests];
    for (let i = shuffledInterests.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledInterests[i], shuffledInterests[j]] = [shuffledInterests[j], shuffledInterests[i]];
    }
    setInterests(shuffledInterests);
    console.log('Searching...');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles['welcome-message']}>Welcome to My Website!</h1>
      <p>
        Welcome to my website! I&apos;m Houming Ge, and I&apos;m passionate about Computer science.
      </p>
      <img src="/IDE.jpg" alt="Your Image" className={styles['profile-image']} />
      <h2>Interests:</h2>
      <ul className={styles['interests-list']}>
        {/* Display the list of interests */}
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <button onClick={shuffleInterests} className={styles.button}>Shuffle Interests
      </button>
      <button>
        <Link href="/things-to-read">
          Navigate to Other Page
        </Link>
      </button>
    </div>
  );
  
};

const searchFunction = () => {
  // search logic here
  console.log('Searching...');
};


// Add event listener for keydown events
document.addEventListener('keydown', (event) => {
  // Check if Ctrl key and 'F' key are pressed simultaneously
  if (event.altKey && event.key === 'f') {
    // Call searchFunction when Ctrl + F is pressed
    searchFunction();
  }
});

export default IndexPage;
