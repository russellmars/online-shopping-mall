const projects = {
  primary: {
    publicPath: "/FE/store/"
  },
  wash: {
    publicPath: "/FE/wash-service/"
  },
  mall: {
    publicPath: "/FE/mall-service/"
  }
};

module.exports = projects;

exports.deploy = {
  primary: "primary",
  wash: "wash",
  mall: "mall"
};
