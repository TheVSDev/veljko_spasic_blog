import Title from "@/web/components/Title"
import Editor from "@/web/components/Editor"
import Button from "@/web/components/Button"

const CreatePostPage = () => (
  <>
    <Title titleLabel="Create a post" />
    <Editor />
    <div className="flex flex-row justify-center gap-7">
      <Button btnLabel="Save" />
      <Button btnLabel="Cancel" variant="secondary" />
    </div>
  </>
)

export default CreatePostPage
