import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;
const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (data: any) => {
  try {
    return await api.get(`${baseURL}/${data}`);
  } catch (err) {
    throw err;
  }
};

export const post = async (endPoint: string, data: any) => {
  try {
    return await api.post(`${baseURL}/${endPoint}`, data);
  } catch (err) {
    throw err;
  }
};

export const patch = async (endPoint: string, data: any) => {
  try {
    return await api.patch(`${baseURL}/${endPoint}`, data);
  } catch (err) {
    throw err;
  }
};

export const put = async (endPoint: string, data: any) => {
  try {
    return await api.put(`${baseURL}/${endPoint}`, data);
  } catch (err) {
    throw err;
  }
};

export const _delete = async (endPoint: string, data: any) => {
  try {
    return await api.put(`${baseURL}/${endPoint}`, data);
  } catch (err) {
    throw err;
  }
};

const API = { post, get, put, patch, _delete };
export default API;
