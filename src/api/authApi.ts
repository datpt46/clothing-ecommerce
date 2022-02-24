import { LoginData, RegisterData, ResponseGenerator } from "models";
import axiosClient from "./axiosClient";

const authApi = {
  login: (username: string, password: string): Promise<ResponseGenerator<LoginData>> => {
    const url = "/customer/login";
    return axiosClient.post(url, {
      username,
      password,
    });
  },
  register: (
    username: string,
    password: string,
    email: string,
    phone: string
  ): Promise<ResponseGenerator<RegisterData>> => {
    const url = "/customer/register";
    return axiosClient.post(url, {
      username,
      password,
      email,
      phone,
    });
  },
};

export default authApi;
