const { Router } = require("express");
const { RouteHandler } = require("../utils");
const {
  createComment,
  updateComment,
  deleteComment,
} = require("../database/operations");

const create = new RouteHandler(createComment, 201).use();
const remove = new RouteHandler(deleteComment, 200).use();
const update = new RouteHandler(updateComment, 202).use();

const router = Router();
router.route("/comments").post(create);
router.route("/comments/:id").put(update).delete(remove);
module.exports = router;
