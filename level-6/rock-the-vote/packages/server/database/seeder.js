const { connection } = require("mongoose");

module.exports = async ({ count, generateDoc, model: Model, plural }) => {
  console.log(`Seeding ${plural} into ${connection.name}`); // eslint-disable-line
  const docs = await Promise.all(
    Array.from({ length: count }).map(async () => generateDoc())
  );
  const collection = await Model.insertMany(docs);
  console.log(`${plural}: ${collection}`); //eslint-disable-line
};
