const { wash } = require("../deploy").deploy;
module.exports = {
  mall: {
    path: "/mall",
    deploy_exclude: [wash]
  },
  "mall-search": {
    path: "/mall/search",
    deploy_exclude: [wash]
  },
  "mall-category": {
    path: "/mall/category",
    deploy_exclude: [wash]
  },
  "mall-product": {
    path: "/mall/product",
    deploy_exclude: [wash]
  }
};
