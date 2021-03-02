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
    autopopulate: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

commentSchema.plugin(require("mongoose-autopopulate"));

module.exports = model("Comment", commentSchema);
