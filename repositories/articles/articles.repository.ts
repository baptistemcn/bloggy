import { apiClient } from "../apiClient";

export const getArticles = async () => {
  return await apiClient({
    method: "get",
    url: "/articles",
  });
};

export const getArticle = async (slug: string) => {
  return await apiClient({
    method: "get",
    url: "/articles/" + slug,
  });
};
