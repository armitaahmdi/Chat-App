import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';

// Components
import Navbar from './Navbar';

// Context 
// chon mikhay chat user o behesh neshon bedim be etelaat user niaz drim
import { AuthContext } from '../contexts/AuthContextProvider';

const Chats = () => {

    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);

    const navigate = useNavigate();
    const logoutHandler = async () => {
        await auth.signOut();
        navigate('/')
    }

    // 1.aya etelaat user hast ke bere be masire /chats ya na
    // 2.aya etelaat user dakhele chatEngine hast ya na? age na etelaat ro begirim va post konim be chatEngine va chat ro behesh neshon bedim
    useEffect(() => {
        if (!user) {
            navigate("/");
            return;
        }

        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                'project-id': '826b85b4-1aa9-479d-8800-987fae847d5b',
                'user-name': user.email,
                'user-secret': user.uid
            }
        })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append("email", user.email)
                formdata.append("username", user.email)
                formdata.append("secret", user.uid)
                getFile(user.photoURL)
                    .then((avatar) => {
                        formdata.append('avatar', avatar, avatar.name)
                        axios.post("https://api.chatengine.io/users/", formdata, {
                            headers: {
                                "private-key": "b3f1a461-ba1f-4181-b721-f3094f6c3566"
                            }
                        })
                            .then(() => setLoading(false))
                            .catch(error => console.log(error))
                    })
            })
    }, [user, navigate])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
    }

    if (!user || loading) return 'Loading...';

    return (
        <div>
            <Navbar logoutHandler={logoutHandler} />

            <ChatEngine
                height='calc(100vh - 50px)'
                // baraye che kase in safhe chat ro neshon bede
                prpjectID='826b85b4-1aa9-479d-8800-987fae847d5b'
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chats;