import Link from "next/link"
import Image from "next/image"

import { useSession } from "@/web/components/SessionContext"
import MenuItem from "@/web/components/MenuItem"
import Button from "@/web/components/Button"
import AccountTypeTag from "@/web/components/AccountTypeTag"
import Search from "@/web/components/Search"
const TagReader = () => (
  <AccountTypeTag
    accountTypeLabel="READER"
    className="text-red-600 border-red-600"
  />
)
const TagCreator = () => (
  <AccountTypeTag
    accountTypeLabel="CREATOR"
    className="text-blue-600 border-blue-600"
  />
)
const TagAdmin = () => (
  <AccountTypeTag
    accountTypeLabel="ADMIN"
    className="text-green-600 border-green-600"
  />
)
const Navbar = () => {
  const { session, signOut } = useSession()
  const isReader = session?.userType === "reader"
  const isCreator = session?.userType === "creator"
  const isAdmin = session?.userType === "admin"

  return (
    <header className="border-b-2 bg-slate-100">
      <div className="flex p-3">
        <div className="text-2xl mt-1">
          <Link href="/">
            <Image src="/logo.png" alt="Blog logo" width={50} height={55} />
          </Link>
        </div>
        <nav className="ms-auto">
          <ul className="flex h-full gap-16 items-center list-none text-base">
            {session ? (
              <>
                <Search />
                <MenuItem linkTo="/" listItemLabel="Home" />
                <MenuItem linkTo="/" listItemLabel="Dashboard" />
                <MenuItem linkTo="/profile" listItemLabel="Profile" />
                {isReader && <TagReader />}
                {isCreator && (
                  <>
                    <MenuItem linkTo="/my-posts" listItemLabel="My posts" />
                    <TagCreator />
                  </>
                )}
                {isAdmin && (
                  <>
                    <MenuItem linkTo="/users" listItemLabel="Users" />
                    <TagAdmin />
                  </>
                )}
                <Button btnLabel="Sign out" onClick={signOut} />
              </>
            ) : (
              <>
                <MenuItem linkTo="/sign-up" listItemLabel="Sign Up" />
                <MenuItem linkTo="/sign-in" listItemLabel="Sign In" />
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
