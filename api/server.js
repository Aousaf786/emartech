require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const initializePassport = require("./app/config/passport-config");
// database
const db = require("./app/models");
const { errorHandler } = require("./app/middleware/errorMiddleware.js");

// importing routes
const authRoutes = require("./app/routes/authRoute.js");
const projectRoutes = require("./app/routes/projectRoutes.js");
const proposalRoutes = require("./app/routes/proposalsRoutes.js");
const productRoutes = require("./app/routes/productRoutes.js");

// START FROM HERE
const app = express();

// const corsOptions = {
//   origin: "http://localhost:3000",
// };

// cors options
const corsOptions = {
  origin: "*",
  "Access-Control-Allow-Origin": "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Session middleware
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Express API is Ready" });
});

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

// routes
// require("./app/routes/auth.routes")(app);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/proposal", proposalRoutes);
app.use("/api/v1/product", productRoutes);

app.use(errorHandler);

// set port, listen for requests
const PORT = process.env.PORT || 8084;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
