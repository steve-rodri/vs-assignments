const jwt = require("jsonwebtoken");
const HTTPError = require("../../services/HTTPError");
const randomNum = require("../../services/randomNum");
const { User } = require("../models");

const getRandomUsers = async (min, max) => {
  const amount = randomNum(min, max);
  const users = await User.aggregate().sample(amount).exec();
  return users.map(user => user._id);
};

const getRandomUser = async () => {
  const users = await getRandomUsers(1, 1);
  return users[0];
};

const getToken = async (user, password) => {
  const match = await user.verify(password.toString());
  if (!match) throw new HTTPError(403, "Password is incorrect");
  const userNoPw = user.withoutPassword();
  return jwt.sign(userNoPw, process.env.SECRET);
};

const createUser = async data => {
  let user = await User.create(data);
  user = user.withoutPassword();
  const token = jwt.sign(user, process.env.SECRET);
  return { user, token };
};

const findUser = async ({ body }) => {
  const { username, password } = body;
  if (!username) throw new HTTPError(404, "No username provided");
  let user = await User.findOne({ username });
  if (!user) throw new HTTPError(403, "No User found with that Username");
  const token = await getToken(user, password);
  user = user.withoutPassword();
  return { user, token };
};

const findOrCreateUser = async ({ body }) => {
  const { username, password } = body;
  const user = await User.findOne({ username });
  if (user) throw new HTTPError(403, "Username already taken");
  return createUser({ username, password });
};

module.exports = {
  getRandomUser,
  getRandomUsers,
  findOrCreateUser,
  findUser,
};
