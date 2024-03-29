import auth from "@/api/middlewares/auth"
import { validate } from "@/api/middlewares/validate"
import mw from "@/api/mw"
import { idValidator } from "@/utils/validators"

const handle = mw({
  GET: [
    validate({
      query: {
        userId: idValidator
      }
    }),
    async ({
      models: { UserModel },
      input: {
        query: { userId }
      },
      res
    }) => {
      const user = await UserModel.query().findById(userId).throwIfNotFound()

      res.send(user)
    }
  ],
  DELETE: [
    auth,
    validate({
      query: {
        userId: idValidator
      }
    }),
    async ({
      models: { UserModel },
      input: {
        query: { userId }
      },
      res
    }) => {
      const user = await UserModel.query().findById(userId).throwIfNotFound()

      await user.$query().delete()

      res.send(user)
    }
  ]
})

export default handle
