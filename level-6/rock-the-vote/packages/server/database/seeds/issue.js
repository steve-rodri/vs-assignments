const faker = require("faker");
const seeder = require("../seeder");
const { randomNum } = require("../../utils");
const { Issue, User } = require("../models");
const {
  getRandomUser,
  getRandomUsers,
  getRandomComments,
} = require("../operations");

const getVoters = async (min, max) => {
  const users = await getRandomUsers(min, max);
  const spliceRandom = () => {
    const randomIndex = randomNum(0, users.length - 1);
    const user = users[randomIndex];
    users.splice(randomIndex, 1);
    return user;
  };
  const randomLength = randomNum(0, users.length - 1);
  const upvotedUsers = Array.from({ length: randomLength }).map(spliceRandom);
  const downvotedUsers = users;
  return {
    upvotedUsers,
    downvotedUsers,
  };
};

const genIssue = async () => {
  const totalUsers = await User.find().countDocuments();
  const voters = await getVoters(1, totalUsers);
  return {
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraphs(),
    creator: await getRandomUser(),
    comments: await getRandomComments(2, totalUsers * 2),
    ...voters,
  };
};

module.exports = async count =>
  seeder({
    model: Issue,
    plural: "Issues",
    count: count || 15,
    generateDoc: genIssue,
  });
