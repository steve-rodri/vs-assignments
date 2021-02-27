const { model, Schema } = require("mongoose");

const issueSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 30,
  },
  description: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  upvoted: [{ type: Schema.Types.ObjectId, ref: "user" }],
  downvoted: [{ type: Schema.Types.ObjectId, ref: "user" }],
});

issueSchema.virtual("upvotes").get(() => this.upvoted.length);
issueSchema.virtual("downvotes").get(() => this.downvoted.length);
issueSchema.set("toObject", { getters: true });

module.exports = model("issue", issueSchema);
