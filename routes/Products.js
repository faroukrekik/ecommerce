const express = require("express");
const {
  addproducts,
  getAllproducts,
  getoneProduct,
  deleteProducts,
  editProducts,
} = require("../controllers/product.controller");

const { verifyAuth } = require("../middlewares/verifAuth");

const router = express.Router();

router.post("/addProduct", addproducts);
router.get("/getProducts", getAllproducts);
router.get("/getProcduct/:id", getoneProduct);
router.delete("/deleteProd/:id", deleteProducts);
router.put("/updateproduct/:id", editProducts);

module.exports = router;
