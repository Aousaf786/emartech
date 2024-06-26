const createShipmentResponseData = (shipment) => {
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
  } = shipment;
  return {
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
  };
};

const getAllShipmentsResponseData = (shipments) => {
  return shipments.map((shipment) => createShipmentResponseData(shipment));
};

module.exports = {
  createShipmentResponseData,
  getAllShipmentsResponseData,
};
