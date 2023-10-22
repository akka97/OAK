import * as yup from 'yup';
// import i18n from "i18next";

export const validationSchema = yup.object({
    email: yup
        .string()
        .email('Email nuk eshte i sakte')
        .required('Email eshte i detyrueshem'),
    password: yup.string().min(4, "Passwordi duhet te kete me shume se 4 karaktere").required("Passwordi eshte i detyrueshem")
});