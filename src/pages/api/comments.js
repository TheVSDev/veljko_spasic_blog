import { string } from "yup"
import { HTTP_ERRORS } from "@/api/constants"
import { validate } from "@/api/middlewares/validate"
import mw from "@/api/mw"
import { idValidator } from "@/utils/validators"
import CommentModel from "@/db/models/CommentModel"

const handle = mw({
  POST: [
    validate({
      body: {
        comment: string(),
        postId: idValidator
      }
    }),
    async ({
      input: {
        body: { comment, postId }
      },
      res
    }) => {
      try {
        const insertedComment = await CommentModel.query().insertAndFetch({
          comment,
          postId
        })

        res.send({ result: true, insertedComment })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error inserting comment:", error)
        res
          .status(HTTP_ERRORS.INTERNAL_SERVER_ERROR)
          .send({
            result: false,
            error: "Internal Server Error",
            details: error.message
          })
      }
    }
  ],
  GET: [
    async ({
      input: {
        query: { postId }
      },
      res
    }) => {
      try {
        const comments = await CommentModel.query().where("postId", postId)
        res.send({ result: true, comments })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error fetching comments:", error)
        res
          .status(HTTP_ERRORS.INTERNAL_SERVER_ERROR)
          .send({ result: false, error: "Internal Server Error" })
      }
    }
  ]
})

export default handle
