/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tweets').del();
  await knex('tweets').insert([
    {
      user_id: 1,
      title: 'がらしい',
      comment: '社長に就任しました！',
      tag_id: 1,
    },
    {
      user_id: 2,
      title: 'トークン',
      comment: 'トーマスになっちゃった',
      tag_id: 5,
    },
  ]);
};
