const faker = require("faker");
const seeder = require("../seeder");
const { User, Comment } = require("../../models");

const genComment = async () => {
  const users = await User.aggregate().sample(1).exec();
  const creator = users[0];
  return {
    body: faker.lorem.sentences(),
    creator: creator._id,
  };
};

module.exports = async count =>
  seeder({
    count: count || 20,
    model: Comment,
    plural: "Comments",
    generateDoc: genComment,
  });
