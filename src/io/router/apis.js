import {SERVER_URL} from "../../config";

// --------- USER ---------
const API_USERS_GET = "users"
const API_USERS_BRIEF = "users_brief"
const API_USERS_DELETE = "users_delete"
const API_USER_CREATE = "user_create"
const API_USER_GET = "user_get"
const API_USER_UPDATE = "user_update"
const API_USER_DELETE = "user_delete"

// --------- PROJECT ---------
const API_PROJECTS_GET = "project"
const API_PROJECT_CREATE = "project_create"
const API_PROJECT_GET = "project_get"
const API_PROJECT_UPDATE = "project_update"
const API_PROJECT_DELETE = "project_delete"
function getRouterApi(key, param={}) {
  let routers = {
    [API_USERS_GET]: SERVER_URL + "/personnel",
    [API_USERS_BRIEF]: SERVER_URL + "/personnel/brief",
    [API_USERS_DELETE]: SERVER_URL + "/personnel",
    [API_USER_CREATE]: SERVER_URL + "/personnel",
    [API_USER_GET]: SERVER_URL + `/personnel/${param["id"]}`,
    [API_USER_UPDATE]: SERVER_URL + `/personnel/${param["id"]}`,
    [API_USER_DELETE]: SERVER_URL + `/personnel/${param["id"]}`,
    [API_PROJECTS_GET]: SERVER_URL + "/project",
    [API_PROJECT_CREATE]: SERVER_URL + "/project",
    [API_PROJECT_GET]: SERVER_URL + `/project/${param["id"]}`,
    [API_PROJECT_UPDATE]: SERVER_URL + `/project/${param["id"]}`,
    [API_PROJECT_DELETE]: SERVER_URL + `/project/${param["id"]}`,
    // "coins-by-algo-key": prefix + "algo" + (("algoKey" in param) ? `/${param["algoKey"]}` : "/:algoKey"),
  };
  return(routers[key]);
}

export {getRouterApi, API_USERS_GET, API_USERS_BRIEF, API_USERS_DELETE, API_USER_CREATE, API_USER_GET, API_USER_UPDATE, API_USER_DELETE,
  API_PROJECTS_GET, API_PROJECT_CREATE, API_PROJECT_GET, API_PROJECT_UPDATE, API_PROJECT_DELETE}