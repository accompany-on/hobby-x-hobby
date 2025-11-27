/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('posts').del();
  await knex('posts').insert([
    { title: 'がらしい', comment: '社長に就任しました！' },
    { title: 'トークン', comment: 'トーマスになっちゃった' },
  ]);
};
