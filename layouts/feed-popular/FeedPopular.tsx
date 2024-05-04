import { TitleCard } from "@/components";
import { useArticleQuery } from "@/queries";

export const FeedPopular = ({ slug }: { slug: string }) => {
  const [articleInfo] = useArticleQuery(slug);

  const { data, isLoading } = articleInfo;

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TitleCard
          author={data?.article?.author.username}
          label={data?.article?.tagList[0]}
          title={data?.article?.title}
        />
      )}
    </>
  );
};
