const commentOperations = require("./comment");
const userOperations = require("./user");

module.exports = {
  ...commentOperations,
  ...userOperations,
};
