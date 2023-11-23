import * as yup from 'yup';

export const validationSchema = yup.object({
    firstname:
        yup.string('Firstname nuk eshte i formatiti string')
            .required('Firstname eshte i detyrueshem'),
    lastname:
        yup.string('Lastname nuk eshte i formatiti string')
            .required('Lastname eshte i detyrueshem'),
    email:
        yup.string()
            .email("Email nuk eshte i formatit email")
            .required("Email eshte i detyrueshem"),
    password:
        yup.string("Passwordi duhet te jete i formatit numer")
            .required("Passwordi eshte i detyrueshem")
});