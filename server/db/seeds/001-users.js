/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      name: "タケシ",
      email: "takeshi@example.com",
      icon: "https://cdn.pixabay.com/photo/2022/06/25/07/21/seagull-7282992_1280.png",
    },
    {
      name: "サトシ",
      email: "satoshi@example.com",
      icon: "https://cdn.pixabay.com/photo/2020/10/18/20/43/dinosaur-5666127_1280.png",
    },
    {
      name: "カスミ",
      email: "kasumi@example.com",
      icon: "https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg",
    },
  ]);
};
