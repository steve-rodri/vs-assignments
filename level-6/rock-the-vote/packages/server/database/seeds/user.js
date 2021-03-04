const faker = require("faker");
const bcrypt = require("bcrypt");
const seeder = require("../seeder");
const { User } = require("../../models");

const genUser = async () => ({
  username: faker.internet.userName(),
  password: await bcrypt.hash(faker.internet.password(), 10),
});

module.exports = async count =>
  seeder({
    count: count || 5,
    generateDoc: genUser,
    model: User,
    plural: "Users",
  });
