"use client";

import { FullCard, ListLabels, TitleCard } from "@/components";
import { Article } from "@/interfaces";
import { useArticlesQuery } from "@/queries";
import { Divider } from "@/ui";

export const Feed = () => {
  const [articlesInfo] = useArticlesQuery();

  const { data, isLoading } = articlesInfo;

  return (
    <div>
      <div className="m-4">
        <TitleCard author="author" label="label" title="title" />
      </div>
      <div className="m-4">
        <Divider title="Categories" />
      </div>
      <div className="m-4">
        <ListLabels />
      </div>
      <div className="m-4">
        <Divider title="Title" full />
      </div>
      <div className="m-4">
        {isLoading && <p>Loading...</p>}

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
      </div>
    </div>
  );
};
