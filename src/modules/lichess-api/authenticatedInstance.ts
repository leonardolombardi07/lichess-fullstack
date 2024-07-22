import "server-only";
import axios from "axios";

const LICHESS_API_ACCESS_TOKEN = process.env.LICHESS_API_ACCESS_TOKEN;

const AuthenticatedApiInstance = axios.create({
  baseURL: "https://lichess.org/api",
  headers: {
    "content-type": "application/json",
  },
});

AuthenticatedApiInstance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${LICHESS_API_ACCESS_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AuthenticatedApiInstance;
