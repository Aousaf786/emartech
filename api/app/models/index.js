const config = require("../config/db.config.js");
const ENV = "development";
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config[ENV].database,
  config[ENV].username,
  config[ENV].password,
  {
    host: config[ENV].host,
    dialect: config[ENV].dialect,
    operatorsAliases: false,

    pool: {
      max: config[ENV].pool.max,
      min: config[ENV].pool.min,
      acquire: config[ENV].pool.acquire,
      idle: config[ENV].pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize);
db.projects = require("../models/project.model.js")(sequelize, db.user);
db.proposals = require("../models/proposal.model.js")(
  sequelize,
  db.user,
  db.projects
);
db.products = require("../models/product.model.js")(sequelize);
db.orders = require("../models/order.model.js")(sequelize);
db.shipments = require("../models/shipment.model.js")(sequelize);
db.resetPasswordToken = require("../models/passwordResetToken.model.js")(
  sequelize
);
db.ROLES = ["user", "admin"];

module.exports = db;
