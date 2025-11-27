const express = require("express");
const knex = require("./knex");

const app = express();
const PORT = 3000;

app.use(express.static("./"));

app.use(express.json());

app.get("/api/posts", async (req, res) => {
  try {
    const respose = await knex.select().from("posts");
    res.status(200).json(respose);
  } catch (error) {
    console.error(error);
  }
});

app.post("/api/posts", async (req, res) => {
  try {
    const reqBody = req.body;
    const postData = await knex("posts").insert({
      title: reqBody.title,
      comment: reqBody.comment,
      user_id: reqBody.user_id,
      link: reqBody.link,
      // tag_id: reqBody.tag_id,
    });
    res.status(201).end();
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/tags", async (req, res) => {
  try {
    const tag = await knex.select().from("tags");
    res.status(200).json(tag);
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/tags", async (req, res) => {
  try {
    const tagBody = req.body;
    const postData = await knex("tags").insert({
      name: tagBody.name,
    });
    res.status(200).end();
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log("Server started on port:" + PORT);
});
