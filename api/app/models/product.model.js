const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Product = sequelize.define("products", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Inactive",
      validate: {
        isIn: {
          args: [["Inactive", "Active"]], // Allowed roles
          msg: "Invalid status", // Custom error message
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        notEmpty: {
          msg: "Quantity cannot be empty",
        },
      },
    },
    handlingTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reStockDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
      validate: {
        notEmpty: {
          msg: "Price cannot be empty",
        },
      },
    },
    salePrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    saleStartDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    offeringConditionType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemWeight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    itemWeightUnits: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    fulfillmentChannel: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Emartech",
      validate: {
        isIn: {
          args: [["Emartech", "Marchant"]], // Allowed values
          msg: "Invalid Value", // Custom error message
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Product;
};
