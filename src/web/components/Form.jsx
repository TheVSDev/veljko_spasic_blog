import { Formik, Form as FormikForm } from "formik"
import Title from "@/web/components/Title"

const Form = (props) => {
  const { children, title, ...otherProps } = props

  return (
    <Formik {...otherProps}>
      <FormikForm
        noValidate
        className="flex flex-col gap-4 p-5"
      >
        <Title titleLabel={title} />
        {children}
      </FormikForm>
    </Formik>
  )
}
export default Form