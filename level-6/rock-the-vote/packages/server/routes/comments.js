const { Router } = require("express");
const Comment = require("../models/comment");

const router = Router();

router.route("/comments/:id").put((req, res, next) => {
  Comment.findOneAndUpdate(
    { _id: req.params.id, creator: req.user._id },
    req.body,
    { new: true }
  )
    .then(comment => res.status(202).send(comment))
    .catch(err => {
      res.status(500);
      return next(err);
    });
});

module.exports = router;
