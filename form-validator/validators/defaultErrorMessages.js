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
};