import { object } from "yup"
import Container from "@/web/components/Container"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import SubmitButton from "@/web/components/SubmitButton"
import ClickableRedirect from "@/web/components/ClickableRedirect"
import {
  emailValidator,
  passwordValidator
} from "@/utils/validators"

const initialValues = {
  email: "",
  password: ""
}
const validationSchema = object({
  email: emailValidator.label("E-mail"),
  password: passwordValidator.label("Password")
})
const handleSubmit = () => {
  //
}
const SignInPage = () => (
  <Container className="w-[450px] h-[386px] ml-[35%] mt-[10%]">
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      title="Sign In">
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
      <SubmitButton btnLabel="Log in" onSubmit={handleSubmit} />
      <ClickableRedirect redirectMessage="You don't have an account, " redirectLink="/sign-up" redirectLinkLabel="create one" />
    </Form>
  </Container>
)

export default SignInPage
