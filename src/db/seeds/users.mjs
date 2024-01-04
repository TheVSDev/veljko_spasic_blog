import { faker } from "@faker-js/faker"

const getRandomUserType = () => {
  const userTypes = ["reader", "creator"]
  const randomIndex = Math.floor(Math.random() * userTypes.length)

  return userTypes[randomIndex]
}

export const seed = async (db) => {
  await db("users").insert(
    [...Array(20)].map(() => ({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      passwordHash: "alskdjalsdkjasdlkj",
      passwordSalt: "alskdjalsdkjasdlkj",
      userType: getRandomUserType()
    }))
  )
}
