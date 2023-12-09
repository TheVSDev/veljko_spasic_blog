import Link from "next/link"
import Title from "@/web/components/Title"
import Button from "@/web/components/Button"
import Container from "@/web/components/Container"

const IndexPage = () => (
  <Container className="flex flex-col justify-center items-center w-[450px] h-[270px] absolute left-[35%] top-[25%]">
    <Title titleLabel="Blog" />
    <p className="mt-7 text-center">
      Welcome to the best blogging platform in the world. <br /> You can log in
      now, or if you don't have an account, create one.
    </p>
    <br />
    <span className="flex gap-5">
      <Link href="/sign-in"><Button btnLabel="Sign in" /></Link>
      <Link href="/sign-up"><Button btnLabel="Sign up" /></Link>
    </span>
  </Container>
)

export default IndexPage
