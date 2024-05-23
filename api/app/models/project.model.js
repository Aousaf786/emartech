const { DataTypes } = require("sequelize");

module.exports = (sequelize, User) => {
  const Projects = sequelize.define("projects", {
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    projectFiles: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Assuming it's an array of file paths
      allowNull: true,
    },
    projectValue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    charge: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    proposalCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    projectType: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "BY PROJECT",
      validate: {
        isIn: {
          args: [["BY PROJECT", "MILESTONES"]], // Allowed roles
          msg: "Invalid type", // Custom error message
        },
      },
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        validateskillsCount(value) {
          if (!value) return;
          const count = value.split(",").length;
          if (count > 15) {
            throw new Error(
              "Proposal count should have maximum 15 comma-separated values"
            );
          }
        },
      },
    },
  });
  Projects.belongsTo(User);
  return Projects;
};
