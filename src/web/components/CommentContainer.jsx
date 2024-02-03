import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid"

import Form from "@/web/components/Form"
import Textarea from "@/web/components/Textarea"
import SubmitButton from "@/web/components/SubmitButton"
import apiClient from "@/web/services/apiClient"

const initialValues = {
  comment: ""
}
const CommentContainer = () => {
  const [showCommentSection, setShowCommentSection] = useState(false)
  const CommentIcon = ChatBubbleOvalLeftIcon
  const toggleCommentSection = () => {
    setShowCommentSection(!showCommentSection)
  }
  const { mutateAsync } = useMutation({
    mutationFn: (values) => apiClient.post("/comments", values)
  })
  const handleSubmit = async (values) => {
    await mutateAsync(values)

    return true
  }

  return (
    <div className="mt-4">
      <button onClick={toggleCommentSection}>
        <CommentIcon className="w-[30px]" />
      </button>
      {showCommentSection && (
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
      )}
    </div>
  )
}

export default CommentContainer
