import buildURL from "@/utils/url/buildURL";
import combineURLs from "@/utils/url/combineURLs";
import parseSearchString from "@/utils/url/parseSearchString";
import resolvePageFilename from "../../pages/resolves/resolvePageFilename";
import Link from "./components/link";

function parsePath(route) {
  if (!route) {
    return location.href;
  }
  if (typeof route === "string") {
    route = { path: route };
  }
  const path = resolvePageFilename(route.path);
  const fullPath = combineURLs(process.env.BASE_URL, path);
  return buildURL(fullPath, route.query);
}

const router = (function() {
  const go = history.go.bind(history);
  const forward = history.forward.bind(history);
  const back = history.back.bind(history);
  function push(url = "") {
    const path = parsePath(url);
    if (url.target) {
      window.open(path, url.target);
    } else {
      location.href = path;
    }
  }
  function replace(url = "") {
    location.replace(parsePath(url));
  }
  return {
    go,
    forward,
    back,
    push,
    replace,
    parsePath
  };
})();

const route = (function() {
  const query = parseSearchString(location.search);

  return {
    query
  };
})();

export default {
  install(Vue, options) {
    router.options = Object.assign({}, options);
    Vue.prototype.$router = router;
    Vue.prototype.$route = route;
    Vue.component("RouterLink", Link);
  }
};
