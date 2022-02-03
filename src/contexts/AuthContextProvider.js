import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {

    // Loading baraye inke etelat omade ya na? dar halate aval loading: true chon etelaat nayomde
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    const navigate = useNavigate();

    // Ba useEffect etelaat marbot be karbar o migirim o dakhle user set mikonim va sepas mifrestim be masire /chats
    // Va etelaat user midim be context ke miad in value ro mide be children va chizai ke to children hast => App
    useEffect(() => {

        // onAuthStateChanged vaqti etelaat ro vared karde mige etelaat o begir o chikaresh kon
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            if (user) navigate('/chats');
        } )
    }, [user, navigate])

    return (
        <AuthContext.Provider value={user}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;