module.exports = (req, res, next) => {
  req.intercepted = true;
  console.log(req);
  next();
};
