const { model, Schema } = require("mongoose");

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  manufacturer: String,
  category: String,
  stock: Number,
  inStock: Boolean,
});

module.exports = model("inventory", inventorySchema);
