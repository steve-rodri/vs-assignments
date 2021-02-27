const { model, Schema } = require("mongoose");

const commentSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  issue: {
    type: Schema.Types.ObjectId,
    ref: "issue",
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = model("comment", commentSchema);
