const { Router } = require("express");
const Inventory = require("../models/inventory");
const router = Router();

router
  .route("/")
  .get((_, res, next) => {
    Inventory.find((err, inventory) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(inventory);
    });
  })
  .post((req, res, next) => {
    const newInventory = new Inventory(req.body);
    newInventory.save((err, savedInventory) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(savedInventory);
    });
  });

router
  .route("/:_id")
  .get((req, res, next) => {
    Inventory.findOne({ _id: req.params._id }, (err, inventory) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(inventory);
    });
  })
  .delete((req, res, next) => {
    Inventory.findOneAndDelete({ _id: req.params._id }, err => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send("Successfully deleted inventory");
    });
  })
  .put((req, res, next) => {
    Inventory.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true },
      (err, updatedInventory) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res.status(202).send(updatedInventory);
      }
    );
  });

module.exports = router;
