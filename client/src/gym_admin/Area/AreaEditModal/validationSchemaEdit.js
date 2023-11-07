import * as yup from 'yup';
// import i18n from "i18next";

export const validationSchemaEdit = yup.object({
    name:
        yup.string('Emri nuk eshte i formatiti string')
            .required('Email eshte i detyrueshem')
});