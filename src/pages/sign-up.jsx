import { object } from "yup"
import Container from "@/web/components/Container"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import ClickableRedirect from "@/web/components/ClickableRedirect"
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
  email: emailValidator.label("E-mail"),
  password: passwordValidator.label("Password")
})
const handleSubmit = () => {
  //
}
const SignUpPage = () => (
  <Container className="w-[450px] h-[589px] ml-[35%] mt-[3%]">
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
      <ClickableRedirect redirectMessage="You already have an account ?" redirectLink="/sign-in" redirectLinkLabel="Sign in" />
    </Form>
  </Container>
)

export default SignUpPage