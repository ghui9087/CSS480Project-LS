// Layout.tsx

import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
    children: ReactNode;
}


const Layout = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div></div>
        </div>
    );
};

export default Layout;
