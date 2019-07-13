const pkg = require("../../package.json");
function resolvePageTitle(title, project) {
  return title || project.title || pkg.title;
}

module.exports = resolvePageTitle;
