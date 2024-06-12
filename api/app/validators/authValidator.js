const { validationResult, check } = require("express-validator");
const { useErrorResponse } = require("../helpers/utils");

// utils

const validateUser = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    if (!errors.isEmpty()) {
      for (let err in errors.errors) {
        return useErrorResponse({
          res,
          message: errors.errors[err].msg,
          status: 422,
        });
      }
    }
  }

  next();
};

const userLoginValidate = [
  // .optional() // field to be optional
  check("email").isEmail().withMessage("Invalid email format"),
  check("password").notEmpty().withMessage("Password is required"),
  validateUser,
];

const userForgotPasswordValidate = [
  check("email").notEmpty().withMessage("Email is required"),
  validateUser,
];

module.exports = {
  userLoginValidate,
  userForgotPasswordValidate,
};
