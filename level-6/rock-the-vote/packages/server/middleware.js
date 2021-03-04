const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("express-jwt");
const morgan = require("morgan");
const { json } = require("express");

dotenv.config();

const jsonWebToken = () => {
  const config = { secret: process.env.SECRET, algorithms: ["HS256"] };
  const pathIsAuth = { path: ["/auth"] };
  return jwt(config).unless(pathIsAuth);
};

module.exports = app => {
  app.use(cors({ origin: "http://localhost:3000" }));
  app.use(json());
  app.use(jsonWebToken());
  app.use(morgan("dev"));
};
