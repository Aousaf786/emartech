const db = require("../models");
const Projects = db.projects;
const User = db.user;
const Proposals = db.proposals;
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
}).array("proposalFiles", 10); // Maximum 10 files allowed

exports.createProposal = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      const proposalData = req.body;
      proposalData.userId = req.user.id;
      const filePaths = req.files.map((file) => file.path);
      console.log(req.files);
      proposalData.proposalFiles = filePaths;
      const proposal = await Proposals.create(proposalData);
      res.status(201).json(proposal);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllProposalsByUser = async (req, res) => {
  try {
    const proposals = await Proposals.findAll({
      include: [{ model: User }, { model: Projects }],
    });
    res.json(proposals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllProposalsByProject = async (req, res) => {
  try {
    const proposals = await Proposals.findAll({
      include: [{ model: User }, { model: Projects }],
    });
    res.json(proposals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProposalById = async (req, res) => {
  try {
    const proposalId = req.params.id;
    const proposal = await Proposals.findByPk(proposalId, {
      include: [{ model: User }, { model: Projects }],
    });
    if (!proposal) {
      return res.status(404).json({ message: "Proposal not found" });
    }
    res.json(proposal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProposalById = async (req, res) => {
  try {
    const proposalId = req.params.id;
    const proposalData = req.body;
    const [updatedRowsCount, updatedProposal] = await Proposals.update(
      proposalData,
      {
        where: { id: proposalId },
        returning: true,
      }
    );
    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: "Proposal not found" });
    }
    res.json(updatedProposal[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProposalById = async (req, res) => {
  try {
    const proposalId = req.params.id;
    const deletedRowCount = await Projects.destroy({
      where: { id: proposalId },
    });
    if (deletedRowCount === 0) {
      return res.status(404).json({ message: "Proposal not found" });
    }
    res.json({ message: "Proposal deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
