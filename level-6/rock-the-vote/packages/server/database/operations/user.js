const jwt = require("express-jwt");
const HTTPError = require("../../services/HTTPError");
const User = require("../../models/user");
const randomNum = require("../../services/randomNum");

const getRandomUsers = async (min, max) => {
  const amount = randomNum(min, max);
  const users = await User.aggregate().sample(amount).exec();
  return users.map(user => user._id);
};

const getRandomUser = async () => {
  const users = await getRandomUsers(1, 1);
  const user = users[0];
  return user;
};

const createUser = async data => {
  let user = await User.create(data);
  user = user.withoutPassword();
  const token = jwt.sign(user, process.env.SECRET);
  return { user, token };
};

const findUser = async username => {
  let user = await User.findOne({ username });
  if (!user) throw new HTTPError(404, "no user found");
  user = user.withoutPassword();
  return user;
};

const findOrCreateUser = async data => {
  const username = data.username.toLowerCase();
  const user = await User.findOne({ username });
  if (user) throw new HTTPError(403, "username already taken");
  return createUser(data);
};

const getToken = async (user, password) => {
  const match = await user.checkPassword(password);
  if (!match) throw new HTTPError(403, "password is incorrect");
  return jwt.sign(user, process.env.SECRET);
};

module.exports = {
  getRandomUser,
  getRandomUsers,
  findOrCreateUser,
  findUser,
  getToken,
};
