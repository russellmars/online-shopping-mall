const { wash, mall } = require("../deploy").deploy;
module.exports = {
  orders: {
    path: "/orders"
  },
  "orders-detail-product": {
    path: "/orders/product/detail",
    deploy_exclude: [wash]
  },
  "orders-detail-wash": {
    path: "/orders/wash/detail",
    deploy_exclude: [mall]
  }
};
