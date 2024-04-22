import React, { useState } from 'react';
import styles from '../styles/styles.module.css';

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
  };

  return (
    <div className={styles.container}>
      <h1 className={styles['welcome-message']}>Welcome to My Website!</h1>
      <p>
        Welcome to my website! I'm [Your Name], and I'm passionate about [brief description of yourself].
      </p>
      <img src="/your-image.jpg" alt="Your Image" className={styles['profile-image']} />
      <h2>Interests:</h2>
      <ul className={styles['interests-list']}>
        {/* Display the list of interests */}
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <button onClick={shuffleInterests} className={styles.button}>Shuffle Interests</button>
    </div>
  );
};

export default IndexPage;
