const pages = require("./pages");
const resolvePageEntry = require("./resolves/resolvePageEntry");
const resolvePagePath = require("./resolves/resolvePagePath");
const resolvePageHTML = require("./resolves/resolvePageHTML");
const resolvePageFilename = require("./resolves/resolvePageFilename");
const resolvePageTitle = require("./resolves/resolvePageTitle");

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
  // npm run build --pages 针对cdn部署时，将pages单独放置到一个dist/pages文件夹
  const env = process.env;
  const pageFold = env.NODE_ENV === "production" && env.npm_config_pages;
  return pages.reduce(function(total, page) {
    if (shouldPageBuild(page, project)) {
      const pagePath = resolvePagePath(page);
      total[page.name] = {
        entry: resolvePageEntry(pagePath),
        template: resolvePageHTML(pagePath),
        filename: resolvePageFilename(page.path, pageFold),
        title: resolvePageTitle(page.title, project),
        chunks: ["chunk-vendors", "chunk-common", page.name]
      };
    }
    return total;
  }, {});
}

module.exports = { resolvePages };
