import { Field } from "formik"

const Editor = ({ ...otherProps }) => <Field as="textarea" className="border-[1px] border-black w-full h-96" {...otherProps} />

export default Editor