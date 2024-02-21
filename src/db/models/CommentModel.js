import BaseModel from "@/db/models/BaseModel"
import PostModel from "@/db/models/PostModel"

class CommentModel extends BaseModel {
  static tableName = "comments"

  static get relationMappings() {
    return {
      post: {
        modelClass: PostModel,
        relation: BaseModel.BelongsToOneRelation,
        join: {
          from: "comments.postId",
          to: "posts.id"
        }
      }
    }
  }
}

export default CommentModel
