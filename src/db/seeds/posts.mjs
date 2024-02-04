import { faker } from "@faker-js/faker"

export const seed = async (db) => {
  await db("posts").insert(
    [...Array(20)].map(() => ({
      postTitle: faker.lorem.words(),
      postBody: faker.lorem.paragraphs()
    }))
  )
}
