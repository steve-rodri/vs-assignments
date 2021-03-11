const { Router } = require("express");
const { findUser, findOrCreateUser } = require("../database/operations/user");
const RouteHandler = require("../services/RouteHandler");

const login = new RouteHandler(findUser, 200).use();
const signup = new RouteHandler(findOrCreateUser, 201).use();

const router = Router();
router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
