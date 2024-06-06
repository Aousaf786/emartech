const express = require("express");
const router = express.Router();

const {
  userSignUp,
  loginUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth.controller");

const {
  userLoginValidate,
  userForgotPasswordValidate,
} = require("../validators/authValidator");
const { protectRoute } = require("../middleware/authMiddleware");

router.post("/signup", userSignUp);

router.post("/signin", userLoginValidate, loginUser);

router.post("/forgotPassword", userForgotPasswordValidate, forgotPassword);
router.get("/resetPassword", protectRoute, resetPassword);
// router.post("/resetPassword", controller.updatePassword);

module.exports = router;
