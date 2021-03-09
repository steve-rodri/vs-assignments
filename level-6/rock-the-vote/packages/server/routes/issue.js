const { Router } = require("express");
const RouteHandler = require("../services/RouteHandler");
const {
  findIssue,
  findIssues,
  createIssue,
  deleteIssue,
  updateIssue,
  upvoteIssue,
  downvoteIssue,
} = require("../database/operations");

const index = new RouteHandler(findIssues, 200).use();
const create = new RouteHandler(createIssue, 201).use();
const show = new RouteHandler(findIssue, 200).use();
const remove = new RouteHandler(deleteIssue, 200).use();
const update = new RouteHandler(updateIssue, 202).use();
const upvote = new RouteHandler(upvoteIssue, 202).use();
const downvote = new RouteHandler(downvoteIssue, 202).use();

const router = Router();
router.route("/issues").get(index).post(create);
router.route("/issues/:id").get(show).delete(remove).put(update);
router.route("/issues/:id/upvote").put(upvote);
router.route("/issues/:id/downvote").put(downvote);

module.exports = router;
