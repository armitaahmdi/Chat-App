import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

// Components
import Navbar from './Navbar';

const Chats = () => {

    const navigate = useNavigate();

    const logoutHandler = async () => {
        await auth.signOut();
        navigate('/')
    }

    return (
        <div>
            <Navbar logoutHandler={logoutHandler} />
        </div>
    );
};

export default Chats;