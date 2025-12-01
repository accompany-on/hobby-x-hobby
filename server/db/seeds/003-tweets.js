/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tweets").del();
  await knex("tweets").insert([
    {
      user_id: 1,
      comment: "社長に就任しました！",
      image:
        "https://cdn.pixabay.com/photo/2017/10/04/11/45/twitter-2815914_1280.jpg",
      tag_id: 1,
      created_at: "2025-12-01 04:05:06",
    },
    {
      user_id: 2,
      comment: "トーマスになっちゃった",
      image:
        "https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948_1280.jpg",
      tag_id: 1,
      created_at: "2025-12-01 04:05:06",
    },
  ]);
};
