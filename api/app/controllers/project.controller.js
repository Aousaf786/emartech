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
      projectData.userId = req.user.id;
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
    const {
      page = 1,
      limit = 10,
      salary,
      date,
      employmentType,
      jobTitle,
      location,
    } = req.query;

    // Validate page and limit
    const parsedPage = parseInt(page);
    const parsedLimit = parseInt(limit);
    if (
      isNaN(parsedPage) ||
      isNaN(parsedLimit) ||
      parsedPage <= 0 ||
      parsedLimit <= 0
    ) {
      return res
        .status(400)
        .json({ error: "Page and limit must be positive integers" });
    }

    const offset = (parsedPage - 1) * parsedLimit;

    const whereConditions = {};

    // Salary Filter
    if (salary) {
      const parsedSalary = parseInt(salary);
      if (!isNaN(parsedSalary)) {
        whereConditions.projectValue = { [Op.gte]: parsedSalary };
      }
    }

    // Date of Posting Filter
    if (date) {
      const dateCondition = getDateCondition(date);
      if (dateCondition) {
        whereConditions.createdAt = dateCondition;
      }
    }

    // Employment Type Filter
    if (
      employmentType &&
      ["FULL-TIME", "PART-TIME"].includes(employmentType.toUpperCase())
    ) {
      whereConditions.employmentType = employmentType.toUpperCase();
    }

    // Job Title Search
    if (jobTitle) {
      whereConditions.jobTitle = { [Op.iLike]: `%${jobTitle}%` }; // Case-insensitive search
    }

    // Location Search
    if (location) {
      whereConditions.location = { [Op.iLike]: `%${location}%` }; // Case-insensitive search
    }

    const totalProjects = await Projects.count({ where: whereConditions });
    const projects = await Projects.findAll({
      include: {
        model: User,
        attributes: ["id", "firstName", "lastName", "role", "country", "email"], // Adjust attributes as needed
      },
      where: whereConditions,
      limit: parsedLimit,
      offset: offset,
    });

    res.json({ projects, totalRecords: totalProjects });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
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

const getDateCondition = (date) => {
  const now = new Date();
  switch (date) {
    case "last24hours":
      return { [Op.gte]: new Date(now - 24 * 60 * 60 * 1000) };
    case "last3days":
      return { [Op.gte]: new Date(now - 3 * 24 * 60 * 60 * 1000) };
    case "last7days":
      return { [Op.gte]: new Date(now - 7 * 24 * 60 * 60 * 1000) };
    default:
      return null;
  }
};
