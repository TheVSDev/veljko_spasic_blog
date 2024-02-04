import clsx from "clsx"

const AccountTypeTag = (props) => {
  const { accountTypeLabel, className } = props

  return (
    <>
      <span
        className={clsx(
          "border-2 text-sm p-2 font-semibold rounded-2xl",
          className
        )}>
        {accountTypeLabel}
      </span>
    </>
  )
}

export default AccountTypeTag
