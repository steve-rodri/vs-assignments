const errorCatcher = (err, _, res) => {
  console.log(err); // eslint-disable-line
  res.status(500);
  if (err.status) res.status(err.status);
  res.send({ error: err.message });
};

module.exports = app => app.use(errorCatcher);
