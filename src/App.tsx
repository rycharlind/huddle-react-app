import React, {useContext} from 'react';
import './App.css';
import {SigninContainer} from "./containers/auth/signin.container";
import {AuthContext} from "./components/auth/auth.provider";
import ProfileContainer from "./containers/profile/profile.container";

// todo: use auth within a service worker:
// https://firebase.google.com/docs/auth/web/service-worker-sessions

function App() {
    const auth: any = useContext(AuthContext)

    return (
        <div className="App">
            {auth ? <ProfileContainer></ProfileContainer>
            : <SigninContainer></SigninContainer>}
        </div>
    );
}

export default App;
