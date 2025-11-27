/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    { name: 'タケシ', email: 'takeshi@example.com' },
    { name: 'サトシ', email: 'satoshi@example.com' },
    { name: 'カスミ', email: 'kasumi@example.com' },
  ]);
};
