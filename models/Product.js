const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productSchema = new schema({
  nameProd: String,
  price: Number,
  category: String,
  image: String,
  description: String,
  rating: String,
  sold: Number,
  quantity: Number,
});

module.exports = mongoose.model("Product", productSchema);
