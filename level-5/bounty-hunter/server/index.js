const express = require("express");
const { v4: uuid } = require("uuid");
let bounties = require("./bounties");
const app = express();
const PORT = 4000;

app.use(express.json());

app
  .route("/")
  .get((_, res) => {
    res.send(bounties);
  })
  .post((req, res) => {
    const bounty = req.body;
    bounty._id = uuid();
    bounties.push(bounty);
    res.send(bounty);
  });

app
  .route("/:_id")
  .delete((req, res) => {
    bounties = bounties.filter(b => b._id !== req.params._id);
    res.send("success");
  })
  .put((req, res) => {
    bounties = bounties.map(b =>
      b._id === req.params._id ? { ...b, ...req.body } : b
    );
    res.send(bounties.find(b => b._id === req.params._id));
  });

app.listen(PORT, () => console.log(`server running on ${PORT}`));
