const asyncHandler = require("express-async-handler");
const {
  getAllProductsService,
  createProductService,
  getProductByIdService,
  updateProductByIdService,
  deleteProductByIdService,
} = require("../services/productsService");
const { useErrorResponse, useSuccessResponse } = require("../helpers/utils");

// Create a new product
const createProduct = asyncHandler(async (req, res) => {
  const createProductServiceResponse = await createProductService(req);
  if (!createProductServiceResponse.success) {
    return useErrorResponse({
      res,
      message: createProductServiceResponse.message,
      status: createProductServiceResponse.status,
    });
  }
  return useSuccessResponse({
    res,
    message: createProductServiceResponse.message,
    data: createProductServiceResponse.data,
    status: createProductServiceResponse.status,
  });
});

// Get all products
const getAllProducts = asyncHandler(async (req, res) => {
  const getAllProductsServiceResponse = await getAllProductsService(req);
  if (!getAllProductsServiceResponse.success) {
    return useErrorResponse({
      res,
      message: getAllProductsServiceResponse.message,
      status: getAllProductsServiceResponse.status,
    });
  }
  return useSuccessResponse({
    res,
    message: getAllProductsServiceResponse.message,
    data: getAllProductsServiceResponse.data,
    status: getAllProductsServiceResponse.status,
  });
});

// Get product by ID
const getProductById = async (req, res) => {
  const getProductByIdServiceResponse = await getProductByIdService(req);
  if (!getProductByIdServiceResponse.success) {
    return useErrorResponse({
      res,
      message: getProductByIdServiceResponse.message,
      status: getProductByIdServiceResponse.status,
    });
  }
  return useSuccessResponse({
    res,
    message: getProductByIdServiceResponse.message,
    data: getProductByIdServiceResponse.data,
    status: getProductByIdServiceResponse.status,
  });
};

// Update product by ID
const updateProductById = async (req, res) => {
  const updateProductByIdServiceResponse = await updateProductByIdService(req);
  if (!updateProductByIdServiceResponse.success) {
    return useErrorResponse({
      res,
      message: updateProductByIdServiceResponse.message,
      status: updateProductByIdServiceResponse.status,
    });
  }
  return useSuccessResponse({
    res,
    message: updateProductByIdServiceResponse.message,
    data: updateProductByIdServiceResponse.data,
    status: updateProductByIdServiceResponse.status,
  });
};

// Delete product by ID
const deleteProductById = async (req, res) => {
  const deleteProductByIdServiceResponse = await deleteProductByIdService(req);
  if (!deleteProductByIdServiceResponse.success) {
    return useErrorResponse({
      res,
      message: deleteProductByIdServiceResponse.message,
      status: deleteProductByIdServiceResponse.status,
    });
  }
  return useSuccessResponse({
    res,
    message: deleteProductByIdServiceResponse.message,
    status: deleteProductByIdServiceResponse.status,
  });
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
