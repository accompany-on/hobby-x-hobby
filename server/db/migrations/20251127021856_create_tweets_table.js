/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tweets", (table) => {
    table.increments("id").primary();
    table.integer("user_id").notNullable();
    table.foreign("user_id").references("users.id");
    table.string("comment");
    table.string("image");
    table.integer("tag_id");
    table.timestamps("created_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tweets");
};
