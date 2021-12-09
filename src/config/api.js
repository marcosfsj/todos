import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  headers: {
    Accept: 'application/json',
    ContentYType: 'x-www-form-urlencoded',
  },
});

api.interceptors.request.use(async config => {
  config.headers.Authorization = process.env.REACT_APP_BEARER;
  return config;
});

export default api;
