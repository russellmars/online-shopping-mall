const { mall } = require("../deploy").deploy;
module.exports = {
  wash: {
    path: "/wash",
    deploy_exclude: [mall]
  },
  "wash-cloth-detail": {
    path: "/wash/cloth/detail",
    deploy_exclude: [mall]
  },
  "wash-booking": {
    path: "/wash/booking",
    deploy_exclude: [mall]
  }
};
