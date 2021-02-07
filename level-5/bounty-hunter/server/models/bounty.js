const { model, Schema } = require("mongoose");

const bountySchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  living: Boolean,
  bountyAmount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    validate: [
      value => value === "Jedi" || value === "Sith",
      "The {PATH} can only be Jedi or Sith.",
    ],
  },
  photoUrl: String,
});

module.exports = model("bounty", bountySchema);
