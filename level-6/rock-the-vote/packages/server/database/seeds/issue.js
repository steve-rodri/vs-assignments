const faker = require("faker");
const seeder = require("../seeder");
const { Issue, Comment, User } = require("../../models");

const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomUsers = async (min, max) => {
  const amount = randomNum(min, max);
  const users = await User.aggregate().sample(amount).exec();
  return users.map(user => user._id);
};

const getRandomUser = async () => {
  const users = await getRandomUsers(1, 1);
  const user = users[0];
  return user;
};

const getRandomComments = async (min, max) => {
  const amount = randomNum(min, max);
  const comments = await Comment.aggregate().sample(amount).exec();
  return comments.map(c => c._id);
};

const getVoters = async (min, max) => {
  const users = await getRandomUsers(min, max);
  const spliceRandom = () => {
    const randomIndex = randomNum(0, users.length - 1);
    const slicedUsers = users.slice(randomIndex, 1);
    const user = slicedUsers[0];
    users.splice(randomIndex, 1);
    return user;
  };
  const randomLength = randomNum(0, users.length - 1);
  const upvotedUsers = Array.from({ length: randomLength }, spliceRandom);
  const downvotedUsers = users;
  return {
    upvotedUsers,
    downvotedUsers,
  };
};

const genIssue = async () => {
  const creator = await getRandomUser();
  const comments = await getRandomComments(2, 15);
  const totalUsers = await User.find().countDocuments();
  const voters = await getVoters(1, totalUsers);
  return {
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    creator,
    comments,
    ...voters,
  };
};

module.exports = async count =>
  seeder({
    count: count || 15,
    model: Issue,
    plural: "Issues",
    generateDoc: genIssue,
  });
