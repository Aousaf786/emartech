const { DataTypes } = require("sequelize");

module.exports = (sequelize, User, Project) => {
  const Proposals = sequelize.define("proposals", {
    proposalDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    proposalFiles: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Assuming it's an array of file paths
      allowNull: false,
    },
    proposalType: {
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
  });
  Proposals.belongsTo(User);
  Proposals.belongsTo(Project);
  return Proposals;
};
