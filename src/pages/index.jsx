import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"

import apiClient from "@/web/services/apiClient"
import Title from "@/web/components/ui/Title"
import Loader from "@/web/components/ui/Loader"
import Pagination from "@/web/components/ui/navigation/Pagination"
import PostContainer from "@/web/components/ui/containers/PostContainer"

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
