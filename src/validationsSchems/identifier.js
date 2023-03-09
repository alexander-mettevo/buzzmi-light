import * as yup from "yup";
import {identifier} from "./index.js";

export const identifierSchema = yup.object({
  identifier: identifier,
}).required();