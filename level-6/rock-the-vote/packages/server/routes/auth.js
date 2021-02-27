const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const createNewUser = require("../services/createNewUser");

const router = express.Router();

router
  .route("/auth")
  .post((req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() })
      .then(user => {
        if (user) {
          res.status(403);
          return next(new Error("That username is already taken"));
        }
        return createNewUser(req.body).then(data => res.status(201).send(data));
      })
      .catch(err => {
        res.status(500);
        return next(err);
      });
  })
  .get((req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() })
      .then(user => {
        if (!user) {
          res.status(403);
          return next(new Error("No user found with those credentials"));
        }
        if (req.body.password !== user.password) {
          res.status(403);
          return next(new Error("Password is incorrect"));
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET);
        return res.status(200).send({ token, user });
      })
      .catch(err => {
        res.status(500);
        return next(err);
      });
  });

module.exports = router;
