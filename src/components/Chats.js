import React from 'react';
<<<<<<< HEAD
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> 88dfb9a11bcf5741ccbadef0a3ad743e12a51a47

// Components
import Navbar from './Navbar';

const Chats = () => {
<<<<<<< HEAD

    const navigate = useNavigate();

    const logoutHandler = async () => {
        await auth.signOut();
        navigate('/')
    }

    return (
        <div>
            <Navbar logoutHandler={logoutHandler} />
=======
    return (
        <div>
            <Navbar />
>>>>>>> 88dfb9a11bcf5741ccbadef0a3ad743e12a51a47
        </div>
    );
};

export default Chats;