const express = require("express");
const {
  addproducts,
  getAllproducts,
  getoneProduct,
  deleteProducts,
  editProducts,
  getProductsByCategory,
  getAllCategories,
  resetDatabase,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/addProduct", addproducts);
router.get("/getProducts", getAllproducts);
router.get("/getProcduct/:id", getoneProduct);
router.delete("/deleteProd/:id", deleteProducts);
router.put("/updateproduct/:id", editProducts);

// New routes for category functionality
router.get("/category/:category", getProductsByCategory);
router.get("/categories", getAllCategories);

// Route to reset database with new products
router.post("/reset-database", resetDatabase);

module.exports = router;
