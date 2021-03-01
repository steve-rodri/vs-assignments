const { Router } = require("express");
const Issue = require("../models/issue");
const Comment = require("../models/comment");

const router = Router();

router
  .route("/issues")
  .get((_, res, next) => {
    Issue.find()
      .then(issues => issues.sort((a, b) => a.votes.total - b.votes.total))
      .then(issues => res.status(200).send(issues))
      .catch(err => {
        res.status(500);
        return next(err);
      });
  })
  .post((req, res, next) => {
    req.body.creator = req.user._id;
    new Issue(req.body)
      .save()
      .then(saved => res.status(202).send(saved))
      .catch(err => {
        res.status(500);
        return next(err);
      });
  });

router
  .route("/issues/:id")
  .get((req, res, next) => {
    Issue.findOne({ _id: req.params.id })
      .then(issue => res.status(200).send(issue))
      .catch(err => {
        res.status(500);
        return next(err);
      });
  })
  .delete((req, res, next) => {
    Issue.findOneAndDelete({ _id: req.params.id, creator: req.user._id })
      .then(() => res.status(200).send("Successfully deleted issue"))
      .catch(err => {
        res.status(500);
        return next(err);
      });
  })
  .put((req, res, next) => {
    Issue.findOneAndUpdate(
      { _id: req.params.id, creator: req.user._id },
      req.body,
      { new: true }
    )
      .then(updatedIssue => res.status(202).send(updatedIssue))
      .catch(err => {
        res.status(500);
        return next(err);
      });
  });

router.put("/issues/:id/upvote", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.id },
    {
      $addToSet: { upvotedUsers: req.user._id },
      $pull: { downvotedUsers: req.user._id },
    },
    { new: true }
  )
    .then(issue => res.status(202).send(issue))
    .catch(err => {
      res.status(500);
      return next(err);
    });
});

router.put("/issues/:id/downvote", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.id },
    {
      $addToSet: { downvotedUsers: req.user._id },
      $pull: { upvotedUsers: req.user._id },
    },
    { new: true }
  )
    .then(issue => res.status(202).send(issue))
    .catch(err => {
      res.status(500);
      return next(err);
    });
});

router.route("/issues/:id/comments").post((req, res, next) => {
  req.body.creator = req.user._id;
  new Comment(req.body)
    .save()
    .then(comment => {
      Issue.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { comments: comment._id } },
        { new: true }
      ).then(issue => res.status(202).send(issue));
    })
    .catch(err => {
      res.status(500);
      return next(err);
    });
});

router
  .route("/issues/:issueId/comments/:commentId")
  .delete((req, res, next) => {
    Comment.findOneAndDelete({ _id: req.params.commentId })
      .then(() => {
        Issue.findOneAndUpdate(
          { _id: req.params.issueId },
          { $pull: { comments: req.params.commentId } },
          { new: true }
        ).then(issue => res.status(202).send(issue));
      })
      .catch(err => {
        res.status(500);
        return next(err);
      });
  });

module.exports = router;
