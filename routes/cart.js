const express = require("express");

const {
  get_cart_items,
  add_cart_items,
  delete_item,
  updateCart,
} = require("../controllers/Cart.controller");

const router = express.Router();

router.get("/get_cart/:userId", get_cart_items);
router.post("/add_cart/:userId/:productId", add_cart_items);
router.delete("/delete_cart/:userId/:productId", delete_item);
router.put("/editquantity/:userId/:productId", updateCart);

module.exports = router;
