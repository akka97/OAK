import { Modal, Grid, Box, TextField, Button } from '@mui/material';
import { validationSchema } from './validationSchemaEdit';
import { Form, Formik, Field } from 'formik';
import { useUserContext } from "../../../Context/User";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const EditModal = (props) => {
    const { updateAreas } = useUserContext();

    const handleClose = () => {
        props.setOpen(false);
    };

    const initialValues = {
        name: "",
    }

    const handleSubmit = async (values) => {
        await updateAreas(props.id, values);
    };

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">Create User</h2>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Formik
                        initialValues={initialValues}
                        enableReinitialize={true}
                        validationSchema={validationSchema}
                        onSubmit={(values, formikHelpers) => {
                            handleSubmit(values);
                            formikHelpers.resetForm();
                        }}
                    >
                        {({ field, errors, touched, meta, values, setFieldValue }) => {
                            return (
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Field
                                                autoComplete="given-name"
                                                required
                                                fullWidth
                                                autoFocus
                                                color="primary"
                                                label="Firstname"
                                                variant="outlined"
                                                name="firstname"
                                                type="text"
                                                as={TextField}
                                                error={Boolean(errors.firstname) && Boolean(touched.firstname)}
                                                helperText={Boolean(touched.firstname) && errors.firstname}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Field
                                                autoComplete="given-name"
                                                required
                                                fullWidth
                                                autoFocus
                                                color="primary"
                                                label="Lastname"
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
                                                type="text"
                                                as={TextField}
                                                error={Boolean(errors.email) && Boolean(touched.email)}
                                                helperText={Boolean(touched.email) && errors.email}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12}>
                                            <Field
                                                autoComplete="given-name"
                                                required
                                                fullWidth
                                                autoFocus
                                                color="primary"
                                                label="Password"
                                                variant="outlined"
                                                name="password"
                                                type="string"
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
                                        Edit User
                                    </Button>
                                </Form>
                            )
                        }}
                    </Formik>
                </Box>
            </Box>
        </Modal>
    )
}

export default EditModal;