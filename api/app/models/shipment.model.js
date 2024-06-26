const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Shipment = sequelize.define("shipments", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Shipment name cannot be empty",
        },
      },
    },
    shipmentID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Shipment ID cannot be empty",
        },
      },
    },
    referenceID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Reference ID cannot be empty",
        },
      },
    },
    shipmentCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    lastUpdated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    shipToPerson: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "This field cannot be empty",
        },
      },
    },
    unitExpected: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Pending",
      validate: {
        isIn: {
          args: [["Pending", "Delivered", "Closed"]],
          msg: "Invalid status",
        },
      },
    },
    createdUsing: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "This field cannot be empty",
        },
      },
    },
    shipFromAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "This field cannot be empty",
        },
      },
    },
    shipToAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "This field cannot be empty",
        },
      },
    },
    manualProcessingFee: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    totalInboundPlacementServiceFees: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    emartechPartneredCarrierCost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    prepAndLabeling: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Shipment;
};
