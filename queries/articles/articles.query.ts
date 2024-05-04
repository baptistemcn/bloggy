import { useQueries } from "@tanstack/react-query";

import { QUERY_ARTICLES_KEY } from "@/constants";
import { getArticle, getArticles } from "@/repositories";

export const useArticlesQuery = () => {
  return useQueries({
    queries: [
      {
        queryKey: [QUERY_ARTICLES_KEY],
        staleTime: 20000,
        queryFn: async () => {
          return await getArticles().then((res) => res.data);
        },
      },
    ],
  });
};

export const useArticleQuery = (slug: string) => {
  return useQueries({
    queries: [
      {
        queryKey: [QUERY_ARTICLES_KEY, slug],
        staleTime: 20000,
        queryFn: async () => {
          return await getArticle(slug).then((res) => res.data);
        },
      },
    ],
  });
};
