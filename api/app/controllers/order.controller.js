const asyncHandler = require("express-async-handler");
const {
  getAllOrdersService,
  createOrderService,
} = require("../services/ordersService");
const { useErrorResponse, useSuccessResponse } = require("../helpers/utils");

// Create a new order
const createOrder = asyncHandler(async (req, res) => {
  const createOrderServiceResponse = await createOrderService(req);
  if (!createOrderServiceResponse.success) {
    return useErrorResponse({
      res,
      message: createOrderServiceResponse.message,
      status: createOrderServiceResponse.status,
    });
  }
  return useSuccessResponse({
    res,
    message: createOrderServiceResponse.message,
    data: createOrderServiceResponse.data,
    status: createOrderServiceResponse.status,
  });
});

// Get all order
const getAllOrders = asyncHandler(async (req, res) => {
  const getAllOrdersServiceResponse = await getAllOrdersService(req);
  if (!getAllOrdersServiceResponse.success) {
    return useErrorResponse({
      res,
      message: getAllOrdersServiceResponse.message,
      status: getAllOrdersServiceResponse.status,
    });
  }
  return useSuccessResponse({
    res,
    message: getAllOrdersServiceResponse.message,
    data: getAllOrdersServiceResponse.data,
    status: getAllOrdersServiceResponse.status,
  });
});

module.exports = {
  createOrder,
  getAllOrders,
};
