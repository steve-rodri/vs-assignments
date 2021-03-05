const { connection } = require("mongoose");

module.exports = async ({ count, generateDoc, model: Model, plural }) => {
  console.log(`Seeding ${count} ${plural} into ${connection.name}`); // eslint-disable-line
  const docs = await Promise.all(
    Array.from({ length: count }).map(async () => generateDoc())
  );
  await Model.insertMany(docs);
};
