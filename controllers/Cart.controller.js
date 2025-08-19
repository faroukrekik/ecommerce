const Cart = require("../models/Cart");

const Product = require("../models/Product");

exports.get_cart_items = async (req, res) => {
  const userId = req.params.userId;

  try {
    const cart = await Cart.findOne({ userId });
    if (cart && cart.items.length > 0) {
      res.send(cart);
    } else {
      res.send(null);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("somthing went wrong");
  }
};
exports.add_cart_items = async (req, res) => {
  const userId = req.params.userId;
  const { productId } = req.params;

  let { quantity } = req.body;
  quantity = Number(quantity) || 1;

  try {
    let cart = await Cart.findOne({ userId: userId });
    let item = await Product.findOne({ _id: productId });
    if (!item) {
      res.status(404).send(" item not found");
    }

    const price = item.price;
    const name = item.nameProd;
    const image = item.image;
    if (cart) {
      let itemIndex = cart.items.findIndex((p) => p.productId == productId);
      if (itemIndex > -1) {
        let productItem = cart.items[itemIndex];
        productItem.quantity += quantity;
        cart.items[itemIndex] = productItem;
      } else {
        cart.items.push({ productId, name, quantity, price, image });
      }
      cart.bill += quantity * price;
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      const newCart = await Cart.create({
        userId,
        items: [{ productId, name, quantity, price, image }],
        bill: quantity * price,
      });
      res.status(201).send(newCart);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
exports.delete_item = async (req, res) => {
  const userId = req.params.userId;
  const { productId } = req.params;
  try {
    let cart = await Cart.findOne({ userId: userId });
    let itemIndex = cart.items.findIndex((p) => p.productId == productId);
    if (itemIndex > -1) {
      let productItem = cart.items[itemIndex];
      cart.bill -= productItem.quantity * productItem.price;
      cart.items.splice(itemIndex, 1);
    }
    cart = await cart.save();
    return res.status(201).send(cart);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

exports.updateCart = async (req, res) => {
  const userId = req.params.userId;
  const { productId } = req.params;
  const { quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    let item = await Product.findOne({ _id: productId });
    console.log("item:", item);

    if (!item) {
      return res.status(404).send("Item not found");
    }
    if (!cart) {
      return res.status(400).send("Cart not found");
    } else {
      let itemIndex = cart.items.findIndex((p) => p.productId == productId);

      //check if product exist or not
      if (itemIndex == -1) {
        return res.status(404).send("Item not found in cart");
      } else {
        let productItem = cart.items[itemIndex];
        productItem.quantity = quantity;
        cart.items[itemIndex] = productItem;
        cart.bill = cart.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        cart = await cart.save();
        return res.status(201).send(cart);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong!");
  }
};
