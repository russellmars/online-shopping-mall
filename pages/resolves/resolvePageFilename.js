const combineURLs = require("./combineURLs");
function resolvePageFilename(rootRelativePath, pageFold) {
  const fixedPath = rootRelativePath.replace(/(^\/+)|(\/+$)/g, "");
  const filename = `${fixedPath}.html`;
  if (pageFold) {
    return combineURLs("pages", filename);
  }
  return filename;
}

module.exports = resolvePageFilename;
