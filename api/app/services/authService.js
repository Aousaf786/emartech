const asyncHandler = require("express-async-handler");
const { getPhoneNumberDetails, useErrorResponse } = require("../helpers/utils");
const { user: UserModel } = require("../models");
const { userErrorMessages } = require("../helpers/responseMessages/error");
const { userSuccessMessages } = require("../helpers/responseMessages/success");
const {
  createResponseUserDataLogin,
  createResponseUserSignUp,
} = require("../dtos/userDto");
const { Op } = require("sequelize");

/* 
  =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  Purpose: Used in authController for signUp the User
  =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/

const userSignUpService = asyncHandler(async (req, res) => {
  let userServiceResponse = {};
  const { email, phoneNumber, role, password, confirmPassword } = req.body;

  // Check if the user already exists by email
  const existingUserByEmail = await UserModel.findOne({
    where: {
      [Op.or]: [{ email }, { phoneNumber }],
    },
  });

  console.log("existingUserByEmail", existingUserByEmail);
  if (existingUserByEmail) {
    return (userServiceResponse = {
      success: false,
      message: userErrorMessages.EmailAlreadyExists,
      status: 409,
    });
  }

  // Check if password and confirmPassword match
  if (password !== confirmPassword) {
    return (userServiceResponse = {
      success: false,
      message: userErrorMessages.PasswordMisMatched,
      status: 400,
    });
  }

  try {
    // Create the user in the database
    const newUser = await UserModel.create({
      ...req.body,
      ...(phoneNumber && getPhoneNumberDetails(phoneNumber)),
      role: role ?? "USER",
    });

    console.log("NEW USER", newUser);

    return (userServiceResponse = {
      success: true,
      message: userSuccessMessages.SignUp,
      status: 200,
      data: createResponseUserDataLogin(newUser),
    });
  } catch (err) {
    console.log("Something went wrong:- ", err);

    return (userServiceResponse = {
      success: false,
      message: userErrorMessages.SomethingWrong,
      status: 500,
    });
  }
});

/* 
=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Purpose: Used in auth Controller for login the User
=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/

const loginUserService = asyncHandler(async (req) => {
  const { email, password } = req.body;
  let serviceResponse = {};

  let isUserExist = await UserModel.findOne({ where: { email: email } });
  console.log("isUserExist", isUserExist);

  // user exists or not
  if (!isUserExist) {
    return (serviceResponse = {
      success: false,
      message: userErrorMessages.NotFound,
      status: 422,
    });
  }

  // password is matched or not
  const isMatched = await isUserExist.validPassword(
    password,
    isUserExist.password
  );

  if (!isMatched || !isUserExist) {
    return (serviceResponse = {
      success: false,
      message: userErrorMessages.IncorrectUserData,
      status: 422,
    });
  }

  return (serviceResponse = {
    success: true,
    message: userSuccessMessages.Login,
    status: 200,
    data: createResponseUserDataLogin(isUserExist),
  });
});

/* 
  =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  Purpose: Used in authController for forgotPassword the user
  =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/

const forgotPasswordService = asyncHandler(async (req) => {
  let forgotPasswordServiceResponse = {};
  const { email } = req.body;

  //   try {
  //     const { forgetPassword } = req.body;
  //     const number =
  //       forgetPassword && forgetPassword.includes("+")
  //         ? getPhoneNumberDetails(req.body.forgetPassword)?.phoneNumber ?? ""
  //         : forgetPassword;
  //     const whereClause = {
  //       [Op.or]: [
  //         { email: forgetPassword },
  //         ...(number && [{ phoneNumber: number }]), // Conditionally include phoneNumber if it's a valid phone number
  //       ],
  //     };

  //     const user = await User.findOne({
  //       where: whereClause,
  //     });

  //     if (user) {
  //       const token = crypto.randomBytes(20).toString("hex");

  //       // Calculate expiry timestamp (e.g., 1 hour from now)
  //       const expiresAt = new Date();
  //       expiresAt.setHours(expiresAt.getHours() + 1); // Expires in 1 hour

  //       // Store the token and expiry timestamp in the database
  //       await PasswordResetToken.create({
  //         email: user.email,
  //         token: token,
  //         expires_at: expiresAt,
  //       });

  //       const resetLink = `${process.env.API_BASE_URL}/api/auth/resetPassword?token=${token}`;

  //       // Send the email with the password reset link
  //       await EmailService.sendForgotPasswordEmail({
  //         email: user.email,
  //         resetLink,
  //         firstName: user.firstName,
  //       });

  //       res.status(200).send({
  //         message: "Password reset email sent successfully",
  //         email: user.email,
  //       });
  //     } else {
  //       res
  //         .status(403)
  //         .send({ message: "User not found against this email/phoneNumber" });
  //     }
  //   } catch (err) {
  //     return res.status(500).send(err);
  //   }
});

/* 
  =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  Purpose: Used in authController for resetPassword the user
  =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/

const resetPasswordService = asyncHandler(async (req) => {
  const { token } = req.query;
  try {
    // Find the token in the database
    const resetToken = await PasswordResetToken.findOne({
      where: {
        token,
      },
    });

    // Check if token is found and not expired
    if (!resetToken || resetToken.expires_at < new Date()) {
      return res.status(400).send("Invalid or expired token");
    }

    res.redirect(`${process.env.CLIENT_BASE_URL}/resetPassword?token=${token}`);
  } catch (error) {
    console.error("Error handling password reset token:", error);
    res.status(500).send("Error handling password reset token");
  }
  //   let resetPasswordServiceResponse = {};
  //   const { password, confirmPassword } = req.body;

  //   try {
  //     if (password !== confirmPassword) {
  //       return (resetPasswordServiceResponse = {
  //         success: false,
  //         message: userErrorMessages.PasswordNotMatch,
  //         status: 400,
  //       });
  //     }

  //     const user = await UserModel.findOneAndUpdate(
  //       {
  //         resetPasswordOtpStatus: true,
  //       },
  //       { password, resetPasswordOtpStatus: false }
  //     );

  //     if (!user) {
  //       return (resetPasswordServiceResponse = {
  //         success: false,
  //         message: userErrorMessages.NotFound,
  //         status: 400,
  //       });
  //     }

  //     return (resetPasswordServiceResponse = {
  //       success: true,
  //       message: userSuccessMessages.ResetPassword,
  //       data: { token: generateWebToken(user._id) },
  //       status: 200,
  //     });
  //   } catch (err) {
  //     console.log("err :- ", err);
  //     return (resetPasswordServiceResponse = {
  //       success: false,
  //       message: userErrorMessages.SomethingWrong,
  //       status: 500,
  //     });
  //   }
});

/* 
  =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  Purpose: Used in authController for updatePassword of the user
  =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/

const updatePasswordService = asyncHandler(async (req) => {
  // Route to handle password reset form submission
  //   const { token, password } = req.body;
  //   try {
  //     // Find the token in the database
  //     const resetToken = await PasswordResetToken.findOne({
  //       where: {
  //         token: token,
  //       },
  //     });
  //     // Check if token is found and not expired
  //     if (!resetToken || resetToken.expires_at < new Date()) {
  //       return res.status(400).send("Invalid or expired token");
  //     }
  //     // Update the user's password with the new password
  //     const user = await User.findOne({
  //       where: {
  //         email: resetToken.email,
  //       },
  //     });
  //     const { encryptedPassword, salt } = await getEncryptedPassword(password);
  //     user.password = encryptedPassword;
  //     user.salt = salt;
  //     await user.save();
  //     // Delete the reset token from the database
  //     await resetToken.destroy();
  //     res.status(200).send("Password reset successfully");
  //   } catch (error) {
  //     console.error("Error resetting password:", error);
  //     res.status(500).send("Error resetting password");
  //   }
});

module.exports = {
  userSignUpService,
  loginUserService,
  forgotPasswordService,
  resetPasswordService,
  updatePasswordService,
};
