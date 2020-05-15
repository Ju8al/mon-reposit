const express = require('express');
const bodyParser = require('body-parser');
const user = require('./app/routes/users')
const post = require('./app/routes/posts')
const comment = require('./app/routes/comments')
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get("/users", user.getUsers);
app.post("/users", user.createUser);
app.get("/users/:id", user.getUserById);
app.put("/users/:id", user.updateUser);
app.delete("/users/:id", user.deleteUser);

app.get("/users/:userid/posts", post.getPostByUserId);
app.get("/posts", post.getPosts);
app.post("/posts", post.createPost);
app.get("/posts/:id", post.getPostById);
app.put("/posts/:id", post.updatePost);
app.delete("/posts/:id", post.deletePost);

app.get("/posts/:postid/comments", comment.getCommentByPostId);
app.get("/comments", comment.getComments);
app.post("/comments", comment.createComment);
app.get("/comments/:id", comment.getCommentById);
app.put("/comments/:id", comment.updateComment);
app.delete("/comments/:id", comment.deleteComment);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});


