const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function hashPassword(next) {
  try {
    if (!this.isModified("password")) next();
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  } catch (err) {
    next(err);
  }
});

userSchema.methods.checkPassword = async function comparePassword(attempt) {
  return bcrypt.compare(attempt, this.password);
};

// method to remove user's password for token/sending the response
userSchema.methods.withoutPassword = function removePassword() {
  const user = this.Object();
  delete user.password;
  return user;
};

module.exports = model("User", userSchema);
