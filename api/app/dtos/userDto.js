const generateToken = require("../helpers/token");

// @desc Creates the response data for login
const createResponseUserDataLogin = (user) => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  role: user.role,
  phoneNumber: user.phoneNumber,
  countryCode: user.countryCode,
  country: user.country,
  token: generateToken(user.id),
});

// @desc Creates the response data for signUp
const createResponseUserSignUp = (user) => ({
  id: user.id,
  userName: user.user_name,
  email: user.user_email,
  gender: user.gender,
  token: generateToken(user.id),
});

module.exports = {
  createResponseUserDataLogin,
  createResponseUserSignUp,
};
