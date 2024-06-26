const express = require("express");
const router = express.Router();
const { protectRoute } = require("../middleware/authMiddleware");

const {
  createShipment,
  getAllShipments,
} = require("../controllers/shipment.controller");

// Create a new shipment
router.post("/create", protectRoute, createShipment);

// Get all shipments
router.get("/all", protectRoute, getAllShipments);

module.exports = router;
