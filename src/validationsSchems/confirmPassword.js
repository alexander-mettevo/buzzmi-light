import * as Yup from "yup";

export const messages = {
  size: 'from 8 to 20 characters',
  uppercase: 'contain at least one upper case letter',
  special: 'contain at least one special character',
}

export const confirmPassword = {
  password: Yup.string()
    .required('Password is required')
    .min(8, messages.size)
    .max(20, messages.size)
    .matches(/[A-Z]/, messages.uppercase)
    .matches(/[!@#$%^&*(),.?":{}|<>]/, messages.special),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
}

export const confirmPasswordSchema = Yup.object(confirmPassword).shape(confirmPassword);