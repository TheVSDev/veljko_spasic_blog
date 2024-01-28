import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"

import Title from "@/web/components/Title"
import apiClient from "@/web/services/apiClient"
import Loader from "@/web/components/Loader"
import Pagination from "@/web/components/Pagination"
import PostContainer from "@/web/components/PostContainer"

export const getServerSideProps = async ({ query: { page } }) => {
  const data = await apiClient("/posts", { params: { page } })

  return {
    props: { initialData: data }
  }
}
const IndexPage = (props) => {
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
      <Title titleLabel="Blog" />
      <div className="relative">
        {isFetching && <Loader />}
        <PostContainer posts={posts} />
        <Pagination count={count} page={page} className="m-8" />
      </div>
    </>
  )
}

export default IndexPage
