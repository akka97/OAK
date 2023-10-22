import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Form, Formik, Field } from 'formik';
import TextField from '@mui/material/TextField';
import { validationSchema } from "./validationSchema";
import Grid from '@mui/material/Grid';
import "./Login.css";

const LoginForm = (props) => {

    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {
        console.log("props-on submit--", props);
        e.preventDefault();
    }

    const handleClose = () => props.setShow(false);

    const initialValues = {
        email: "",
        password: ""
    };

    return (
        <>
            <Modal show={props.show} hide={props.show} onHide={handleClose} animation={true}>
                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        handleSubmit(values);
                    }}
                >

                    {({ field, errors, touched, meta }) => (
                        <Form>
                            <Grid container className="login-form-container">
                                <Grid item xs={12} sm={12} md={12} className="email-container">
                                    <TextField
                                        id="outlined-basic"
                                        label="Email"
                                        variant="outlined"
                                        name="email"
                                        helperText={errors.email}
                                        error={touched && errors}
                                        {...field}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12} md={12} className="password-container">
                                    <TextField
                                        id="outlined-basic"
                                        label="password"
                                        variant="outlined"
                                        name="password"
                                        helperText={errors.password}
                                    />
                                </Grid>
                            </Grid>
                        </Form>
                    )}
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