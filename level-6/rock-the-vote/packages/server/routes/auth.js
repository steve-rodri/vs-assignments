const { Router } = require("express");
const { findUser, findOrCreateUser } = require("../database/operations/user");

const login = async (req, res, next) => {
  try {
    const token = await findUser(req.body);
    res.status(200).send(token);
  } catch (err) {
    next(err);
  }
};

const signup = async (req, res, next) => {
  try {
    const token = await findOrCreateUser(req.body);
    res.status(201).send(token);
  } catch (err) {
    next(err);
  }
};

const router = Router();
router.route("/auth").get(login).post(signup);

module.exports = router;
