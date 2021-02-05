import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {createUserWithEmailAndPassword} from "../../services/auth.service";
import {Formik} from 'formik';

const SignupContainer = (props: any) => {

    return (
        <div>
            <h1>Create Account</h1>
            <Formik
                initialValues={{email: '', password: '', verifyPassword: ''}}
                validate={values => {
                    const errors: any = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    createUserWithEmailAndPassword({email: values.email, password: values.password})
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <Form style={{maxWidth: '600px', minWidth: '400px'}}
                          onSubmit={handleSubmit}>

                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                size="lg"
                            />
                        </Form.Group>

                        {errors.email && touched.email && errors.email}

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                size="lg"
                            />
                        </Form.Group>

                        <Form.Group controlId="password-verify">
                            <Form.Label>Verify Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="verifyPassword"
                                placeholder="Verify Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.verifyPassword}
                                size="lg"
                            />
                        </Form.Group>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            disabled={isSubmitting}
                            style={{width: '100%'}}>Create</Button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export {
    SignupContainer
};
