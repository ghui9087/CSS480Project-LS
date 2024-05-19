import React from 'react';

import styles from '../styles/newpaper.module.css';
import Navbar from '@/components/Navbar';

type NewsItem = {
    title: string;
    abstract: string;
    url: string;
    imageUrl: string;
};

const newsItems: NewsItem[] = [
    {
        title: "Breaking News: Market Hits Record High",
        abstract: "The stock market reached an all-time high today, driven by strong earnings reports.",
        url: "#",
        imageUrl: "/images/market.jpg",
    },
    {
        title: "Sports Update: Local Team Wins Championship",
        abstract: "In an exciting finale, the local team clinched the championship title.",
        url: "#",
        imageUrl: "/images/sports.jpg",
    },
    {
        title: "Weather Alert: Heavy Rain Expected This Weekend",
        abstract: "Meteorologists are predicting heavy rainfall throughout the weekend.",
        url: "#",
        imageUrl: "/images/weather.jpg",
    }
];

const Home: React.FC = () => {

    return (
        
        <div className={styles.container}>
            <Navbar />
            <header className={styles.header}>
                <h1>Cat New Times</h1>
                <h2>Top Stories</h2>
            </header>
            <main className={styles.main}>
                {newsItems.map((article, index) => (
                    <article key={index} className={styles.article}>
                        <h3 className={styles.article_h3}>{article.title}</h3>
                        <p>{article.abstract}</p>
                        {article.imageUrl && (
                            <img src={article.imageUrl} alt={article.title} />
                        )}
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                    </article>
                ))}
            </main>
        </div>
    );
};

export default Home;
