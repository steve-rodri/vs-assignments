require("."); // instantiate the database connection
const { connection } = require("mongoose");
const { seedUsers, seedComments, seedIssues } = require("./seeds");

// drop database
connection.dropDatabase();

const seedDatabase = async () => {
  try {
    await seedUsers(5);
    await seedComments(10);
    await seedIssues(10);
  } catch (err) {
    console.log(err); //eslint-disable-line
  }
};

seedDatabase();
