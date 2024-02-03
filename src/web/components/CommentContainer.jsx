import { useState } from "react"
import Form from "@/web/components/Form"
import Textarea from "@/web/components/Textarea"
import SubmitButton from "@/web/components/SubmitButton"
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid"

const initialValues = {
  comment: ""
}
const CommentContainer = () => {
  const [showCommentSection, setShowCommentSection] = useState(false)
  const toggleCommentSection = () => {
    setShowCommentSection(!showCommentSection)
  }
  const handleSubmit = () => {
    //
  }
  const CommentIcon = ChatBubbleOvalLeftIcon

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
