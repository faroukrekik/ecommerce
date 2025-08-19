const Order = require("../models/Order");

exports.addOrder = async (req, res) => {
  const userId = req.params.userId;
  const { items, bill, status, date_added } = req.body;

  const existOrder = await Order.findOne({ status });
  if (existOrder) res.status(409).json({ msg: "user aleardy exist" });
  try {
    const newOrder = new Order({
      items,
      bill,
      status,
      date_added,
    });
    await newOrder.save();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
exports.getOrders = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ userId });
    res.status(201).json(orders);
  } catch (err) {
    res.send(500).send(err);
  }
};;
