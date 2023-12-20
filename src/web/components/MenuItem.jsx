import Link from "next/link"

const MenuItem = (props) => {
  const {linkTo, listItemLabel} = props

  return (<>
    <Link href={linkTo} className="no-underline"><li className="list-none p-2 hover:bg-green-600 hover:text-white">{listItemLabel}</li></Link>
  </>)
}

export default MenuItem