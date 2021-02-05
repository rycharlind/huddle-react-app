import React, {useContext} from "react";
import {AuthContext} from "../../components/auth/auth.provider";
import Button from 'react-bootstrap/Button'
import {signOut} from "../../services/auth.service";

const ProfileContainer = () => {
    const auth: any = useContext(AuthContext)
    const {email, uid} = auth;

    return (
        <div>
            <h1>Profile</h1>
            <div>{email}</div>
            <div>{uid}</div>
            <div>
                <Button onClick={() => signOut()} variant="danger" size="lg">
                    Sign Out
                </Button>
            </div>
        </div>
    )


}

export default ProfileContainer
