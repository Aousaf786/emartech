const express = require("express");
const router = express.Router();

const projectController = require("../controllers/project.controller");

// const { protectRoute } = require("../middleware/authMiddleware");

//project routes
router.post("/projects", projectController.createProject);
router.get("/projects", projectController.getAllProjects);
router.get("/projects/:id", projectController.getProjectById);
router.put("/projects/:id", projectController.updateProjectById);
router.delete("/projects/:id", projectController.deleteProjectById);

module.exports = router;
