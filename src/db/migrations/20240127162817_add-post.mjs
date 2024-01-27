export const up = async (db) => {
  await db.schema.createTable("posts", (table) => {
    table.increments("id")
    table.text("postTitle").notNullable()
    table.text("postBody").notNullable()
  })
}

export const down = async (db) => {
  await db.schema.dropTable("posts")
}
