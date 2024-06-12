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

const useSuccessResponse = ({
  res = {},
  message = "",
  data = [],
  status = 200,
}) => {
  return res.status(status).json({
    message,
    success: true,
    status,
    data,
  });
};

const useErrorResponse = ({ res = {}, message = "", status = 404 }) => {
  return res.status(status).json({
    message,
    success: false,
    status,
  });
};

module.exports = {
  getPhoneNumberDetails,
  useSuccessResponse,
  useErrorResponse,
};
