const HTTPError = require("../../services/HTTPError");
const randomNum = require("../../services/randomNum");
const { Comment } = require("../models");
const { addCommentToIssue, removeCommentFromIssue } = require("./issue");

const getRandomComments = async (min, max) => {
  const amount = randomNum(min, max);
  const comments = await Comment.aggregate().sample(amount).exec();
  return comments.map(c => c._id);
};

const createComment = async ({ user, body }) => {
  const { issueId, ...rest } = body;
  if (!issueId) throw new HTTPError(403, "No issueId");
  const data = { ...rest, creator: user._id };
  const comment = await Comment.create(data);
  await addCommentToIssue(issueId, comment);
  return comment;
};

const updateComment = async ({ user, body, params: { id } }) => {
  const filter = { _id: id, creator: user._id };
  const comment = await Comment.findOneAndUpdate(filter, body);
  if (!comment) throw new HTTPError(403, "Cannot update unowned comment");
  return comment;
};

const deleteComment = async ({ user, params: { id }, query: { issue } }) => {
  if (!issue) throw new HTTPError(403, "No issueId");
  await Comment.findOneAndDelete({ _id: id, creator: user._id });
  await removeCommentFromIssue(issue, id);
  return "Successfully deleted comment";
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
  getRandomComments,
};
