class RouteHandler {
  constructor(callback, status) {
    this.callback = callback;
    this.status = status;
  }

  use() {
    return async (req, res, next) => {
      try {
        const callbackResp = await this.callback(req);
        res.status(this.status).send(callbackResp);
      } catch (err) {
        res.status(500);
        if (err.status) res.status(err.status);
        res.send({ message: err.message });
        next(err);
      }
    };
  }
}

module.exports = RouteHandler;
