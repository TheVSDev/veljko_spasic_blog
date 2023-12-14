import Link from "next/link"

const ClickableRedirect = (props) => {
  const { redirectMessage, redirectLink, redirectLinkLabel } = props

  return <span className="text-xs font-medium">{redirectMessage} <Link className="text-blue-600" href={redirectLink}>{redirectLinkLabel}</Link></span>
}

export default ClickableRedirect