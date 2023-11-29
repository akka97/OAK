import { Modal, Grid, Box, TextField, Button } from '@mui/material';
import { validationSchemaEdit } from './validationSchemaEdit';
import { Form, Formik, Field } from 'formik';
import { useCategoryContext } from "../../../Context/Category";

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
    const { update_category } = useCategoryContext();

    const handleClose = () => {
        props.setOpen(false);
    };

    const initialValues = {
        name: "",
    }

    const handleSubmit = async (values) => {
        await update_category(props.id, values);
    };

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">Edit Modal</h2>
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
                        validationSchema={validationSchemaEdit}
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
                                                label="Name"
                                                variant="outlined"
                                                name="name"
                                                type="text"
                                                as={TextField}
                                                error={Boolean(errors.name) && Boolean(touched.name)}
                                                helperText={Boolean(touched.name) && errors.name}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Edit Area
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