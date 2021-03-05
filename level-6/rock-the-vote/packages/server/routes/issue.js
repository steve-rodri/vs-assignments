const { Router } = require("express");
const {
  findIssue,
  findIssues,
  createIssue,
  deleteIssue,
  updateIssue,
  upvoteIssue,
  downvoteIssue,
  addCommentToIssue,
  removeCommentFromIssue,
} = require("../database/operations");

const index = async (_, res, next) => {
  try {
    const issues = await findIssues();
    res.status(200).send(issues);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const issue = await createIssue(req);
    res.status(201).send(issue);
  } catch (err) {
    next(err);
  }
};

const show = async (req, res, next) => {
  try {
    const issue = await findIssue(req.params.id);
    res.status(200).send(issue);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await deleteIssue(req.params.id, req.user);
    res.status(200).send("successfully deleted issue");
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const issue = await updateIssue(req.params.id, req);
    res.status(200).send(issue);
  } catch (err) {
    next(err);
  }
};

const upvote = async (req, res, next) => {
  try {
    const issue = await upvoteIssue(req.params.id, req.user);
    res.status(200).send(issue);
  } catch (err) {
    next(err);
  }
};

const downvote = async (req, res, next) => {
  try {
    const issue = await downvoteIssue(req.params.id, req.user);
    res.status(200).send(issue);
  } catch (err) {
    next(err);
  }
};

const addComment = async (req, res, next) => {
  try {
    const issue = await addCommentToIssue(req.params.id, req);
    res.status(200).send(issue);
  } catch (err) {
    next(err);
  }
};

const removeComment = async (req, res, next) => {
  try {
    const { issueId, commentId } = req.params;
    const issue = await removeCommentFromIssue(issueId, commentId, req.user);
    res.status(200).send(issue);
  } catch (err) {
    next(err);
  }
};

const router = Router();
router.route("/issues").get(index).post(create);
router.route("/issues/:id").get(show).delete(remove).put(update);
router.route("/issues/:id/upvote").put(upvote);
router.route("/issues/:id/downvote").put(downvote);
router.route("/issues/:id/comments").post(addComment);
router.route("/issues/:issueId/comments/:commentId").delete(removeComment);

module.exports = router;
