import AppMenuApis from "./app-menus-api/app-menu-api";
import LoginApis from "./login/LoginApi";

const NCAApis = { ...LoginApis, ...AppMenuApis };

export default NCAApis;
