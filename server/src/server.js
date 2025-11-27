const express = require("express");
const knex = require("./knex");

const app = express();
const PORT = 3000;

app.use(express.static("./"));

app.use(express.json());

app.get("/api/posts", async (req, res) => {
  const respose = await knex.select().from("posts");
  res.status(200).json(respose);
});

app.post("/api/posts", async (req, res) => {
  const reqBody = req.body;
  const postData = await knex("posts").insert({
    title: reqBody.title,
    comment: reqBody.comment,
    user_id: reqBody.user_id,
    link: reqBody.link,
    tag_id: reqBody.tag_id,
  });
  res.status(201).end();
});

app.listen(PORT, () => {
  console.log("Server started on port:" + PORT);
});
