import React, {useContext} from "react";
import {AuthContext} from "../../components/auth/auth.provider";
import Button from 'react-bootstrap/Button'
import {signOut} from "../../services/auth.service";
import ProfileFormComponent from "../../components/profile/profile-form.comp";

const styleLabel = {
    width: "64px"
}

const ProfileContainer = () => {
    const auth: any = useContext(AuthContext)
    const {email, uid} = auth;

    return (
        <div>
            <h1>Profile</h1>
            <div><label style={styleLabel}>Email:</label>{email}</div>
            <div><label style={styleLabel}>UID: </label>{uid}</div>

            <div style={{marginTop: "64px"}}>
                <ProfileFormComponent></ProfileFormComponent>
            </div>

            <div style={{marginTop: "100px"}}>
                <Button onClick={() => signOut()} variant="danger" size="lg">
                    Sign Out
                </Button>
            </div>
        </div>
    )


}

export default ProfileContainer
