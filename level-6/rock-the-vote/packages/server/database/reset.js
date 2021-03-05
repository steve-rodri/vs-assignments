require("."); // instantiate the database connection
const { connection } = require("mongoose");
const { seedUsers, seedComments, seedIssues } = require("./seeds");

// drop database
connection.dropDatabase();

const seedDatabase = async () => {
  try {
    await seedUsers(20);
    await seedComments(100);
    await seedIssues(50);
    console.log("Database Seeded Successfully"); //eslint-disable-line
    connection.close();
  } catch (err) {
    console.log(err); //eslint-disable-line
  }
};

seedDatabase();
