const { primary } = require("../deploy").deploy;
module.exports = {
  "app-home": {
    path: "/app/home",
    deploy_include: [primary]
  }
};
