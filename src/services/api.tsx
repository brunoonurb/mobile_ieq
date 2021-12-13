import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    baseURL: "https://api-ieq-nest.herokuapp.com",
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
