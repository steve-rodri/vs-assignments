const { model, Schema } = require("mongoose");

const commentSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

commentSchema.pre("find", function popCreator() {
  this.populate({ path: "creator", select: "-password" });
});

module.exports = model("Comment", commentSchema);
