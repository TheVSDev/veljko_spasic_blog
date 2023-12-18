import Link from "next/link"
import { useSession } from "@/web/components/SessionContext"
import MenuItem from "@/web/components/MenuItem"
import Button from "@/web/components/Button"

const Navbar = () => {
  const { session, signOut } = useSession()

  return (
    <header className="border-b-2 bg-slate-100">
      <div className="flex p-3">
        <div className="text-2xl">
          <Link href="/home" className="no-underline list-none">BLOG</Link>
        </div>
        <nav className="ms-auto">
          <ul className="flex h-full gap-16 items-center list-none text-base">
            {session ? (
              <>
                <MenuItem linkTo="/home" listItemLabel="Home page" />
                <MenuItem linkTo="/" listItemLabel="Dashboard" />
                <MenuItem linkTo="/" listItemLabel="Profile" />
                <MenuItem linkTo="/" listItemLabel="About" />
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
