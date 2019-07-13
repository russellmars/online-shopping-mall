const combineURLs = require("./combineURLs");
function resolvePagePath(page) {
  const pagesRelativePath = page.src || page.path;
  return combineURLs("src/pages/", pagesRelativePath);
}

module.exports = resolvePagePath;
