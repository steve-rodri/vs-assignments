const errorCatch = (err, _, res) => {
  res.status(500);
  if (err.status) res.status(err.status);
  res.send({ message: err.message });
};

module.exports = app => {
  app.use(errorCatch);
};
