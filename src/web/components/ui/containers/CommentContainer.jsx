import { useMutation } from "@tanstack/react-query"

import Form from "@/web/components/ui/forms/Form"
import Textarea from "@/web/components/ui/forms/Textarea"
import SubmitButton from "@/web/components/ui/buttons/SubmitButton"
import apiClient from "@/web/services/apiClient"

const initialValues = {
  comment: "",
  postId: 0
}
const CommentContainer = ({ postId }) => {
  const { mutateAsync } = useMutation({
    mutationFn: (values) => apiClient.post("/comments", values)
  })
  const handleSubmit = async (values, { resetForm }) => {
    await mutateAsync({ ...values, postId })
    resetForm()

    return true
  }

  return (
    <div className="mt-4">
      <div className="mt-4 mb-4 border-2 border-green-500 rounded-lg p-4 w-[80%] mx-auto flex flex-col items-center shadow-lg">
        <Form initialValues={initialValues} onSubmit={handleSubmit}>
          <Textarea
            name="comment"
            rows="4"
            placeholder="Write your comment here..."
            className="w-[700px]"
          />
          <SubmitButton btnLabel="Post Comment" onSubmit={handleSubmit} />
        </Form>
      </div>
    </div>
  )
}

export default CommentContainer
