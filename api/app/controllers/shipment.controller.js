const asyncHandler = require("express-async-handler");
const {
  getAllShipmentsService,
  createShipmentService,
} = require("../services/shipmentsService");
const { useErrorResponse, useSuccessResponse } = require("../helpers/utils");

// Create a new shipment
const createShipment = asyncHandler(async (req, res) => {
  const createShipmentServiceResponse = await createShipmentService(req);
  if (!createShipmentServiceResponse.success) {
    return useErrorResponse({
      res,
      message: createShipmentServiceResponse.message,
      status: createShipmentServiceResponse.status,
    });
  }
  return useSuccessResponse({
    res,
    message: createShipmentServiceResponse.message,
    data: createShipmentServiceResponse.data,
    status: createShipmentServiceResponse.status,
  });
});

// Get all shipments
const getAllShipments = asyncHandler(async (req, res) => {
  const getAllShipmentsServiceResponse = await getAllShipmentsService(req);
  if (!getAllShipmentsServiceResponse.success) {
    return useErrorResponse({
      res,
      message: getAllShipmentsServiceResponse.message,
      status: getAllShipmentsServiceResponse.status,
    });
  }
  return useSuccessResponse({
    res,
    message: getAllShipmentsServiceResponse.message,
    data: getAllShipmentsServiceResponse.data,
    status: getAllShipmentsServiceResponse.status,
  });
});

module.exports = {
  createShipment,
  getAllShipments,
};
