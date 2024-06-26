const createOrderResponseData = (order) => {
  const { referance, date, amount, payment, status, orderTracking } = order;
  return { referance, date, amount, payment, status, orderTracking };
};

const getAllOrdersResponseData = (orders) => {
  return orders.map((order) => createOrderResponseData(order));
};

module.exports = {
  createOrderResponseData,
  getAllOrdersResponseData,
};
