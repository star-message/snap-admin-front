import { axiosInstance } from './index';

export const userHttpClient = {
  async kakaoLogin({ code }: { code: string }) {
    return axiosInstance.post('/users/login', { code });
  },

  async getMyPage() {
    return axiosInstance.get('/users/my');
  },

  async getResult() {
    return axiosInstance.get('/result');
  },
};
