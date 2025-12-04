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
        "https://cdn.pixabay.com/photo/2016/11/29/07/12/forest-1868028_1280.jpg",
      created_at: "2025-12-01 04:05:06",
    },
    {
      user_id: 2,
      comment: "トーマスになっちゃった",
      image:
        "https://cdn.pixabay.com/photo/2020/06/20/01/24/frog-5319326_1280.jpg",
      created_at: "2025-12-01 04:05:06",
    },
    {
      user_id: 1,
      comment: "test3",
      image:
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg",
      created_at: "2025-12-02 04:05:06",
    },
    {
      user_id: 2,
      comment: "test4",
      image:
        "https://cdn.pixabay.com/photo/2023/04/27/19/03/flower-meadow-7955256_1280.jpg",
      created_at: "2025-11-29 04:05:06",
    },
    {
      user_id: 3,
      comment: "test5",
      image:
        "https://cdn.pixabay.com/photo/2018/03/08/21/51/lake-3209994_1280.jpg",
      created_at: "2025-11-30 10:05:06",
    },
  ]);
};
