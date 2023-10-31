import * as yup from 'yup';
// import i18n from "i18next";

export const validationSchema = yup.object({
    firstname:
        yup.string('Emri nuk eshte i formatiti string')
            .required('Email eshte i detyrueshem'),
    lastname:
        yup.string('Mbiemri nuk eshte i formatit string')
            .required('Email eshte i detyrueshem'),
    email:
        yup.string()
            .email('Email nuk eshte i sakte')
            .required('Email eshte i detyrueshem'),
    password:
        yup.string()
            .min(4, "Passwordi duhet te kete me shume se 4 karaktere")
            .required("Passwordi eshte i detyrueshem"),
    password_confirm:
        yup.string()
            .min(4, "Confirm Passwordi duhet te kete me shume se 4 karaktere")
            .required("Confirm Passwordi eshte i detyrueshem")
});