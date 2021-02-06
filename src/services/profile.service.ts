import firebase from "./firebase.service";

const db = firebase.firestore()

export interface Profile {
    displayName: string;
    firstName: string;
    lastName: string;
}

const updateProfileInfo = async (uid: string, profile: any) => {
    await db.doc(`users/${uid}`).set({
        displayName: profile.displayName,
        firstName: profile.firstName,
        lastName: profile.lastName
    });
}

const getProfileInfo = async (uid: string) => {
    const response = await db.collection(`users`).doc(uid).get()
    return response.data()
}

export {
    updateProfileInfo,
    getProfileInfo
}
