import { _delete, get, post } from "../API";

const getAppMenus = async (viewFor: string) => {
  try {
    return await get(`AppMenus/${viewFor}`);
  } catch (err) {
    throw err;
  }
};

const saveAppMenus = async (data: any) => {
  try {
    return await post(`AppMenus`, data);
  } catch (err) {
    throw err;
  }
};

const deleteAppMenu = async (id: number) => {
  try {
    return await _delete(`AppMenus/${id}`);
  } catch (err) {
    throw err;
  }
};

const getAppMenusById = async (id: number) => {
  try {
    return await get(`AppMenus/getById/${id}`);
  } catch (err) {
    throw err;
  }
};

const AppMenuApis = {
  getAppMenus,
  saveAppMenus,
  deleteAppMenu,
  getAppMenusById,
};

export default AppMenuApis;
