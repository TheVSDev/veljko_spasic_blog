import { useField } from "formik"

const FormField = ({ name, label, ...otherProps }) => {
  const [field, { error, touched }] = useField(name)
  const hasError = Boolean(error && touched)

  return (
    <div className="flex flex-col gap-2">
      <span className="font-semibold text-sm">{label}</span>
      <input className="border-2 p-1" {...field} {...otherProps} />
      {hasError && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  )
}

export default FormField