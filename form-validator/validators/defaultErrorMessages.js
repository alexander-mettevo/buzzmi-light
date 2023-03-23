import {dateOfBirth} from "./builtInValidators.js";

export const defaultErrorMessages = {
  required: 'field is required',
  minLength: (min) => `Must be at least ${min} characters long`,
  maxLength: (max) => `Must be no more than ${max} characters long`,
  pattern: 'Invalid pattern',
  minValue: (min) => `Must be at least ${min}`,
  maxValue: (max) => `Must be no more than ${max}`,
  password: 'from 8 to 20 characters',
  leastOneUpperCase: 'contain at least one upper case latter',
  leastOneSpecialCharacter: 'contain at least one special character',
  passwordConfirmation: 'confirm password must be the same as password',
  email: 'Invalid email',
  phoneOrEmail: 'Invalid phone or email',
  countDigits: (count) => `Must be ${count} digits`,
  countryPhoneCode: 'Invalid country phone code',
  phone: 'Invalid phone',
  age18Plus: 'Sorry, looks like you\'re not eligible for Buzzmi... But thanks for checking us out!',
  dateOfBirth: 'Invalid date of birth',
};