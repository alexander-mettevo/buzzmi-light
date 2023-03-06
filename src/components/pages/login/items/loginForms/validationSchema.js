import * as yup from "yup";

export const loginSchema = yup.object({
  identifier: yup.string().required('Please enter your email or phone.').min(3, 'Minimum allowed length 3 characters'),
  password: yup.string().required('Please enter your password.').min(8, 'Minimum allowed length 8 characters'),
}).required();