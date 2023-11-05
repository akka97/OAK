import { useState } from 'react';
import { Modal, Grid, Box, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { validationSchema } from "./validationSchema";
import { Form, Formik, Field } from 'formik';

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
const GymModal = (props) => {

    const handleClose = () => {
        props.setOpen(false);
    };

    const initialValues = {
        name: "",
        description: "",
        address: "",
        latitude: "",
        longitude: "",
        is_active: false,
        basic_plan: false,
        premium_plan: false,
        images: "",
    }

    const handleSubmit = (values) => {

        return;
    };

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">Create Gym</h2>
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
                        {({ field, errors, touched, meta, values, setfieldvalue }) => {
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
                                                label="Name"
                                                variant="outlined"
                                                name="name"
                                                type="text"
                                                as={TextField}
                                                error={Boolean(errors.name) && Boolean(touched.name)}
                                                helpertext={Boolean(touched.name) && errors.name}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Field
                                                autoComplete="given-name"
                                                required
                                                fullWidth
                                                autoFocus
                                                color="primary"
                                                label="Adress"
                                                variant="outlined"
                                                name="address"
                                                type="text"
                                                as={TextField}
                                                error={Boolean(errors.address) && Boolean(touched.address)}
                                                helpertext={Boolean(touched.address) && errors.address}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Field
                                                autoComplete="given-name"
                                                required
                                                fullWidth
                                                autoFocus
                                                color="primary"
                                                label="Description"
                                                variant="outlined"
                                                name="description"
                                                type="text"
                                                as={TextField}
                                                error={Boolean(errors.description) && Boolean(touched.description)}
                                                helpertext={Boolean(touched.description) && errors.description}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                autoComplete="given-name"
                                                required
                                                fullWidth
                                                autoFocus
                                                color="primary"
                                                label="Latitude"
                                                variant="outlined"
                                                name="latitude"
                                                type="number"
                                                as={TextField}
                                                error={Boolean(errors.latitude) && Boolean(touched.latitude)}
                                                helpertext={Boolean(touched.latitude) && errors.latitude}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                autoComplete="given-name"
                                                required
                                                fullWidth
                                                autoFocus
                                                color="primary"
                                                label="Longitude"
                                                variant="outlined"
                                                name="longitude"
                                                type="number"
                                                as={TextField}
                                                error={Boolean(errors.longitude) && Boolean(touched.longitude)}
                                                helpertext={Boolean(touched.longitude) && errors.longitude}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <label>
                                                <Field
                                                    type="checkbox"
                                                    name="is_active"
                                                    as={Checkbox}
                                                />
                                                Is active this gym ?
                                                {errors.is_active ? errors.is_active : ""}
                                            </label>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <label>
                                                <Field
                                                    type="checkbox"
                                                    name="basic_plan"
                                                    as={Checkbox} />
                                                Is offering Basic Plan ?
                                            </label>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <label>
                                                <Field
                                                    type="checkbox"
                                                    name="premium_plan"
                                                    as={Checkbox} />
                                                Is offering Premium Plan ?
                                            </label>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <label>
                                                <Field
                                                    name="images"
                                                    type="file"
                                                    title="Select a file"
                                                    setfieldvalue={setfieldvalue}
                                                    error={errors.images ? errors.images : ""}
                                                    helpertext={errors.images}
                                                    touched={touched.images}
                                                    style={{ display: "flex" }}
                                                />
                                                {errors.images ? errors.images : ""}
                                            </label>
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Create Gym
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

export default GymModal;