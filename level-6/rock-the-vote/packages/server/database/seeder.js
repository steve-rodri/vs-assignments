const { connection } = require("mongoose");

module.exports = async ({ count, generateDoc, model: Model, plural }) => {
  console.log(`Seeding ${count} ${plural} into ${connection.name}`); // eslint-disable-line
  const genDocs = Array.from({ length: count }).map(async () => generateDoc());
  const docs = await Promise.all(genDocs);
  await Model.insertMany(docs);
};
