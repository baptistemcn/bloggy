"use client";

import { FullCard, ListLabels, TitleCard } from "@/components";
import { Article } from "@/interfaces";
import { useArticleQuery, useArticlesQuery } from "@/queries";
import { Divider } from "@/ui";
import { FeedList } from "../feed-list";
import { FeedPopular } from "../feed-popular";

export const Feed = () => {
  return (
    <div>
      <div className="m-4">
        <FeedPopular
          slug={
            "Ill-quantify-the-redundant-TCP-bus-that-should-hard-drive-the-ADP-bandwidth!-553"
          }
        />
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
        <FeedList />
      </div>
    </div>
  );
};
