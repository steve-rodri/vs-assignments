const commentOperations = require("./comment");
const userOperations = require("./user");
const issueOperations = require("./issue");

module.exports = {
  ...commentOperations,
  ...userOperations,
  ...issueOperations,
};
