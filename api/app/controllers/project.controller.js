const db = require("../models");
const Projects = db.projects;
const User = db.user;
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    console.log({ file });
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // 10MB max file size
}).array("projectFiles", 10); // Maximum 10 files allowed

// Create a new project
exports.createProject = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      const projectData = req.body;
      projectData.userId = 1;
      console.log(req.files);
      const filePaths = req.files.map((file) => file.path);
      projectData.projectFiles = filePaths;
      const project = await Projects.create(projectData);
      res.status(201).json(project);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    // Fetch all projects including the associated user data
    const projects = await Projects.findAll({ include: User });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get project by ID
exports.getProjectById = async (req, res) => {
  try {
    const projectId = req.params.id;
    // Find the project by ID including the associated user data
    const project = await Projects.findByPk(projectId, { include: User });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update project by ID
exports.updateProjectById = async (req, res) => {
  try {
    const projectId = req.params.id;
    const projectData = req.body;
    // Update the project in the database
    const [updatedRowsCount, updatedProject] = await Projects.update(
      projectData,
      {
        where: { id: projectId },
        returning: true, // Return the updated project object
      }
    );
    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(updatedProject[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete project by ID
exports.deleteProjectById = async (req, res) => {
  try {
    const projectId = req.params.id;
    // Delete the project from the database
    const deletedRowCount = await Projects.destroy({
      where: { id: projectId },
    });
    if (deletedRowCount === 0) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
