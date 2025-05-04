import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://chat-rizz.onrender.com",
  withCredentials: true,
});