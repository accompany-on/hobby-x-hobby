/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.id');
    table.string('title').notNullable();
    table.string('comment');
    table.integer('tag_id');
    table.string('link');
    table.timestamps('created_at', true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('posts');
};
