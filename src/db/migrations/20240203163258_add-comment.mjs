export const up = async (db) => {
  await db.schema.createTable("comments", (table) => {
    table.increments("id")
    table.text("comment").notNullable()
    table.integer("postId").unsigned().notNullable()
    table.foreign("postId").references("posts.id").onDelete("CASCADE")
  })
}

export const down = async (db) => {
  await db.schema.dropTable("comments")
}
