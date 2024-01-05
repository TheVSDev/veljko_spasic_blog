import clsx from "clsx"
import Link from "next/link"
import config from "@/web/config"

const PaginationLink = (props) => {
  const { isActive, page, className, ...otherProps } = props

  return (
    <Link
      className={clsx(
        "p-3 basis-12 text-center hover:bg-green-100",
        {
          "bg-green-400 font-semibold": isActive
        },
        className
      )}
      href={{ query: { page } }}
      {...otherProps}
    />
  )
}
const Pagination = (props) => {
  const { count, page, className, ...otherProps } = props
  const countPages = Math.ceil(count / config.ui.itemsPerPage)

  return (
    <div
      className={clsx("flex gap-2 justify-center", className)}
      {...otherProps}>
      {page > 1 && (
        <>
          <PaginationLink page={1}>&lt;&lt;</PaginationLink>
          <PaginationLink page={page - 1}>&lt;</PaginationLink>
          <PaginationLink page={page - 1}>{page - 1}</PaginationLink>
        </>
      )}
      <PaginationLink page={page} isActive>
        {page}
      </PaginationLink>
      {page < countPages && (
        <>
          <PaginationLink page={page + 1}>{page + 1}</PaginationLink>
          <PaginationLink page={page + 1}>&gt;</PaginationLink>
          <PaginationLink page={countPages}>&gt;&gt;</PaginationLink>
        </>
      )}
    </div>
  )
}

export default Pagination
