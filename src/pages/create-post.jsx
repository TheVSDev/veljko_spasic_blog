import { useRouter } from "next/router"
import { object, string } from "yup"

import { nameValidator } from "@/utils/validators"
import Editor from "@/web/components/Editor"
import Button from "@/web/components/Button"
import SubmitButton from "@/web/components/SubmitButton"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"

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
  const handleCancel = () => {
    router.push("/my-posts")
  }
  const handleSubmit = () => {
    //
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
        <Editor name="postBody" />
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
