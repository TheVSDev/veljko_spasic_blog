import clsx from "clsx"
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  PencilIcon,
  ChatBubbleOvalLeftIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/solid"

const icons = {
  info: InformationCircleIcon,
  danger: ExclamationCircleIcon,
  success: CheckCircleIcon,
  edit: PencilIcon,
  comment: ChatBubbleOvalLeftIcon,
  search: MagnifyingGlassIcon
}
const Icon = (props) => {
  const { icon = "", className, ...otherProps } = props
  const SelectedIcon = icons[icon]

  return <SelectedIcon className={clsx(className)} {...otherProps} />
}

export default Icon
