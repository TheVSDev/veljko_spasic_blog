import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import apiClient from "@/web/services/apiClient"
import Pagination from "@/web/components/Pagination"
import Title from "@/web/components/Title"

export const getServerSideProps = async ({ query: { page } }) => {
  const data = await apiClient("/users", { params: { page } })

  return {
    props: { initialData: data }
  }
}
const Users = (props) => {
  const { initialData } = props
  const { query } = useRouter()
  const page = Number.parseInt(query.page || 1, 10)
  const {
    data: {
      result: users,
      meta: { count }
    }
  } = useQuery({
    queryKey: ["users", page],
    queryFn: () => apiClient("/users", { params: { page } }),
    initialData,
    enabled: false
  })

  return (
    <>
      <Title titleLabel="Users" />
      <div className="relative">
        <table className="w-full mt-10">
          <thead>
            <tr>
              {["#", "First Name", "Last Name", "E-mail", "Account Type"].map(
                (label) => (
                  <th
                    key={label}
                    className="p-4 bg-green-300 text-center font-semibold">
                    {label}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, firstName, lastName, email, userType }) => (
              <tr key={id} className="even:bg-green-100 text-center">
                <td className="p-4">{id}</td>
                <td className="p-4">{firstName}</td>
                <td className="p-4">{lastName}</td>
                <td className="p-4">{email}</td>
                <td className="p-4">{userType}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={count} page={page} className="mt-8" />
      </div>
    </>
  )
}

export default Users
