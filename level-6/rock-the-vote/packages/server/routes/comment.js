const { Router } = require("express");
const {
  createComment,
  updateComment,
  deleteComment,
} = require("../database/operations");

const create = async (req, res, next) => {
  try {
    const comment = await createComment(req);
    res.status(200).send(comment);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const comment = await deleteComment(req.params.id, req.user);
    res.status(200).send(comment);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const comment = await updateComment(req.params.id, req.user);
    res.status(200).send(comment);
  } catch (err) {
    next(err);
  }
};

const router = Router();
router.route("/comments").post(create);
router.route("/comments/:id").put(update).delete(remove);
module.exports = router;
