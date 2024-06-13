const createProductResponseData = (product) => {
  const {
    name,
    status,
    description,
    quantity,
    handlingTime,
    reStockDate,
    price,
    salePrice,
    saleStartDate,
    offeringConditionType,
    itemWeight,
    itemWeightUnits,
    fulfillmentChannel,
    image,
  } = product;
  return {
    name,
    status,
    description,
    quantity,
    handlingTime,
    reStockDate,
    price,
    salePrice,
    saleStartDate,
    offeringConditionType,
    itemWeight,
    itemWeightUnits,
    fulfillmentChannel,
    image,
  };
};

const getAllProductsResponseData = (products) => {
  return products.map((product) => createProductResponseData(product));
};

const getProductByIdResponseData = (product) => {
  return createProductResponseData(product);
};

const updateProductByIdResponseData = (product) => {
  return createProductResponseData(product);
};

module.exports = {
  createProductResponseData,
  getAllProductsResponseData,
  getProductByIdResponseData,
  updateProductByIdResponseData,
};
