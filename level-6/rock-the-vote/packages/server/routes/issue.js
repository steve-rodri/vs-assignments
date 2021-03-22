const { Router } = require("express");
const { RouteHandler } = require("../utils");
const {
  findIssue,
  findIssues,
  createIssue,
  deleteIssue,
  updateIssue,
  addUpvoteToIssue,
  addDownvoteToIssue,
  removeUpvoteFromIssue,
  removeDownvoteFromIssue,
} = require("../database/operations");

const index = new RouteHandler(findIssues, 200).use();
const create = new RouteHandler(createIssue, 201).use();
const show = new RouteHandler(findIssue, 200).use();
const remove = new RouteHandler(deleteIssue, 200).use();
const update = new RouteHandler(updateIssue, 202).use();
const addUpvote = new RouteHandler(addUpvoteToIssue, 202).use();
const addDownvote = new RouteHandler(addDownvoteToIssue, 202).use();
const removeUpvote = new RouteHandler(removeUpvoteFromIssue, 202).use();
const removeDownvote = new RouteHandler(removeDownvoteFromIssue, 202).use();

const router = Router();
router.route("/issues").get(index).post(create);
router.route("/issues/:id").get(show).delete(remove).put(update);
router.route("/issues/:id/upvote").put(addUpvote).delete(removeUpvote);
router.route("/issues/:id/downvote").put(addDownvote).delete(removeDownvote);

module.exports = router;
