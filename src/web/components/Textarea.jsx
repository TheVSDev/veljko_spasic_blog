import { Field } from "formik"
import clsx from "clsx"

const Textarea = ({ className, ...otherProps }) => (
  <Field
    as="textarea"
    className={clsx("border-2 border-gray", className)}
    {...otherProps}
  />
)

export default Textarea
