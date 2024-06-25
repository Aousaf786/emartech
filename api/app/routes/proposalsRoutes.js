const express = require("express");
const router = express.Router();

const proposalController = require("../controllers/proposal.controller");

const { protectRoute } = require("../middleware/authMiddleware");

//proposal routes
router.post("/", protectRoute, proposalController.createProposal);
router.get(
  "/proposalByUser",
  protectRoute,
  proposalController.getAllProposalsByUser
);
router.get(
  "/proposalByProject",
  protectRoute,
  proposalController.getAllProposalsByProject
);
router.get("/:id", protectRoute, proposalController.getProposalById);
router.put("/:id", protectRoute, proposalController.updateProposalById);
router.delete("/:id", protectRoute, proposalController.deleteProposalById);

module.exports = router;
