import { useQueries } from "@tanstack/react-query";

import { QUERY_ARTICLES_KEY } from "@/constants";
import { getArticles } from "@/repositories";

interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: true;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: true;
  };
}

interface FeedListProps {
  articlesInfo: {
    articles?: IArticle[];
    articlesCount?: number;
  };
}

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
