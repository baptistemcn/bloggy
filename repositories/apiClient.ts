import axios from "axios";

const host: string = "https://api.realworld.io/api";

export const apiClient = axios.create({
  baseURL: host,
});
