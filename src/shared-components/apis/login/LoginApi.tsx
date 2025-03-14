import { post } from "../API";

const loginUser = async (data: any) => {
  try {
    return await post(`authLogin/login`, data);
  } catch (err) {
    throw err;
  }
};

const LoginApis = { loginUser };

export default LoginApis;
