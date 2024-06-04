const express = require("express");
const router = express.Router();

const proposalController = require("../controllers/proposal.controller");

const { protectRoute } = require("../middleware/authMiddleware");

//proposal routes
router.post("/proposal", proposalController.createProposal);
router.get("/proposalByUser", proposalController.getAllProposalsByUser);
router.get("/proposalByProject", proposalController.getAllProposalsByProject);
router.get("/proposal/:id", proposalController.getProposalById);
router.put("/proposal/:id", proposalController.updateProposalById);
router.delete("/proposal/:id", proposalController.deleteProposalById);

module.exports = router;
