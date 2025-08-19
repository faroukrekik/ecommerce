const mongoose = require("mongoose");
const User = require("./User");
const Product = require("./Product");
const schema = mongoose.Schema;

const CartSchema = new schema({
  userId: {
    type: String,
    ref: User,
  },
  items: [
    {
      productId: {
        type: String,
        ref: Product,
      },
      name: String,
      image: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity can not be less then 1."],
        default: 1,
      },
      price: Number,
    },
  ],
  bill: {
    type: Number,
    required: true,
    default: 0,
  },
});
module.exports = mongoose.model("Cart", CartSchema);
