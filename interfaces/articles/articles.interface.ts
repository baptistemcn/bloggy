import { Author } from "../author";

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: true;
  favoritesCount: number;
  author: Author;
}
