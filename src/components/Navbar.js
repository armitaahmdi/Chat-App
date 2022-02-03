import React from 'react';

// Styles 
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <h2>ArmiGram</h2>
            </div>
            <div className={styles.logout}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;