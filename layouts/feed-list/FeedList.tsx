import { FullCard } from "@/components";
import { Article } from "@/interfaces";
import { useArticlesQuery } from "@/queries";

export const FeedList = () => {
  const [articlesInfos] = useArticlesQuery();

  const { data, isLoading } = articlesInfos;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {data?.articles?.map((article: Article) => (
        <div className="my-4" key={article.slug}>
          <FullCard
            author={article.author.username}
            date={article.createdAt}
            description={article.description}
            label={article.tagList[0]}
            title={article.title}
          />
        </div>
      ))}
    </>
  );
};
