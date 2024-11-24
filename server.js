const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// Fake in-memory database
let posts = [];

// Get all posts
app.get("/posts", (req, res) => {
    res.json(posts);
});

// Add a new post
app.post("/posts", (req, res) => {
    const newPost = req.body;
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
