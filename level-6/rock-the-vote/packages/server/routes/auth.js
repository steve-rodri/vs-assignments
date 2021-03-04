const { Router } = require("express");
const {
  findUser,
  findOrCreateUser,
  getToken,
} = require("../database/operations/user");

const login = async (req, res, next) => {
  try {
    const user = await findUser(req.body.username.toLowerCase());
    const token = getToken(user, req.body.password);
    res.status(200).send({ token, user });
  } catch (err) {
    res.status(500);
    if (err.status) res.status(err.status);
    next(err);
  }
};

const signup = async (req, res, next) => {
  try {
    const user = await findOrCreateUser(req.body);
    res.status(201).send(user);
  } catch (err) {
    if (err.status) res.status(err.status);
    else res.status(500);
    next(err);
  }
};

const router = Router();
router.get("/auth", login);
router.post("/auth", signup);

module.exports = router;
