import { string } from "yup"

export const nameValidator = string().required()
export const emailValidator = string().email().required()
export const passwordValidator = string()
  .min(10)
  .matches(
    /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*\d)(?=.*[^\p{L}\d)]).*$/gu,
    "Password must contain 1 upper & 1 lower letter, 1 digit and 1 spe. char.",
  )
  .required()
export const typeValidator = string().matches(/^(Reader|Creator)$/iu, "Must be either 'Reader' or 'Creator'").required()