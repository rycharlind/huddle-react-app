import React, {createContext, useEffect, useState} from 'react';
import firebase from '../../services/firebase.service'

export const firebaseAuth = firebase.auth();
export const AuthContext = createContext({userAuth: null});

const AuthProvider = (props: any) => {
    const [auth, setAuth] = useState({userAuth: null})

    useEffect(() => {
        firebaseAuth.onAuthStateChanged((userAuth: any) => {
            setAuth(userAuth)
        })
    }, []);

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
