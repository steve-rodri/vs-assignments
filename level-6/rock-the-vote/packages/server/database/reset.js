require("."); // instantiate the database connection
const { connection } = require("mongoose");
const { seedUsers, seedComments, seedIssues } = require("./seeds");

// drop the database
connection.dropDatabase();

const seedDatabase = async () => {
  try {
    await seedUsers(40);
    await seedComments(150);
    await seedIssues(100);
    console.log("Database Seeded Successfully"); //eslint-disable-line
    connection.close();
  } catch (err) {
    console.log(err); //eslint-disable-line
  }
};

seedDatabase();
