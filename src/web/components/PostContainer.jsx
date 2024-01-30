import CommentContainer from "@/web/components/CommentContainer"

const PostContainer = ({ posts }) => (
  <div className="w-full mt-10 grid place-items-center">
    {posts.map(({ postTitle, postBody }) => (
      <div
        key={postTitle}
        className="mt-10 border-2 border-black rounded-lg w-[1000px] shadow-lg">
        <span className="p-2 text-2xl font-semibold text-[#0da839]">
          {postTitle}
        </span>
        <p className="p-2">{postBody}</p>
        <CommentContainer />
      </div>
    ))}
  </div>
)

export default PostContainer
