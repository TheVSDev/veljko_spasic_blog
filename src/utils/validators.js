import { string, number } from "yup"

export const nameValidator = string().required()
export const emailValidator = string().email().required()
export const passwordValidator = string()
  .min(10)
  .matches(
    /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*\d)(?=.*[^\p{L}\d)]).*$/gu,
    "Password must contain 1 upper & 1 lower letter, 1 digit and 1 spe. char."
  )
  .required()
export const typeValidator = string()
  .matches(
    /^(Reader|Creator|Admin)$/iu,
    "Must be either 'Reader', 'Creator' or 'Admin'"
  )
  .required()
export const pageValidator = number().integer().min(1).default(1).required()
export const idValidator = number().integer().min(1).required()
