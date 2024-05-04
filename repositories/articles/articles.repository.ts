import { apiClient } from "../apiClient";

export const getArticles = async () => {
  return await apiClient({
    method: "get",
    url: "/articles",
  });
};
