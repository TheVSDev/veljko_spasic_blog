import { useState } from "react"
import Button from "@/web/components/Button"
import Form from "@/web/components/Form"
import Textarea from "@/web/components/Textarea"
import SubmitButton from "@/web/components/SubmitButton"

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

  return (
    <div className="mt-4">
      <Button
        btnLabel="Comments"
        variant="secondary"
        onClick={toggleCommentSection}
      />
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
