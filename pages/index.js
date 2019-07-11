const pages = require("./pages");
const pkg = require("../package.json");
const fs = require("fs");
function resolvePagePath(page) {
  const pagesRelativePath = page.src || page.path;
  return combineURLs("src/pages/", pagesRelativePath);
}

function resolvePageHTML(pagePath) {
  const temp = combineURLs(pagePath, "index.html");
  if (fs.existsSync(temp)) return temp;
  return "public/index.html";
}

function resolvePageEntry(pagePath) {
  return combineURLs(pagePath, "main.js");
}

function resolvePageFilename(rootRelativePath) {
  const fixedPath = rootRelativePath.replace(/(^\/+)|(\/+$)/g, "");
  return `${fixedPath}.html`;
}

function resolvePageTitle(title, project) {
  return title || project.title || pkg.title;
}

function shouldPageBuild(page, project) {
  const includes =
    page.deploy_includes || Object.values(require("./deploy").deploy);
  const excludes = page.deploy_excludes || [];
  const shouldBuildProjects = includes.filter(function(projectName) {
    return !excludes.includes(projectName);
  });
  return shouldBuildProjects.includes(project.name);
}

function resolvePages(project) {
  return pages.reduce(function(total, page) {
    if (shouldPageBuild(page, project)) {
      const pagePath = resolvePagePath(page);
      total[page.name] = {
        entry: resolvePageEntry(pagePath),
        template: resolvePageHTML(pagePath),
        filename: resolvePageFilename(page.path),
        title: resolvePageTitle(page.title, project)
      };
    }
    return total;
  }, {});
}

function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "")
    : baseURL;
}

module.exports = { resolvePages };
