import React from 'react';

// Styles 
import styles from './Navbar.module.css';

<<<<<<< HEAD
const Navbar = ({logoutHandler}) => {
=======
const Navbar = () => {
>>>>>>> 88dfb9a11bcf5741ccbadef0a3ad743e12a51a47
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <h2>ArmiGram</h2>
            </div>
<<<<<<< HEAD
            <div className={styles.logout} onClick={logoutHandler}>
=======
            <div className={styles.logout}>
>>>>>>> 88dfb9a11bcf5741ccbadef0a3ad743e12a51a47
                Logout
            </div>
        </div>
    );
};

export default Navbar;