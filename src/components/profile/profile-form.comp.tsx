import React, {useContext, useEffect} from 'react'
import {useFormik} from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {getProfileInfo, updateProfileInfo} from "../../services/profile.service";
import {AuthContext} from "../auth/auth.provider";
import firebase from '../../services/firebase.service'

const ProfileFormComponent = () => {
    const auth: any = useContext(AuthContext)
    const {uid} = auth;

    const formik = useFormik({
        initialValues: {
            displayName: '',
            firstName: '',
            lastName: ''
        },
        validate: (values) => {
            const errors: any = {};
            // todo add validation
            return errors;
        },
        onSubmit: async (values: any, {setSubmitting}) => {
            console.log(values)
            try {
                await updateProfileInfo(uid, values)
            } catch (e) {
                console.log(e)
            }
            setSubmitting(false)
        },
    });

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (userAuth: any) => {
            const response: any = await getProfileInfo(userAuth.uid)
            formik.setValues({
                displayName: response.displayName,
                firstName: response.firstName,
                lastName: response.lastName
            })
        })
    }, [])

    return (
        <div>
            <h3>Update Info</h3>
            <Form style={{maxWidth: '600px', minWidth: '400px'}}
                  onSubmit={formik.handleSubmit}>

                <Form.Group controlId="displayName">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="displayName"
                        placeholder="Display Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.displayName}
                        size="lg"
                    />
                </Form.Group>

                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        size="lg"
                    />
                </Form.Group>

                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        size="lg"
                    />
                </Form.Group>

                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formik.isSubmitting}
                    style={{width: '100%'}}>Update</Button>

            </Form>
        </div>
    )
}

export default ProfileFormComponent
