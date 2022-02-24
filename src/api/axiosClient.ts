import axios from "axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL = "https://ceo-clothing.herokuapp.com";

/**
 *
 * TODO: login -> token + refresh token (not expired)
 * token -> call api using token in header
 * token expired -> refresh token -> call api using new token
 * call api refresh token -> create new token A' -> (A' + refresh token A)
 */
const getRefreshToken = (): { access: string } => {
  const authTokens = localStorage.getItem("authTokens");
  const authTokenJSON = authTokens ? JSON.parse(authTokens) : null;
  return authTokenJSON?.access;
};

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${getRefreshToken()}`,
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
