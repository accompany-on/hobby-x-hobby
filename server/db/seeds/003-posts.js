/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('posts').del();
  await knex('posts').insert([
    { user_id: 1, title: 'がらしい', comment: '社長に就任しました！' },
    { user_id: 2, title: 'トークン', comment: 'トーマスになっちゃった' },
  ]);
};
