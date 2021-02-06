const express = require("express");
const { v4: uuid } = require("uuid");
let todos = require("./todos");
const app = express();
const PORT = 4000;

app.use(express.json());

app
  .route("/")
  .get((_, res) => res.send(todos))
  .post((req, res) => {
    const todo = req.body;
    todo._id = uuid();
    todos.push(todo);
    res.send(todo);
  });

app
  .route("/:_id")
  .get((req, res) => res.send(todos.find(t => t._id === req.params._id)))
  .delete((req, res) => {
    todos = todos.filter(t => t._id !== req.params._id);
    res.send("successfully deleted");
  })
  .put((req, res) => {
    let todo;
    todos = todos.map(t => {
      if (t._id !== req.params._id) return t;
      todo = { ...t, ...req.body };
      return todo;
    });
    res.send(todo);
  });

app.listen(PORT, console.log(`server running on port ${PORT}`));
