import useEffect from "react";
import { Link, Grid, Box, TextField, Typography, Button, Avatar } from '@mui/material';
import { useGymContext } from "../../Context/GymContext";
import { CssBaseline, Container } from '@mui/material/';
import Modal from 'react-bootstrap/Modal';
import { Form, Formik, Field } from 'formik';
import { validationSchema } from "./validationSchema";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" >
            {'Copyright © '}
            <Link color="inherit" href="#">
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

    const { registerUser } = useGymContext();
    const handleClose = () => props.setShow(false);

    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirm: ""
    }

    const handleSubmit = (values) => {
        // const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });
        console.log("values----", values);
        registerUser(values);
        handleClose();
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

                        <Formik
                            initialValues={initialValues}
                            enableReinitialize={true}
                            validationSchema={validationSchema}
                            onSubmit={(values, formikHelpers) => {
                                handleSubmit(values);
                                //formikHelpers.resetForm();
                            }}
                        >
                            {({ field, errors, touched, meta }) => {

                                return (
                                    <Form>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    autoComplete="given-name"
                                                    required
                                                    fullWidth
                                                    autoFocus
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
                                            <Grid item xs={12}>
                                                <Field
                                                    autoComplete="given-name"
                                                    required
                                                    fullWidth
                                                    autoFocus
                                                    color="primary"
                                                    label="Password Confirm"
                                                    variant="outlined"
                                                    name="password_confirm"
                                                    type="password"
                                                    as={TextField}
                                                    error={Boolean(errors.password_confirm) && Boolean(touched.password_confirm)}
                                                    helperText={Boolean(touched.password_confirm) && errors.password_confirm}
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
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        </Modal>
    );
}

export default RegisterForm;