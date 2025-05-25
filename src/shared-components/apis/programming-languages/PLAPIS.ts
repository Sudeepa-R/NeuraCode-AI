import { _delete, get, post } from "../API";

const getAllPLanguages = async (query?:string) => {
  try {
    return await get(`ProgrammingLanguages?${query}`);
  } catch (err) {
    throw err;
  }
};

const savePLData = async (data: any) => {
  try {
    return await post(`ProgrammingLanguages/`, data);
  } catch (err) {
    throw err;
  }
};

const deleteDate = async (plId: number) => {
  try {
    return await _delete(`ProgrammingLanguages/${plId}`);
  } catch (err) {
    throw err;
  }
};

const PLApis = {
  getAllPLanguages,
  savePLData,
  deleteDate,
};

export default PLApis;
