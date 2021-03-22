/* eslint-disable global-require */
module.exports = app => {
  app.use(require("./auth"));
  app.use(require("./comment"));
  app.use(require("./issue"));
};
