import { useRouter } from "next/router"
import { useQuery, useMutation } from "@tanstack/react-query"
import apiClient from "@/web/services/apiClient"
import Pagination from "@/web/components/Pagination"
import Title from "@/web/components/Title"
import Button from "@/web/components/Button"
import Loader from "@/web/components/Loader"

export const getServerSideProps = async ({ query: { page } }) => {
  const data = await apiClient("/users", { params: { page } })

  return {
    props: { initialData: data }
  }
}
const UserDisplayTable = ({ users, onDelete }) => (
  <table className="w-full mt-10">
    <thead>
      <tr>
        {["#", "First Name", "Last Name", "E-mail", "Account Type", "🗑️"].map(
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
          <td className="p-2">{id}</td>
          <td className="p-2">{firstName}</td>
          <td className="p-2">{lastName}</td>
          <td className="p-2">{email}</td>
          <td className="p-2">{userType}</td>
          <td className="p-2">
            <Button
              btnLabel="Delete"
              data-id={id}
              onClick={() => onDelete(id)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)
const Users = (props) => {
  const { initialData } = props
  const { query } = useRouter()
  const page = Number.parseInt(query.page || 1, 10)
  const {
    isFetching,
    data: {
      result: users,
      meta: { count }
    },
    refetch
  } = useQuery({
    queryKey: ["users", page],
    queryFn: () => apiClient("/users", { params: { page } }),
    initialData,
    enabled: false
  })
  const { mutateAsync: deleteUser } = useMutation({
    mutationFn: (userId) => apiClient.delete(`/users/${userId}`)
  })
  const handleClickDelete = async (userId) => {
    await deleteUser(userId)
    await refetch()
  }

  return (
    <>
      <Title titleLabel="Users" />
      <div className="relative">
      {isFetching && <Loader />}
        <UserDisplayTable users={users} onDelete={handleClickDelete} />
        <Pagination count={count} page={page} className="mt-8" />
      </div>
    </>
  )
}

export default Users
