import { object } from "yup"
import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"

import Container from "@/web/components/ui/containers/Container"
import Form from "@/web/components/ui/forms/Form"
import FormField from "@/web/components/ui/forms/FormField"
import SubmitButton from "@/web/components/ui/buttons/SubmitButton"
import { emailValidator, passwordValidator } from "@/utils/validators"
import apiClient from "@/web/services/apiClient"
import { useSession } from "@/web/components/SessionContext"
import ErrorMessage from "@/web/components/ui/alert-messages/ErrorMessage"

const initialValues = {
  email: "",
  password: ""
}
const validationSchema = object({
  email: emailValidator.label("E-mail"),
  password: passwordValidator.label("Password")
})
const SignInPage = () => {
  const router = useRouter()
  const { saveSessionToken } = useSession()
  const { mutateAsync, error } = useMutation({
    mutationFn: (values) => apiClient.post("/sessions", values)
  })
  const handleSubmit = async (values) => {
    const { result: jwt } = await mutateAsync(values)

    saveSessionToken(jwt)

    router.push("/")
  }

  return (
    <Container className="w-[450px] h-[366px] ml-[35%] mt-[5%]">
      <ErrorMessage error={error} />
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
      </Form>
    </Container>
  )
}

export default SignInPage
