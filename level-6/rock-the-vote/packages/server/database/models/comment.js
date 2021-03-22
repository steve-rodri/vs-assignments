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

commentSchema.pre(/^find/, function popCreator() {
  this.populate({ path: "creator", select: "-password" });
});

commentSchema.pre(/^find/, function sortByDateDSC() {
  this.sort({ date: "desc" });
});

commentSchema.post("save", async function popCreator(doc, next) {
  await doc.populate({ path: "creator", select: "-password" }).execPopulate();
  next();
});

module.exports = model("Comment", commentSchema);
