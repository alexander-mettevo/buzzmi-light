import * as yup from "yup";

export const confirmCodeSchema = yup.object({
  code: yup.string().required('Please enter your code.').min(6, 'Length must be 6 characters'),
}).required();