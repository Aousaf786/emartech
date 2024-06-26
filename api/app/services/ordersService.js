const asyncHandler = require("express-async-handler");
const { orders: orderModel } = require("../models");
const {
  createOrderErrorMessage,
  getAllOrdersErrorMessage,
} = require("../helpers/responseMessages/error");
const {
  createOrderSuccessMessage,
  getAllOrdersSuccesMessage,
} = require("../helpers/responseMessages/success");
const {
  createOrderResponseData,
  getAllOrdersResponseData,
} = require("../dtos/orderDto");

const createOrderService = asyncHandler(async (req, res) => {
  let createOrderServiceResponse = {};
  const { referance, date, amount, payment, status, orderTracking } = req.body;
  try {
    const order = await orderModel.create({
      referance,
      date,
      amount,
      payment,
      status,
      orderTracking,
    });

    return (createOrderServiceResponse = {
      success: true,
      message: createOrderSuccessMessage.Created,
      status: 200,
      data: createOrderResponseData(order),
    });
  } catch (error) {
    return (createOrderServiceResponse = {
      success: false,
      message: createOrderErrorMessage.NotCreated,
      status: 500,
    });
  }
});

const getAllOrdersService = asyncHandler(async (req, res) => {
  let getAllOrdersServiceResponse = {};
  try {
    const { status } = req?.query;
    queryConditions = {};
    if (status && status !== "All") {
      queryConditions.status = status;
    }
    const orders = await orderModel.findAll({
      where: queryConditions,
      raw: true,
    });

    return (getAllOrdersServiceResponse = {
      success: true,
      message: getAllOrdersSuccesMessage.AllOrders,
      status: 200,
      data: getAllOrdersResponseData(orders),
    });
  } catch (error) {
    return (getAllOrdersServiceResponse = {
      success: false,
      message: getAllOrdersErrorMessage.NotFound,
      status: 404,
    });
  }
});

module.exports = {
  createOrderService,
  getAllOrdersService,
};
