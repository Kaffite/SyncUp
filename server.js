const express = require('express');
const app = express();
const posts = [];

app.use(express.json());

app.post('/posts', (req, res) => {
  const { name, content } = req.body;
  const newPost = { id: posts.length + 1, name, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});