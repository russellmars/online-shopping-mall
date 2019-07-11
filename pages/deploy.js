const primary = {
  name: "primary",
  publicPath: "/FE/store/",
  title: "至尊洗衣"
};
const wash = {
  name: "wash",
  publicPath: "/FE/wash-service/",
  title: "洗衣服务"
};
const mall = {
  name: "mall",
  publicPath: "/FE/mall-service/",
  title: "洗衣商城"
};
const projects = {
  primary,
  wash,
  mall
};

module.exports = {
  projects,
  deploy: {
    primary: primary.name,
    wash: wash.name,
    mall: mall.name
  }
};
