import Link from "next/link"
import Title from "@/web/components/Title"
import Button from "@/web/components/Button"

const MyPosts = () => (
  <>
    <Title titleLabel="My Posts" />
    <Link href="/create-post">
      <Button btnLabel="Create a post" />
    </Link>
  </>
)

export default MyPosts
