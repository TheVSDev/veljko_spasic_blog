import { object } from "yup"
import { useMutation } from "@tanstack/react-query"
import Link from "next/link"

import Container from "@/web/components/ui/containers/Container"
import Form from "@/web/components/ui/forms/Form"
import FormField from "@/web/components/ui/forms/FormField"
import SubmitButton from "@/web/components/ui/buttons/SubmitButton"
import Button from "@/web/components/ui/buttons/Button"
import {
  nameValidator,
  emailValidator,
  passwordValidator,
  typeValidator
} from "@/utils/validators"
import apiClient from "@/web/services/apiClient"
import SuccessMessage from "@/web/components/ui/alert-messages/SuccessMessage"

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  userType: ""
}
const validationSchema = object({
  firstName: nameValidator.label("First Name"),
  lastName: nameValidator.label("Last Name"),
  email: emailValidator.label("E-mail"),
  password: passwordValidator.label("Password"),
  userType: typeValidator.label("Account type")
})
const Success = () => (
  <Container className="w-[600px] ml-[30%] mt-[4%] border-none flex flex-col gap-7">
    <SuccessMessage>Account created successfully</SuccessMessage>
    <Link href="/sign-in">
      <Button btnLabel="Log in your account" />
    </Link>
  </Container>
)
const FullNameFormFields = () => (
  <>
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
  </>
)
const SignUpPage = () => {
  const { isSuccess, mutateAsync } = useMutation({
    mutationFn: (values) => apiClient.post("/users", values)
  })
  const handleSubmit = async (values) => {
    await mutateAsync(values)

    return true
  }

  if (isSuccess) {
    return <Success />
  }

  return (
    <Container className="w-[450px] h-[369px] ml-[35%] mt-[1%] border-b-0">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        title="Sign Up">
        <FullNameFormFields />
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
        <FormField
          name="userType"
          type="text"
          placeholder="Reader / Creator / Admin"
          label="Account type (Reader, Creator or Admin)"
        />
        <SubmitButton btnLabel="Create account" onSubmit={handleSubmit} />
      </Form>
    </Container>
  )
}

export default SignUpPage
