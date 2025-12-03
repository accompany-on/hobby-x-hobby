const express = require('express');
const knex = require('./knex');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/tweets', async (req, res) => {
  try {
    const queryTagId = req.query.tagId;
    let tweets;
    if (queryTagId) {
      posts = await knex
        .where('post_to_tags.tag_id', Number(queryTagId))
        .select('post_id')
        .from('post_to_tags');

      const postIds = posts.map((post) => post.post_id);
      tweets = await knex.whereIn('tweets.id', postIds).select().from('tweets');
    } else {
      tweets = await knex.select().from('tweets');
    }

    const resData = await Promise.all(
      tweets.map(async (tweet) => {
        const userInfo = await knex
          .where('id', tweet.user_id)
          .first()
          .from('users');
        const tagInfo = await knex
          .table('post_to_tags')
          .innerJoin('tags', function () {
            this.on('tags.id', '=', 'post_to_tags.tag_id');
          })
          .where('post_to_tags.post_id', tweet.id);

        const tags = tagInfo.map((data) => {
          return { id: data.tag_id, name: data.name };
        });
        const data = {
          id: tweet.id,
          user_name: userInfo.name,
          user_icon: userInfo.icon,
          comment: tweet.comment,
          image: tweet.image,
          tag_names: tags,
          created_at: tweet.created_at,
        };
        return data;
      })
    );

    res.status(200).json(resData);
  } catch (error) {
    console.error(error);
  }
});

app.post('/api/tweets', async (req, res) => {
  try {
    const { user_id, comment, image, tags } = req.body;

    const [inserted] = await knex('tweets')
      .insert({ user_id, comment, image })
      .returning('id');

    const post_id = inserted.id;

    await Promise.all(
      tags.map(async (tag) => {
        await knex('post_to_tags').insert({ post_id: post_id, tag_id: tag });
      })
    );

    res.status(201).end();
  } catch (error) {
    console.error('POST /api/tweets error:', error);
    res.status(500).json({ error: 'failed to insert tweet' });
  }
});

app.get('/api/tags', async (req, res) => {
  try {
    const queryTag = req.query.tag;
    if (queryTag) {
      const respose = await knex
        .where('tags.name', queryTag)
        .select()
        .from('tags');
      console.log(respose);
      res.status(200).json(respose[0]);
    } else {
      const tag = await knex.select().from('tags');
      console.log(tag);
      res.status(200).json(tag);
    }
  } catch (error) {
    console.error(error);
  }
});

app.post('/api/tags', async (req, res) => {
  try {
    const tagBody = req.body;
    const postData = await knex('tags').insert({
      name: tagBody.name,
    });
    res.status(200).end();
  } catch (error) {
    console.error(error);
  }
});

app.get('/api/users/:email', async (req, res) => {
  const email = req.params.email;
  const userData = await knex
    .where('users.email', String(email))
    .select()
    .from('users');
  res.status(200).json(userData);
});

app.post('/api/users', async (req, res) => {
  try {
    await knex('users').insert(req.body);
    res.status(200).end();
  } catch (error) {
    console.error(error);
  }
});

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server started on port:' + PORT);
});

// 認証が必要なAPIにはこんな感じで、authMiddlewareを第二引数に渡してください
// app.get("/api/users", authMiddleware, async (req, res) => {
// ..
// });