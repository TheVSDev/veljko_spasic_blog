import { object } from "yup"
import Container from "@/web/components/Container"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import SubmitButton from "@/web/components/SubmitButton"
import {
  nameValidator,
  emailValidator,
  passwordValidator
} from "@/utils/validators"

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}
const validationSchema = object({
  firstName: nameValidator.label("First Name"),
  lastName: nameValidator.label("Last Name"),
  username: nameValidator.label("Username"),
  email: emailValidator.label("E-mail"),
  password: passwordValidator.label("Password")
})
const handleSubmit = () => {
  //
}
const SignUpPage = () => (
  <Container className="w-[450px] h-[660px] ml-[35%]">
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
        name="username"
        type="text"
        placeholder="johndoe"
        label="Username"
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

export default SignUpPage
