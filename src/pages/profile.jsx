import { useSession } from "@/web/components/SessionContext"
import Title from "@/web/components/ui/Title"
import Container from "@/web/components/ui/containers/Container"
import AccountTypeTag from "@/web/components/ui/AccountTypeTag"

const Profile = () => {
  const { session } = useSession()

  return (
    <div>
      <Title titleLabel="Profile" />
        <Container className="mx-auto w-[50%] mt-[100px]">
              <h2 className="text-center font-bold text-3xl mb-5">#{session?.id} <span className="text-[#0da839]">{session?.firstName} {session?.lastName}</span></h2>
              <p>E-mail: {session?.email}</p>
              <p>Account type: <AccountTypeTag accountTypeLabel={session?.userType} /></p>
        </Container>
    </div>
  )
}

export default Profile
