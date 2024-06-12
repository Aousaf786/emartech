const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { user: UserModel } = require("../models");
const { useErrorResponse } = require("../helpers/utils");
const {
  authMiddleWareErrorMessages,
} = require("../helpers/responseMessages/error");

const protectRoute = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
      const user = await UserModel.findOne({
        where: { id: decodedToken.id },
      });

      if (!user) throw new Error("user not found");
      req.user = user;
      next();
    } catch (error) {
      return useErrorResponse({
        res,
        message: authMiddleWareErrorMessages.InValidToken,
        status: 498,
      });
    }
  }

  if (!token) {
    return useErrorResponse({
      res,
      message: authMiddleWareErrorMessages.TokenNotFound,
      status: 401,
    });
  }
});

// check you have Admin access or not

const superAdmin = asyncHandler(async (req, res, next) => {
  // find role id of 'Admin'
  const isRoleExists = await UserModel.findOne({
    where: { role: "SuperAdmin" },
  });

  if (!isRoleExists) {
    return useErrorResponse({
      res,
      message: authMiddleWareErrorMessages.RoleNotFound,
      status: 404,
    });
  }

  if (req.user.role_id != isRoleExists?.id) {
    return useErrorResponse({
      res,
      message: authMiddleWareErrorMessages.UnAuthorizedAdmin,
      status: 401,
    });
  } else {
    next();
  }
});

module.exports = {
  protectRoute,
  superAdmin,
};
