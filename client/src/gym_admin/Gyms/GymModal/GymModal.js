import { useCategoryContext } from "../../../Context/Category";
import { useGymContext } from "../../../Context/Gym";
import { useAreaContext } from "../../../Context/Area";
import { validationSchema } from "./validationSchema";
import { Form, Formik, Field, } from 'formik';
import { Modal, Grid, Box, TextField, Button, Checkbox, Select, MenuItem } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import moment from "moment";

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
    const { create_gym } = useGymContext();
    const { categories } = useCategoryContext();
    const { areas } = useAreaContext();

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
        area: 0,
        category: 0,
        opening: "",
        closing: "",
        file: null,
    }

    const handleSubmit = async (values) => {
        //console.log("handleSubmit-----", values);
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('address', values.address);
        formData.append('latitude', values.latitude);
        formData.append('longitude', values.longitude);
        formData.append('is_active', values.is_active);
        formData.append('basic_plan', values.basic_plan);
        formData.append('premium_plan', values.premium_plan);
        formData.append('area', values.area);
        formData.append('category', values.category);
        formData.append('opening', values.opening);
        formData.append('closing', values.closing);
        formData.append('file', values.file[0].name);
        await create_gym(formData);
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
                            // formikHelpers.resetForm();
                        }}
                    >
                        {({ field, errors, touched, meta, values, setFieldValue }) => {
                            console.log("errors-----", errors);
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
                                                helperText={Boolean(touched.address) && errors.address}
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
                                                helperText={Boolean(touched.description) && errors.description}
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
                                                helperText={Boolean(touched.latitude) && errors.latitude}
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
                                                helperText={Boolean(touched.longitude) && errors.longitude}
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
                                            <Field
                                                autoComplete="given-name"
                                                required
                                                fullWidth
                                                autoFocus
                                                color="primary"
                                                label="Select Category"
                                                variant="outlined"
                                                name="category"
                                                type="number"
                                                as={Select}
                                                error={Boolean(errors.category) && Boolean(touched.category)}
                                                helperText={Boolean(touched.category) && errors.category}
                                            >
                                                {categories.map((el, index) => {
                                                    return (
                                                        <MenuItem key={index} value={el.id}>{el.name}</MenuItem>
                                                    )
                                                })}
                                            </Field>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                autoComplete="given-name"
                                                required
                                                fullWidth
                                                autoFocus
                                                color="primary"
                                                label="Select Area"
                                                variant="outlined"
                                                name="area"
                                                type="number"
                                                as={Select}
                                                error={Boolean(errors.area) && Boolean(touched.area)}
                                                helperText={Boolean(touched.area) && errors.area}
                                            >
                                                {areas.map((el, index) => {
                                                    return (
                                                        <MenuItem key={index} value={el.id}>{el.name}</MenuItem>
                                                    )
                                                })}
                                            </Field>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <label>
                                                <Field
                                                    multiple
                                                    name="file"
                                                    type="file"
                                                    title="Select a file"
                                                    value={undefined}
                                                    error={errors.file ? errors.file : ""}
                                                    helperText={errors.file}
                                                    touched={touched.file}
                                                    style={{ display: "flex" }}
                                                    onChange={(event) => {
                                                        console.log("event.target.files", event.target.files);
                                                        setFieldValue("file", event.target.files);
                                                    }}
                                                />
                                                {errors.file ? errors.file : ""}
                                            </label>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DateTimePicker']}>
                                                    <DateTimePicker label="Opening date time picker"
                                                        name="opening"
                                                        onChange={(dateTime) => {
                                                            setFieldValue("opening", new Date(dateTime));
                                                        }}
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DateTimePicker']}>
                                                    <DateTimePicker label="Closing date time picker"
                                                        name="closing"
                                                        onChange={(dateTime) => {
                                                            setFieldValue("closing", new Date(dateTime));
                                                        }}
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
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