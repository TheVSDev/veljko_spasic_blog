import { useRouter } from "next/router"
import { object, string } from "yup"
import { useMutation } from "@tanstack/react-query"

import { nameValidator } from "@/utils/validators"
import apiClient from "@/web/services/apiClient"
import Button from "@/web/components/ui/buttons/Button"
import SubmitButton from "@/web/components/ui/buttons/SubmitButton"
import Form from "@/web/components/ui/forms/Form"
import FormField from "@/web/components/ui/forms/FormField"
import SuccessMessage from "@/web/components/ui/alert-messages/SuccessMessage"
import Textarea from "@/web/components/ui/forms/Textarea"
import { useSession } from "@/web/components/SessionContext"

const initialValues = {
  postTitle: "",
  postBody: ""
}
const validationSchema = object({
  postTitle: nameValidator.label("Title"),
  postBody: string()
})
const CreatePostPage = () => {
  const router = useRouter()
  const { session } = useSession()
  const userId = session?.id
  const handleCancel = () => {
    router.push("/my-posts")
  }
  const { isSuccess, mutateAsync } = useMutation({
    mutationFn: (values) => apiClient.post("/posts", { ...values, userId })
  })
  const handleSubmit = async (values) => {
    await mutateAsync(values)

    return true
  }

  if (isSuccess) {
    return <SuccessMessage>Post created successfully</SuccessMessage>
  }

  return (
    <>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        title="Create a post">
        <FormField
          name="postTitle"
          type="text"
          placeholder="Post Title"
          label="Title"
        />
        <label className="font-semibold text-sm">Post Body</label>
        <Textarea
          name="postBody"
          placeholder="Write your post here..."
          className="w-full h-96"
        />
        <div className="flex flex-row justify-center gap-7">
          <SubmitButton btnLabel="Publish" onSubmit={handleSubmit} />
          <Button
            btnLabel="Cancel"
            variant="secondary"
            onClick={handleCancel}
          />
        </div>
      </Form>
    </>
  )
}

export default CreatePostPage
