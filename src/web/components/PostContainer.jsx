import clsx from "clsx"
import { useState } from "react"
import { formatDateTimeShort } from "@/utils/formatters"
import CommentContainer from "@/web/components/CommentContainer"
import Icon from "@/web/components/Icon"

const editIconVariants = {
  edit: "w-[30px] ml-4",
  noEdit: "hidden"
}
const PostContainer = (props) => {
  const { posts, editIconVariant = "noEdit", ...otherProps } = props
  const [commentSections, setCommentSections] = useState(posts.map(() => false))
  const toggleCommentSection = (index) => {
    const updatedCommentSections = [...commentSections]
    updatedCommentSections[index] = !updatedCommentSections[index]
    setCommentSections(updatedCommentSections)
  }

  return (
    <div className="w-full mt-10 grid place-items-center">
      {posts.map(({ postTitle, postBody, createdAt }, index) => (
        <div
          key={postTitle}
          className="mt-10 border-2 border-black rounded-lg w-[1000px] shadow-lg">
          <span className="p-2 text-2xl font-semibold text-[#0da839]">
            {postTitle}
          </span>
          <p className="p-2">{postBody}</p>
          <p className="p-2 float-right text-stone-500 italic text-base">
            Created at: {formatDateTimeShort(new Date(createdAt))}
          </p>
          <div className="flex items-center">
            <button onClick={() => toggleCommentSection(index)}>
              <Icon icon="comment" className="w-[30px]" />
            </button>
            <Icon
              icon="edit"
              className={clsx(editIconVariants[editIconVariant])}
              {...otherProps}
            />
          </div>
          {commentSections[index] && <CommentContainer />}
        </div>
      ))}
    </div>
  )
}

export default PostContainer
