import Modal from 'react-bootstrap/Modal';
import { Grid, Box, TextField, Typography, Avatar } from '@mui/material';
import { useAuthContext } from "../../Context/Auth";
import { CssBaseline } from '@mui/material/';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Form, Formik, Field } from 'formik';
import { validationSchema } from "./validationSchema";
import "./Login.css";
import Button from '@mui/material/Button';

const LoginForm = (props) => {
    const { loginUser } = useAuthContext();

    const handleClose = () => props.setShow(false);

    const initialValues = {
        email: "",
        password: ""
    }

    const handleSubmit = async (values) => {
        const result = await loginUser(values);
        if (result.data.role === "admin") {
            localStorage.setItem("admin", JSON.stringify(result.data.role));
        }
        props.setShow(false);
        return;
    }

    return (
        <>
            <Modal show={props.show} hide={props.show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                </Modal.Header>
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
                        validationSchema={validationSchema}
                        onSubmit={(values, formikHelpers) => {
                            handleSubmit(values);
                            formikHelpers.resetForm();
                        }}
                    >
                        {({ field, errors, touched, meta }) => {
                            return (
                                <Form>
                                    <Grid container className="login-form-container">
                                        <Grid item xs={12} sm={12} md={12} className="email-container">
                                            <Field
                                                id="email"
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
                                                id="password"
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
                </Box>
            </Modal>
        </>
    )
}
export default LoginForm;