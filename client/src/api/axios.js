import axios from 'axios';
import queryString from 'query-string';

const baseUrl = import.meta.env.VITE_BASE_URL;

const axiosClient = axios.create({
  baseURL: baseUrl,
  paramsSerializer: (params) => queryString.stringify({ params }),
});

axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
    },
  };
});

export default axiosClient;
