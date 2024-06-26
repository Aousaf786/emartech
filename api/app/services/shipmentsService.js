const asyncHandler = require("express-async-handler");
const { shipments: shipmentModel } = require("../models");
const {
  createShipmentErrorMessage,
  getAllShipmentsErrorMessage,
} = require("../helpers/responseMessages/error");
const {
  createShipmentSuccessMessage,
  getAllShipmentsSuccesMessage,
} = require("../helpers/responseMessages/success");
const {
  createShipmentResponseData,
  getAllShipmentsResponseData,
} = require("../dtos/shipmentDto");

const createShipmentService = asyncHandler(async (req, res) => {
  let createShipmentServiceResponse = {};
  const {
    name,
    shipmentID,
    referenceID,
    shipmentCreated,
    lastUpdated,
    shipToPerson,
    unitExpected,
    status,
    createdUsing,
    shipFromAddress,
    shipToAddress,
    manualProcessingFee,
    totalInboundPlacementServiceFees,
    emartechPartneredCarrierCost,
    prepAndLabeling,
  } = req.body;
  try {
    const shipment = await shipmentModel.create({
      name,
      shipmentID,
      referenceID,
      shipmentCreated,
      lastUpdated,
      shipToPerson,
      unitExpected,
      status,
      createdUsing,
      shipFromAddress,
      shipToAddress,
      manualProcessingFee,
      totalInboundPlacementServiceFees,
      emartechPartneredCarrierCost,
      prepAndLabeling,
    });

    return (createShipmentServiceResponse = {
      success: true,
      message: createShipmentSuccessMessage.Created,
      status: 200,
      data: createShipmentResponseData(shipment),
    });
  } catch (error) {
    return (createShipmentServiceResponse = {
      success: false,
      message: createShipmentErrorMessage.NotCreated,
      status: 500,
    });
  }
});

const getAllShipmentsService = asyncHandler(async (req, res) => {
  let getAllShipmentsServiceResponse = {};
  try {
    const { status } = req?.query;
    queryConditions = {};
    if (status && status !== "All") {
      queryConditions.status = status;
    }
    const shipments = await shipmentModel.findAll({
      where: queryConditions,
      raw: true,
    });

    return (getAllShipmentsServiceResponse = {
      success: true,
      message: getAllShipmentsSuccesMessage.AllShipments,
      status: 200,
      data: getAllShipmentsResponseData(shipments),
    });
  } catch (error) {
    return (getAllShipmentsServiceResponse = {
      success: false,
      message: getAllShipmentsErrorMessage.NotFound,
      status: 404,
    });
  }
});

module.exports = {
  createShipmentService,
  getAllShipmentsService,
};
