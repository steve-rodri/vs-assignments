const { Router } = require("express");
const Bounty = require("../models/bounty");
const router = Router();

router
  .route("/")
  .get((_, res, next) => {
    Bounty.find((err, bounty) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(bounty);
    });
  })
  .post((req, res, next) => {
    const newBounty = new Bounty(req.body);
    newBounty.save((err, savedBounty) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(savedBounty);
    });
  });

router
  .route("/:_id")
  .get((req, res, next) => {
    Bounty.findOne({ _id: req.params._id }, (err, bounty) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(bounty);
    });
  })
  .delete((req, res, next) => {
    Bounty.findOneAndDelete({ _id: req.params._id }, err => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send("Successfully deleted bounty");
    });
  })
  .put((req, res, next) => {
    Bounty.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true },
      (err, updatedBounty) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res.status(202).send(updatedBounty);
      }
    );
  });

module.exports = router;
