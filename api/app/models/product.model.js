const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Product = sequelize.define("products", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
          msg: "Quantity cannot be empty",
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
      validate: {
        notEmpty: {
          msg: "Fulfillment channel is required.",
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
