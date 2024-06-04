const userErrorMessages = {
  Login: "Invalid email or password",
  Register: "User Signed Up Successfully",
  AlreadyExists: "User already exists",
  InvalidUserData: "Invalid User data",
  InvalidAccessToken: "Invalid access token provided",
  PasswordMisMatched: "Password is not matched",
  IncorrectUserData: "Incorrect User Email or password",
  NotFound: "User not found",
  IncorrectPassword: "Incorrect password",
  SomethingWrong: "Something went wrong!",
  EmailAlreadyExists: "User already exists with this email",
};

const authMiddleWareErrorMessages = {
  InValidToken: "Invalid token",
  TokenNotFound: "Token not found",
  RoleNotFound: "This Role not found",
  UnAuthorizedAdmin: "You have no Role of Admin",
};

module.exports = {
  userErrorMessages,
  authMiddleWareErrorMessages,
};
