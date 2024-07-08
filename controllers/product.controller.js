const Product = require("../models/Product");

exports.addproducts = async (req, res) => {
  const {
    nameProd,
    price,
    category,
    image,
    description,
    rating,
    quantity,
    sold,
  } = req.body;
  try {
    const newProduct = new Product({
      nameProd,
      price,
      category,
      image,
      description,
      rating,
      quantity,
      sold,
    });
    await newProduct.save();
    res.send(newProduct);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getAllproducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.send(allProducts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getoneProduct = async (req, res) => {
  try {
    const oneProduct = await Product.findById(req.params.id);
    res.send(oneProduct);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.deleteProducts = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send({ msg: `${deletedProduct.nameProd} was successfyly deleted}` });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.editProducts = async (req, res) => {
  try {
    const editproduct = await Product.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.send(editproduct);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
