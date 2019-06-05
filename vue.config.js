const pages = require("./pages");
const pkg = require("./package.json");
const fs = require("fs");
module.exports = {
  pages: resolvePages(pages)
};

function resolvePagePath(page) {
  return `src/pages/${page}/`;
}

function resolvePageHTML(page) {
  const temp = resolvePagePath(page) + "index.html";
  if (fs.existsSync(temp)) return temp;
  return "public/index.html";
}

function resolvePageTitle(page) {
  const temp = resolvePagePath(page) + "page.json";
  if (fs.existsSync(temp)) {
    const pageConfig = require(`./${temp}`);
    return pageConfig.title || pkg.title;
  }
  return pkg.title;
}

function resolvePages(pages) {
  return pages.reduce(function(total, current) {
    const pathPath = resolvePagePath(current);
    total[current] = {
      entry: pathPath + "main.js",
      template: resolvePageHTML(current),
      title: resolvePageTitle(current)
    };
    return total;
  }, {});
}
