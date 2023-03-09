import * as yup from "yup";

export const identifier = yup.string().required('Please enter your email or phone.').min(3, 'Minimum allowed length 3 characters')