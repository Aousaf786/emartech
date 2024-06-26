const express = require("express");
const router = express.Router();
const { protectRoute } = require("../middleware/authMiddleware");

const {
  createOrder,
  getAllOrders,
} = require("../controllers/order.controller");

// Create a new order
router.post("/create", protectRoute, createOrder);

// Get all orders
router.get("/all", protectRoute, getAllOrders);

module.exports = router;
