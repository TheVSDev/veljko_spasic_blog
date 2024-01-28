import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"

import apiClient from "@/web/services/apiClient"
import Title from "@/web/components/Title"
import Button from "@/web/components/Button"
import Loader from "@/web/components/Loader"
import PostContainer from "@/web/components/PostContainer"
import Pagination from "@/web/components/Pagination"

export const getServerSideProps = async ({ query: { page } }) => {
  const data = await apiClient("/posts", { params: { page } })

  return {
    props: { initialData: data }
  }
}
const MyPosts = (props) => {
  const { initialData } = props
  const { query } = useRouter()
  const page = Number.parseInt(query.page || 1, 10)
  const {
    isFetching,
    data: { result: posts, meta: { count } } = {
      result: [],
      meta: { count: 0 }
    }
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => apiClient("/posts", { params: { page } }),
    initialData,
    enabled: true
  })

  return (
    <>
      <Title titleLabel="My Posts" />
      <Link href="/create-post">
        <Button btnLabel="Create a post" />
      </Link>
      <div className="relative">
        {isFetching && <Loader />}
        <PostContainer posts={posts} />
        <Pagination count={count} page={page} className="m-8" />
      </div>
    </>
  )
}

export default MyPosts
