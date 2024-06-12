const crypto = require("crypto");
const db = require("../models");
const EmailService = require("../helpers/email");
const passport = require("passport");
const { getEncryptedPassword } = require("./common/TenantController");
const User = db.user;
const PasswordResetToken = db.resetPasswordToken;
const {
  getPhoneNumberDetails,
  useErrorResponse,
  useSuccessResponse,
} = require("../helpers/utils");
const { Op } = require("sequelize");

const consts = require("../consts");
const {
  userSignUpService,
  loginUserService,
  forgotPasswordService,
  resetPasswordService,
  updatePasswordService,
} = require("../services/authService");
const asyncHandler = require("express-async-handler");

// Request: POST
// Route: POST /api/v1/auth/signup
// Access: Public

const userSignUp = asyncHandler(async (req, res) => {
  const userSignUpServiceResponse = await userSignUpService(req);

  if (!userSignUpServiceResponse.success) {
    return useErrorResponse({
      res,
      message: userSignUpServiceResponse.message,
      status: userSignUpServiceResponse.status,
    });
  }

  return useSuccessResponse({
    res,
    message: userSignUpServiceResponse.message,
    data: userSignUpServiceResponse.data,
    status: userSignUpServiceResponse.status,
  });
});

// Request: POST
// Route: POST /api/v1/auth/login
// Access: Public

const loginUser = asyncHandler(async (req, res) => {
  const userLoginService = await loginUserService(req);

  if (!userLoginService.success) {
    return useErrorResponse({
      res,
      message: userLoginService.message,
      status: userLoginService.status,
    });
  }

  return useSuccessResponse({
    res,
    message: userLoginService.message,
    data: userLoginService.data,
    status: userLoginService.status,
  });
});

// Request: POST
// Route: POST /api/v1/auth/forgotpassword
// Access: Public

const forgotPassword = asyncHandler(async (req, res) => {
  const forgotPasswordServiceResponse = await forgotPasswordService(req);

  if (!forgotPasswordServiceResponse.success) {
    return useErrorResponse({
      res,
      message: forgotPasswordServiceResponse.message,
      status: forgotPasswordServiceResponse.status,
    });
  }

  return useSuccessResponse({
    res,
    message: forgotPasswordServiceResponse.message,
    data: forgotPasswordServiceResponse.data,
    status: forgotPasswordServiceResponse.status,
  });
});

// Request: POST
// Route: POST /api/v1/auth/resetpassword
// Access: Public

const resetPassword = asyncHandler(async (req, res) => {
  const resetPasswordServiceResponse = await resetPasswordService(req);

  if (!resetPasswordServiceResponse.success) {
    return useErrorResponse({
      res,
      message: resetPasswordServiceResponse.message,
      status: resetPasswordServiceResponse.status,
    });
  }

  return useSuccessResponse({
    res,
    message: resetPasswordServiceResponse.message,
    data: resetPasswordServiceResponse.data,
    status: resetPasswordServiceResponse.status,
  });
});

// Request: POST
// Route: POST /api/v1/auth/updatePassword
// Access: Public

const updatePassword = asyncHandler(async (req, res) => {
  const updatePasswordServiceResponse = await updatePasswordService(req);

  if (!updatePasswordServiceResponse.success) {
    return useErrorResponse({
      res,
      message: updatePasswordServiceResponse.message,
      status: updatePasswordServiceResponse.status,
    });
  }

  return useSuccessResponse({
    res,
    message: updatePasswordServiceResponse.message,
    data: updatePasswordServiceResponse.data,
    status: updatePasswordServiceResponse.status,
  });
});

module.exports = {
  userSignUp,
  loginUser,
  forgotPassword,
  resetPassword,
  updatePassword,
};
