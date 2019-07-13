const fs = require("fs");
const combineURLs = require("./combineURLs");

function resolvePageHTML(pagePath) {
  const temp = combineURLs(pagePath, "index.html");
  if (fs.existsSync(temp)) return temp;
  return "public/index.html";
}

module.exports = resolvePageHTML;
