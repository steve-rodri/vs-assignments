const HTTPError = require("../../services/HTTPError");
const { Issue } = require("../models");

const findIssue = async id => Issue.findById(id);

const createIssue = async ({ user, body }) => {
  const data = { ...body, creator: user._id };
  return Issue.create(data);
};

const deleteIssue = async (id, user) => {
  const issue = await Issue.findOneAndDelete({ _id: id, creator: user._id });
  if (!issue) throw new HTTPError(403, "user cannot delete this issue");
};

const findIssues = async params => {
  const issues = await Issue.find(params);
  return issues.sort((a, b) => b.votes.total - a.votes.total);
};

const updateIssue = async (id, { user, body }) => {
  const filter = { _id: id, creator: user._id };
  const issue = await Issue.findOneAndUpdate(filter, body);
  if (!issue) throw new HTTPError(403, "user cannot update this issue");
  return issue;
};

const upvoteIssue = async (id, user) => {
  const data = {
    $addToSet: { upvotedUsers: user._id },
    $pull: { downvotedUsers: user._id },
  };
  return Issue.findByIdAndUpdate(id, data);
};

const downvoteIssue = async (id, user) => {
  const data = {
    $addToSet: { downvotedUsers: user._id },
    $pull: { upvotedUsers: user._id },
  };
  return Issue.findByIdAndUpdate(id, data);
};

const addCommentToIssue = async (id, comment) => {
  const data = { $push: { comments: comment._id } };
  return Issue.findByIdAndUpdate(id, data);
};

const removeCommentFromIssue = async (id, commentId) => {
  const data = { $pull: { comments: commentId } };
  return Issue.findByIdAndUpdate(id, data);
};

module.exports = {
  findIssue,
  findIssues,
  createIssue,
  deleteIssue,
  updateIssue,
  upvoteIssue,
  downvoteIssue,
  addCommentToIssue,
  removeCommentFromIssue,
};
