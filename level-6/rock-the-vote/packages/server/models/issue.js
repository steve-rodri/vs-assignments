const { model, Schema } = require("mongoose");

const issueSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [
    { type: Schema.Types.ObjectId, ref: "Comment", autopopulate: true },
  ],
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  upvotedUsers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotedUsers: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

issueSchema.set("toJSON", { virtuals: true });
issueSchema.virtual("votes").get(function virtualVotes() {
  const up = this.upvotedUsers.length;
  const down = this.downvotedUsers.length;
  const total = up + down;
  return { up, down, total };
});

issueSchema.plugin(require("mongoose-autopopulate"));

module.exports = model("Issue", issueSchema);
