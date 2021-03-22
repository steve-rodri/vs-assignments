const { Issue } = require("../models");
const { HTTPError } = require("../../utils");

const findIssue = async ({ params: { id } }) => {
  const issue = await Issue.findById(id);
  if (!issue) throw new HTTPError(404, "No Issue Found");
  return issue;
};

const createIssue = async ({ user, body }) => {
  const data = { ...body, creator: user._id };
  return Issue.create(data);
};

const deleteIssue = async ({ user, params: { id } }) => {
  const issue = await Issue.findOneAndDelete({ _id: id, creator: user._id });
  if (!issue) throw new HTTPError(403, "User cannot delete this Issue");
};

const findIssues = async () => {
  const issues = await Issue.find();
  return issues.sort((a, b) => b.votes.total - a.votes.total);
};

const updateIssue = async ({ user, body, params: { id } }) => {
  const filter = { _id: id, creator: user._id };
  const issue = await Issue.findOneAndUpdate(filter, body);
  if (!issue) throw new HTTPError(403, "User cannot update this Issue");
  return issue;
};

const addUpvoteToIssue = async ({ user, params: { id } }) => {
  const data = {
    $addToSet: { upvotedUsers: user._id },
    $pull: { downvotedUsers: user._id },
  };
  const issue = await Issue.findByIdAndUpdate(id, data);
  if (!issue) throw new HTTPError(404, "Issue not found");
  return issue;
};

const removeUpvoteFromIssue = async ({ user, params: { id } }) => {
  const data = {
    $pull: { upvotedUsers: user._id },
  };
  const issue = await Issue.findByIdAndUpdate(id, data);
  if (!issue) throw new HTTPError(404, "Issue not found");
  return issue;
};

const addDownvoteToIssue = async ({ user, params: { id } }) => {
  const data = {
    $addToSet: { downvotedUsers: user._id },
    $pull: { upvotedUsers: user._id },
  };
  const issue = await Issue.findByIdAndUpdate(id, data);
  if (!issue) throw new HTTPError(404, "Issue not found");
  return issue;
};

const removeDownvoteFromIssue = async ({ user, params: { id } }) => {
  const data = {
    $pull: { downvotedUsers: user._id },
  };
  const issue = await Issue.findByIdAndUpdate(id, data);
  if (!issue) throw new HTTPError(404, "Issue not found");
  return issue;
};

const addCommentToIssue = async (id, comment) => {
  const data = { $push: { comments: comment._id } };
  const issue = await Issue.findByIdAndUpdate(id, data);
  if (!issue) throw new HTTPError(404, "Issue not found");
  return issue;
};

const removeCommentFromIssue = async (id, commentId) => {
  const data = { $pull: { comments: commentId } };
  const issue = await Issue.findByIdAndUpdate(id, data);
  if (!issue) throw new HTTPError(404, "Issue not found");
  return issue;
};

module.exports = {
  findIssue,
  findIssues,
  createIssue,
  deleteIssue,
  updateIssue,
  addUpvoteToIssue,
  addDownvoteToIssue,
  removeUpvoteFromIssue,
  removeDownvoteFromIssue,
  addCommentToIssue,
  removeCommentFromIssue,
};
