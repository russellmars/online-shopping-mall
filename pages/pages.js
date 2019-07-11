const { primary, wash, mall } = require("./deploy").deploy;
module.exports = [
  {
    name: "home",
    path: "/index",
    src: "/home"
  },
  {
    name: "wash",
    path: "/wash",
    deploy_excludes: [mall]
  },
  {
    name: "wash-cloth-detail",
    path: "/wash/cloth/detail",
    deploy_excludes: [mall]
  },
  {
    name: "wash-booking",
    path: "/wash/booking",
    deploy_excludes: [mall]
  },
  {
    name: "mall",
    path: "/mall",
    deploy_excludes: [wash]
  },
  {
    name: "mall-search",
    path: "/mall/search",
    deploy_excludes: [wash]
  },
  {
    name: "mall-category",
    path: "/mall/category",
    deploy_excludes: [wash]
  },
  {
    name: "mall-product",
    path: "/mall/product",
    deploy_excludes: [wash]
  },
  {
    name: "profile",
    path: "/profile"
  },
  {
    name: "profile-account",
    path: "/profile/account"
  },
  {
    name: "cart",
    path: "/cart"
  },
  {
    name: "cart-pick-address",
    path: "/cart/pick-address"
  },
  {
    name: "cart-settle",
    path: "/cart/settle"
  },
  {
    name: "address",
    path: "/profile/address"
  },
  {
    name: "address-detail",
    path: "/profile/address-detail"
  },
  {
    name: "payment-pay",
    path: "/payment/pay"
  },
  {
    name: "payment-success",
    path: "/payment/success"
  },
  {
    name: "payment-fail",
    path: "/payment/fail"
  },
  {
    name: "orders",
    path: "/orders"
  },
  {
    name: "orders-detail-product",
    path: "/orders/detail/product",
    deploy_excludes: [wash]
  },
  {
    name: "orders-detail-wash",
    path: "/orders/detail/wash",
    deploy_excludes: [mall]
  },
  {
    name: "orders-detail-booking",
    path: "/orders/detail/booking",
    deploy_excludes: [mall]
  },
  {
    path: "/app/home",
    deploy_includes: [primary]
  }
];
