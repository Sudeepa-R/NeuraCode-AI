import AppMenuApis from "./app-menus-api/app-menu-api";
import LoginApis from "./login/LoginApi";
import PLApis from "./programming-languages/PLAPIS";

const NCAApis = { ...LoginApis, ...AppMenuApis, ...PLApis };

export default NCAApis;
