const { parsePhoneNumberFromString } = require("libphonenumber-js");

const getPhoneNumberDetails = (number) => {
  const details = parsePhoneNumberFromString(number);
  if (details) {
    const countryCode = details?.countryCallingCode.toString();
    const country = details.country;
    const phoneNumber = details.nationalNumber.toString();
    return { countryCode, country, phoneNumber };
  } else return {};
};

const useSuccessResponse = (res, message, data, statusCode) => {
  return res.status(statusCode).json({
    message,
    success: true,
    statusCode,
    data,
  });
};

const useErrorResponse = (res, message, statusCode) => {
  return res.status(statusCode).json({
    message,
    success: false,
    statusCode,
  });
};

module.exports = {
  getPhoneNumberDetails,
  useSuccessResponse,
  useErrorResponse,
};
