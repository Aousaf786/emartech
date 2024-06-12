const express = require("express");
const router = express.Router();
const { protectRoute } = require("../middleware/authMiddleware");

const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/product.controller");

// Create a new product
router.post("/create", protectRoute, createProduct);

// Get all products
router.get("/all", protectRoute, getAllProducts);

// Get product by ID
router.get("/get/:id", protectRoute, getProductById);

// Update product by ID
router.put("/update/:id", protectRoute, updateProductById);

// Delete product by ID
router.delete("/delete/:id", protectRoute, deleteProductById);

module.exports = router;
