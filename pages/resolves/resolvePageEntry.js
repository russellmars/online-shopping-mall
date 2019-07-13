const combineURLs = require("./combineURLs");
function resolvePageEntry(pagePath) {
  return combineURLs(pagePath, "main.js");
}

module.exports = resolvePageEntry;
