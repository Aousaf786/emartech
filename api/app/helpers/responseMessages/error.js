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

const getAllProductsErrorMessage = {
  NotFound: "Products not found",
};

const getProductByIdErrorMessage = {
  NotFound: "Product not found",
};

const updateProductByIdErrorMessage = {
  NotFound: "Product not found",
  ServerError: "Internal Server Error",
};

const deleteProductByIdErrorMessage = {
  NotFound: "Product not found",
  ServerError: "Internal Server Error",
};

const createOrderErrorMessage = {
  NotCreated: "Order is not created due to some issue",
};

const getAllOrdersErrorMessage = {
  NotFound: "Orders not found",
};

const createShipmentErrorMessage = {
  NotCreated: "Shipment is not created due to some issue",
};

const getAllShipmentsErrorMessage = {
  NotFound: "Shipments not found",
};

module.exports = {
  userErrorMessages,
  authMiddleWareErrorMessages,
  getAllProductsErrorMessage,
  createProductErrorMessage,
  getProductByIdErrorMessage,
  updateProductByIdErrorMessage,
  deleteProductByIdErrorMessage,
  createOrderErrorMessage,
  getAllOrdersErrorMessage,
  createShipmentErrorMessage,
  getAllShipmentsErrorMessage,
};
