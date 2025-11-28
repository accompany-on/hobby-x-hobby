const express = require("express");
const knex = require("./knex");

const app = express();
const PORT = 3000;

app.use(express.static("./"));

app.use(express.json());

app.get("/api/tweets", async (req, res) => {
  try {
    const queryTagId = req.query.tagId;
    if (queryTagId) {
      const respose = await knex
        .where("tweets.tag_id", Number(queryTagId))
        .select()
        .from("tweets");
      res.status(200).json(respose);
    } else {
      const respose = await knex.select().from("tweets");
      res.status(200).json(respose);
    }
  } catch (error) {
    console.error(error);
  }
});

app.post("/api/tweets", async (req, res) => {
  try {
    const reqBody = req.body;
    const postData = await knex("tweets").insert({
      title: reqBody.title,
      comment: reqBody.comment,
      user_id: reqBody.user_id,
      link: reqBody.link,
      tag_id: reqBody.tag_id,
    });
    res.status(201).end();
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/tags", async (req, res) => {
  try {
    const queryTag = req.query.tag;
    if (queryTag) {
      const respose = await knex
        .where("tags.name", queryTag)
        .select()
        .from("tags");
      res.status(200).json(respose[0]);
    } else {
      const tag = await knex.select().from("tags");
      res.status(200).json(tag);
    }
  } catch (error) {
    console.error(error);
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
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log("Server started on port:" + PORT);
});
