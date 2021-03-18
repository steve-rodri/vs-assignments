const cors = require("cors");
const jwt = require("express-jwt");
const morgan = require("morgan");
const { json } = require("express");

const jsonWebToken = () => {
  const config = { secret: process.env.SECRET, algorithms: ["HS256"] };
  const pathIsAuth = { path: ["/login", "/signup"] };
  return jwt(config).unless(pathIsAuth);
};

module.exports = app => {
  app.use(cors({ origin: "http://localhost:3000" }));
  app.use(json());
  app.use(jsonWebToken());
  app.use(morgan("dev"));
};
