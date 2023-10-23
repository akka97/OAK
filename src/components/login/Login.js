import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Link, Grid, Box, TextField, Typography, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Form, Formik, Field, useFormik } from 'formik';
import { validationSchema } from "./validationSchema";
import "./Login.css";
import Button from '@mui/material/Button';

const LoginForm = (props) => {

    const handleClose = () => props.setShow(false);

    const initialValues = {
        email: "",
        password: ""
    }

    console.log("message-component----");

    return (
        <>
            <Modal show={props.show} hide={props.show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                </Modal.Header>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, formikHelpers) => {
                        console.log("values----", values);
                        formikHelpers.resetForm();
                    }}
                >
                    {({ field, errors, touched, meta }) => {
                        console.log("errors--in Formi---", errors);
                        return (
                            <Form>
                                <Grid container className="login-form-container">
                                    <Grid item xs={12} sm={12} md={12} className="email-container">
                                        <Field
                                            id="outlined-basic"
                                            color="primary"
                                            label="Email"
                                            variant="outlined"
                                            name="email"
                                            type="email"
                                            as={TextField}
                                            fullWidth
                                            error={Boolean(errors.email) && Boolean(touched.email)}
                                            helperText={Boolean(touched.email) && errors.email}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} className="password-container">
                                        <Field
                                            id="outlined-basic"
                                            color="primary"
                                            label="Password"
                                            variant="outlined"
                                            name="password"
                                            type="password"
                                            as={TextField}
                                            fullWidth
                                            error={Boolean(errors.password) && Boolean(touched.password)}
                                            helperText={Boolean(touched.password) && errors.password}
                                        />
                                    </Grid>
                                    <Button type="submit" variant="contained">Login</Button>
                                </Grid>
                            </Form>
                        )
                    }}
                </Formik>
            </Modal>
        </>
    )
}
export default LoginForm;


{/* <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="exampleForm.email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" name="email" onChange={handleChange} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" name="password" onChange={handleChange} />
    </Form.Group>
    <Button variant="primary" type='submit'>Submit</Button>
</Form> */}