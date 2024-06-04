const express = require("express");
const router = express.Router();
const { protectRoute } = require("../middleware/authMiddleware");

const projectController = require("../controllers/project.controller");

//project routes
router.post("/", protectRoute, projectController.createProject);
router.get("/", protectRoute, projectController.getAllProjects);
router.get("/:id", protectRoute, projectController.getProjectById);
router.put("/:id", protectRoute, projectController.updateProjectById);
router.delete("/:id", protectRoute, projectController.deleteProjectById);

module.exports = router;
