import Title from "@/web/components/Title"
import Editor from "@/web/components/Editor"
import Button from "@/web/components/Button"
import { useRouter } from "next/router"

const CreatePostPage = () => {
  const router = useRouter()
  const handleCancel = () => {
   router.push("/my-posts")
 }
  
  return (
    <>
      <Title titleLabel="Create a post" />
      <Editor />
      <div className="flex flex-row justify-center gap-7">
        <Button btnLabel="Save" />
        <Button btnLabel="Cancel" variant="secondary" onClick={handleCancel} />
      </div>
    </>
  )
}

export default CreatePostPage
