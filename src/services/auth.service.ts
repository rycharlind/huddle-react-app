import firebase from './firebase.service'
import {Credentials} from "../model/credentials.model";

const signInWithEmailAndPassword = async (creds: Credentials) => {
    try {
        const response: any = await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
        const token = await response.user.getIdToken();
        return token
    } catch (e) {
        console.log(e)
    }
}

const createUserWithEmailAndPassword = async (creds: Credentials) => {
    try {
        const response: any = await firebase.auth().createUserWithEmailAndPassword(creds.email, creds.password)
        const token = await response.user.getIdToken();
        return token;
    } catch (e) {
        console.log(e)
    }
}

const signOut = () => {
    firebase.auth().signOut()
}

export {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
}


