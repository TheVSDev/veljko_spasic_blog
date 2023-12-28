import { validate } from "@/api/middlewares/validate"
import mw from "@/api/mw"
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  typeValidator,
  pageValidator
} from "@/utils/validators"
import config from "@/web/config"

const handle = mw({
  POST: [
    validate({
      body: {
        firstName: nameValidator,
        lastName: nameValidator,
        email: emailValidator,
        password: passwordValidator,
        userType: typeValidator
      }
    }),
    async ({
      input: {
        body: { firstName, lastName, email, password, userType }
      },
      models: { UserModel },
      res
    }) => {
      const user = await UserModel.query().findOne({ email })

      if (user) {
        res.send({ result: true })

        return
      }

      const toLowerCaseUserType = userType.toLowerCase()
      const [passwordHash, passwordSalt] =
        await UserModel.hashPassword(password)

      // Ensure that userType is properly handled in the insertAndFetch method
      await UserModel.query().insertAndFetch({
        firstName,
        lastName,
        email,
        passwordHash,
        passwordSalt,
        userType: toLowerCaseUserType
      })

      res.send({ result: true })
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
      models: { UserModel },
      input: {
        query: { page }
      }
    }) => {
      const query = UserModel.query()
      const users = await query
        .clone()
        .limit(config.ui.itemsPerPage)
        .offset((page - 1) * config.ui.itemsPerPage)
      const [{ count }] = await query.clone().count()

      res.send({
        result: users,
        meta: {
          count
        }
      })
    }
  ]
})

export default handle
