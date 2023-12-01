import * as yup from 'yup';
// import i18n from "i18next";

export const validationSchema = yup.object({
    name:
        yup.string('Emri nuk eshte i formatiti string')
            .required('Emri eshte i detyrueshem'),

    description:
        yup.string('Pershkrimi nuk eshte i formatit string')
            .required('Pershkrimi eshte i detyrueshem'),

    address:
        yup.string('Adresa nuk eshte i formatit string')
            .required('Adresa eshte i detyrueshem'),

    latitude:
        yup.number()
            .min(12, "Latitude duhet te kete me shume se 4 karaktere")
            .required("Latitude eshte i detyrueshem"),

    longitude:
        yup.number()
            .min(12, "Longitude duhet te kete me shume se 4 karaktere")
            .required("Longitude eshte i detyrueshem"),

    is_active:
        yup.bool()
            .oneOf([true], "Eshte aktive eshte i detyrueshem"),

    basic_plan:
        yup.bool()
            .oneOf([true], "Plani bazik eshte i detyrueshem"),

    premium_plan:
        yup.bool()
            .oneOf([true], "Plani premium eshte i detyrueshem"),

    area:
        yup.number().required("Area eshte i detyrueshem"),

    category:
        yup.number().required("Kategoria eshte fushe e detyrueshem"),

    opening:
        yup.string().required("Opening eshte i detyrueshem"),

    file:
        yup.mixed()
            .nullable()
            .test('fileSize', 'is out of range', value => {
                // console.log("value-----", value);
                return true;
            })
            .required("Duhet te ngarkosh nje imazh"),
});