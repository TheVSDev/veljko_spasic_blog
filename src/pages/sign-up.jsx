// Imports
import { object } from "yup"
import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"

import Container from "@/web/components/Container"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import SubmitButton from "@/web/components/SubmitButton"
import {
  nameValidator,
  emailValidator,
  passwordValidator
} from "@/utils/validators"
import apiClient from "@/web/services/apiClient"

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}
const validationSchema = object({
  firstName: nameValidator.label("First Name"),
  lastName: nameValidator.label("Last Name"),
  email: emailValidator.label("E-mail"),
  password: passwordValidator.label("Password")
})
const SignUpPage = () => {
  const router = useRouter()
  const { isSuccess, mutateAsync } = useMutation({
    mutationFn: (values) => apiClient.post("/users", values)
  })
  const handleSubmit = async (values) => {
    await mutateAsync(values)

    return true
  }

  if (isSuccess) {
    router.push("/sign-in")
  }

  return (
    <Container className="w-[450px] h-[569px] ml-[35%] mt-[3%]">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        title="Sign Up">
        <FormField
          name="firstName"
          type="text"
          placeholder="John"
          label="First name"
        />
        <FormField
          name="lastName"
          type="text"
          placeholder="Doe"
          label="Last name"
        />
        <FormField
          name="email"
          type="email"
          placeholder="johndoe@popoo.com"
          label="E-mail"
        />
        <FormField
          name="password"
          type="password"
          placeholder="C4gdv@03tw_"
          label="Password"
        />
        <SubmitButton btnLabel="Create account" onSubmit={handleSubmit} />
      </Form>
    </Container>
  )
}

export default SignUpPage
