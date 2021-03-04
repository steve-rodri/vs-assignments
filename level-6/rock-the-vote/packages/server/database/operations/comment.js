const { Comment } = require("../../models");
const randomNum = require("../../services/randomNum");

const getRandomComments = async (min, max) => {
  const amount = randomNum(min, max);
  const comments = await Comment.aggregate().sample(amount).exec();
  return comments.map(c => c._id);
};

module.exports = {
  getRandomComments,
};
