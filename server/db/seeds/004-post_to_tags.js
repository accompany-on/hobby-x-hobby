/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("post_to_tags").del();
  await knex("post_to_tags").insert([
    { post_id: 1, tag_id: 1 },
    { post_id: 1, tag_id: 2 },
    { post_id: 2, tag_id: 1 },
    { post_id: 2, tag_id: 3 },
    { post_id: 2, tag_id: 6 },
    { post_id: 3, tag_id: 2 },
    { post_id: 3, tag_id: 4 },
    { post_id: 3, tag_id: 8 },
    { post_id: 4, tag_id: 1 },
    { post_id: 4, tag_id: 5 },
    { post_id: 4, tag_id: 6 },
    { post_id: 4, tag_id: 8 },
    { post_id: 5, tag_id: 8 },
    { post_id: 5, tag_id: 11 },
    { post_id: 5, tag_id: 7 },
    { post_id: 5, tag_id: 9 },
    { post_id: 5, tag_id: 3 },
    { post_id: 5, tag_id: 5 },
  ]);
};
