import type { Article } from "@/types/article";

export function articleTitle(article: Pick<Article, "id" | "title">): string {
  if (typeof article.title === "string" && article.title.length > 0) {
    return article.title;
  }
  return article.id;
}

export function formatPublishedAt(publishedAt: string): string {
  const date = new Date(publishedAt);
  if (Number.isNaN(date.getTime())) {
    return publishedAt;
  }
  return date.toLocaleDateString("ja-JP");
}

export function articlePath(id: string): string {
  return `/blogs/${id}`;
}
