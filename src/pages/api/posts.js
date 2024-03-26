import { string } from "yup"
import mw from "@/api/mw"
import config from "@/web/config"
import { validate } from "@/api/middlewares/validate"
import { idValidator, nameValidator, pageValidator } from "@/utils/validators"
import PostModel from "@/db/models/PostModel"
import { HTTP_ERRORS } from "@/api/constants"

const handle = mw({
  POST: [
    validate({
      body: {
        postTitle: nameValidator,
        postBody: string(),
        userId: idValidator
      }
    }),
    async ({
      res,
      input: {
        body: { postTitle, postBody, userId }
      }
    }) => {
      try {
        const post = await PostModel.query().insert({
          postTitle,
          postBody,
          userId
        })

        res.send({
          result: post,
          message: "Post created successfully"
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error creating post:", error)
        res.status(HTTP_ERRORS.INTERNAL_SERVER_ERROR).send({
          error: "Internal Server Error"
        })
      }
    }
  ],
  GET: [
    validate({
      query: {
        page: pageValidator
      }
    }),
    async ({
      res,
      input: {
        query: { page }
      }
    }) => {
      const query = PostModel.query()
      const posts = await query
        .clone()
        .limit(config.ui.itemsPerPage)
        .offset((page - 1) * config.ui.itemsPerPage)
      const [{ count }] = await query.clone().count()

      res.send({
        result: posts,
        meta: {
          count
        }
      })
    }
  ]
})

export default handle
