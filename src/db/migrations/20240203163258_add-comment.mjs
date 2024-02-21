export const up = async (db) => {
  await db.schema.createTable("comments", (table) => {
    table.increments("id")
    table.text("comment").notNullable()
    table
      .integer("postId")
      .notNullable()
      .references("id")
      .inTable("posts")
      .onDelete("CASCADE")
  })
}

export const down = async (db) => {
  await db.schema.dropTable("comments")
}
