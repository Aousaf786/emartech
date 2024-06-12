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

const createProductErrorMessage = {
  NotCreated: "Product is not created due to some issue",
};

const authMiddleWareErrorMessages = {
  InValidToken: "Invalid token",
  TokenNotFound: "Token not found",
  RoleNotFound: "This Role not found",
  UnAuthorizedAdmin: "You have no Role of Admin",
};

const getAllProductsErrorMesage = {
  NotFound: "Products not found",
};

const getProductByIdErrorMesage = {
  NotFound: "Product not found",
};

const updateProductByIdErrorMesage = {
  NotFound: "Product not found",
  serverError: "Internal Server Error",
};

const deleteProductByIdErrorMesage = {
  NotFound: "Product not found",
  serverError: "Internal Server Error",
};

module.exports = {
  userErrorMessages,
  authMiddleWareErrorMessages,
  getAllProductsErrorMesage,
  createProductErrorMessage,
  getProductByIdErrorMesage,
  updateProductByIdErrorMesage,
  deleteProductByIdErrorMesage,
};
