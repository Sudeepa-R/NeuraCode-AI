import { get } from "../API";

const getAppMenus = async (viewFor: string) => {
  try {
    return await get(`AppMenus/${viewFor}`);
  } catch (err) {
    throw err;
  }
};

const AppMenuApis = { getAppMenus };

export default AppMenuApis;
