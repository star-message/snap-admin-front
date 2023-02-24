import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const instanceSetting: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

export const axiosInstance: AxiosInstance = axios.create(instanceSetting);

// axiosInstance.interceptors.request.use(requestSuccess, requestError)
// axiosInstance.interceptors.response.use(responseSuccess, responseError)

export const makeRequest = (config: AxiosRequestConfig) => axiosInstance({ ...config });
