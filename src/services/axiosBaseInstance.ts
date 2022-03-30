import axios from "../../node_modules/axios";

export const axiosBaseInstance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    "x-api-key": process.env.VUE_APP_API_KEY,
  },
});
