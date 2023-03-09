import * as yup from "yup";
import {identifier} from "./index.js";

export const loginSchema = yup.object({
  identifier: identifier,
  password: yup.string().required('Please enter your password.').min(8, 'Minimum allowed length 8 characters'),
}).required();