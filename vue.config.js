const production = process.env.NODE_ENV === "production";
const deploy = "primary";
const project = require("./pages/deploy").projects[deploy];
const { resolvePages } = require("./pages");

module.exports = {
  publicPath: production ? project.publicPath : "/",
  pages: resolvePages(project)
};
