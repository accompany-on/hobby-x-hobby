/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tags").del();
  await knex("tags").insert([
    { name: "PC界隈" },
    { name: "服界隈" },
    { name: "釣り界隈" },
    { name: "キャンプ界隈" },
    { name: "筋トレ界隈" },
    { name: "風呂キャン界隈" },
    { name: "旅行界隈" },
    { name: "運動好き界隈" },
    { name: "アニヲタ界隈" },
    { name: "酒界隈" },
    { name: "車界隈" },
    { name: "スポーツ界隈" },
  ]);
};
