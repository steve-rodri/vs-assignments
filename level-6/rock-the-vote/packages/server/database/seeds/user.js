const faker = require("faker");
const seeder = require("../seeder");
const { User } = require("../../models");

const genUser = () => ({
  username: faker.internet.userName(),
  password: faker.internet.password(),
});

module.exports = async count =>
  seeder({
    count: count || 5,
    generateDoc: genUser,
    model: User,
    plural: "Users",
  });
