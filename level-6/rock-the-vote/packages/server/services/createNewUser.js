const jwt = require("express-jwt");
const User = require("../models/user");

const createNewUser = async data => {
  return new User(data).save(savedUser => {
    const token = jwt.sign(savedUser.toObject(), process.env.SECRET);
    return { user: savedUser, token };
  });
};

module.exports = createNewUser;
