import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"

import Title from "@/web/components/Title"
import apiClient from "@/web/services/apiClient"
import Loader from "@/web/components/Loader"
import Pagination from "@/web/components/Pagination"

export const getServerSideProps = async ({ query: { page } }) => {
  const data = await apiClient("/posts", { params: { page } })

  return {
    props: { initialData: data }
  }
}
const PostsDisplay = ({ posts }) => (
  <table className="w-full mt-10">
    <tbody>
      {posts.map(({ id, postTitle, postBody }) => (
        <tr key={id} className="even:bg-green-100 text-center">
          <td className="p-2">{id}</td>
          <td className="p-2">{postTitle}</td>
          <td className="p-2">{postBody}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
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
        <PostsDisplay posts={posts} />
        <Pagination count={count} page={page} className="mt-8" />
      </div>
    </>
  )
}

export default IndexPage
