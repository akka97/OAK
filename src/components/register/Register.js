import * as React from 'react';
import { Link, Grid, Box, TextField, Typography, Button, Avatar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import Modal from 'react-bootstrap/Modal';
import { Form, Formik, Field, useFormik } from 'formik';
import { validationSchema } from "./validationSchema";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const RegisterForm = (props) => {

    const handleClose = () => props.setShow(false);

    const initialValues = {
        firstname:"",
        lastname:"",
        email: "",
        password: ""
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Modal show={props.show} hide={props.show} onHide={handleClose} animation={true}>
            <Modal.Header closeButton>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
            </Modal.Header>

            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

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
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                    <Field
                                                        autoComplete="given-name"
                                                        required
                                                        fullWidth
                                                        autoFocus
                                                        id="outlined-basic"
                                                        color="primary"
                                                        label="First Name"
                                                        variant="outlined"
                                                        name="firstname"
                                                        type="text"
                                                        as={TextField}
                                                        error={Boolean(errors.firstname) && Boolean(touched.firstname)}
                                                        helperText={Boolean(touched.firstname) && errors.firstname}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Field
                                                        autoComplete="given-name"
                                                        required
                                                        fullWidth
                                                        autoFocus
                                                        id="outlined-basic"
                                                        color="primary"
                                                        label="Last Name"
                                                        variant="outlined"
                                                        name="lastname"
                                                        type="text"
                                                        as={TextField}
                                                        error={Boolean(errors.lastname) && Boolean(touched.lastname)}
                                                        helperText={Boolean(touched.lastname) && errors.lastname}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Field
                                                        autoComplete="given-name"
                                                        required
                                                        fullWidth
                                                        autoFocus
                                                        id="outlined-basic"
                                                        color="primary"
                                                        label="Email"
                                                        variant="outlined"
                                                        name="email"
                                                        type="email"
                                                        as={TextField}
                                                        error={Boolean(errors.email) && Boolean(touched.email)}
                                                        helperText={Boolean(touched.email) && errors.email}
                                                    />
                                                   
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Field
                                                        autoComplete="given-name"
                                                        required
                                                        fullWidth
                                                        autoFocus
                                                        id="outlined-basic"
                                                        color="primary"
                                                        label="Password"
                                                        variant="outlined"
                                                        name="password"
                                                        type="password"
                                                        as={TextField}
                                                        error={Boolean(errors.password) && Boolean(touched.password)}
                                                        helperText={Boolean(touched.password) && errors.password}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                Sign Up
                                            </Button>
                                           
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        </Modal>
    );
}

export default RegisterForm;