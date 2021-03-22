const bcrypt = require("bcrypt");
const { model, Schema } = require("mongoose");
const { HTTPError } = require("../../utils");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

userSchema.methods.verify = async function comparePassword(attempt) {
  return bcrypt.compare(attempt, this.password);
};

userSchema.methods.withoutPassword = function removePassword() {
  const { password, ...rest } = this.toObject();
  return rest;
};

// ensure username is lowercase
userSchema.path("username").validate = {
  validator: name => {
    if (name !== name.toLowerCase()) {
      throw new HTTPError(403, "username must be lowercase");
    }
  },
  message: props => props.reason.message,
};

// hash password pre save
userSchema.pre("save", async function hashPassword(next) {
  try {
    if (!this.isModified("password")) next();
    this.password = await bcrypt.hash(this.password, 10);
  } catch (err) {
    next(err);
  }
});

module.exports = model("User", userSchema);
