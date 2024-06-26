const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Order = sequelize.define("orders", {
    referance: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Referance cannot be empty",
        },
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    payment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["VISA", "PAYPAL", "STRIPE"]],
          msg: "Invalid payment",
        },
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Pending",
      validate: {
        isIn: {
          args: [["Pending", "Unshipped", "Cancelled", "Shipped"]],
          msg: "Invalid status",
        },
      },
    },
    orderTracking: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Order;
};
