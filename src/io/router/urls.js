
const URL_ERR_404 = "404";
const URL_HOME = "";
const URL_USERS = "users";
const URL_PROJECTS = "projects";
function getRouterUrl(key, prefix="/", param={}) {
  if(key === "") {
    return ("");
  }
  let routers = {
    [URL_ERR_404]: prefix + "error-404",
    [URL_HOME]: prefix + "",
    [URL_USERS]: prefix + "users",
    [URL_PROJECTS]: prefix + "projects",
    // "coins-by-algo-key": prefix + "algo" + (("algoKey" in param) ? `/${param["algoKey"]}` : "/:algoKey"),
  };
  return(routers[key]);
}

export {getRouterUrl, URL_ERR_404, URL_HOME, URL_USERS, URL_PROJECTS}