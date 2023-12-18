// Imports
import { NextResponse } from "next/server"
import ms from "ms"
import jsonwebtoken from "jsonwebtoken"

import config from "@/config"
import mw from "@/api/mw"
import { UnauthorizedError } from "@/api/errors"
import { emailValidator, passwordValidator } from "@/utils/validators"
import auth from "@/api/middlewares/auth"
import { validate } from "@/api/middlewares/validate"

// Methods handler
const handle = mw({
  POST: [
    validate({
      body: {
        email: emailValidator,
        password: passwordValidator,
      },
    }),
    async ({
      input: {
        body: { email, password },
      },
      models: { UserModel },
      res,
    }) => {
      const user = await UserModel.query().findOne({ email })

      if (!user) {
        throw new UnauthorizedError()
      }

      const [passwordHash] = await UserModel.hashPassword(
        password,
        user.passwordSalt,
      )

      if (passwordHash !== user.passwordHash) {
        throw new UnauthorizedError()
      }

      const jwt = jsonwebtoken.sign(
        {
          payload: {
            id: user.id,
          },
        },
        config.security.jwt.secret,
        { expiresIn: config.security.jwt.expiresIn },
      )
      const cookie = new NextResponse().cookies.set({
        name: config.security.jwt.cookieName,
        value: jwt,
        expires: Date.now() + ms(config.security.jwt.expiresIn),
        httpOnly: true,
        secure: config.security.jwt.secure,
      })

      res.setHeader("set-cookie", cookie.toString()).send({ result: jwt })
    },
  ],

  DELETE: [
    auth,
    ({ res }) => {
      const cookie = new NextResponse().cookies.set({
        name: config.security.jwt.cookieName,
        value: "",
        expires: 0,
        httpOnly: true,
        secure: config.security.jwt.secure,
      })

      res.setHeader("set-cookie", cookie.toString()).send({ result: true })
    },
  ],
})

export default handle
