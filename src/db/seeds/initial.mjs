import { faker } from "@faker-js/faker"

const getRandomUserType = () => {
  const userTypes = ["reader", "creator"]
  const randomIndex = Math.floor(Math.random() * userTypes.length)

  return userTypes[randomIndex]
}

export const seed = async (db) => {
  const users = [...new Array(20)].map(() => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    passwordHash: "alskdjalsdkjasdlkj",
    passwordSalt: "alskdjalsdkjasdlkj",
    userType: getRandomUserType()
  }))
  await db("users").insert(users)
  const posts = [...new Array(20)].map(() => ({
    postTitle: faker.lorem.words(),
    postBody: faker.lorem.paragraphs(),
    userId: Math.floor(Math.random() * 20) + 1
  }))
  await db("posts").insert(posts)
}
