// Navbar.tsx

import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarListItem}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={styles.navbarListItem}>
                    <Link href="/things-to-read">
                        Things to Read
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
