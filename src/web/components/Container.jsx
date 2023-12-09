import clsx from "clsx"

const Container = (props) => {
  const { children, className } = props

  return (
    <div className={clsx("border-2 border-solid border-[#111] border-2 border-solid border-[#111] p-6", className)}>
      {children}
    </div>
  )
}

export default Container
