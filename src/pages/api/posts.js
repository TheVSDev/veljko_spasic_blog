import { validate } from "@/api/middlewares/validate"
import mw from "@/api/mw"
import { nameValidator } from "@/utils/validators"
import { string } from "yup"
import PostModel from "@/db/models/PostModel"

const handle = mw({
  POST: [
    validate({
      body: {
        postTitle: nameValidator,
        postBody: string(),
      }
    }),
    async ({
      res,
      input: {
        body: { postTitle, postBody }
      }
    }) => {
      try {
        const post = await PostModel.query().insert({
          postTitle,
          postBody
        })

        res.send({
          result: post,
          message: "Post created successfully"
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error creating post:", error)
        res.status(500).send({
          error: "Internal Server Error"
        })
      }
    }
  ]
})

export default handle
