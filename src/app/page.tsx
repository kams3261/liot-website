import Link from "next/link";

import {
  articlePath,
  articleTitle,
  formatPublishedAt,
} from "@/lib/article-display";
import { getArticles, getCategories } from "@/lib/microcms";
import type { Article } from "@/types/article";
import type { Category } from "@/types/category";

function categoryLabel(category: Category): string {
  if (typeof category.name === "string" && category.name.length > 0) {
    return category.name;
  }
  return category.id;
}

export default async function Home() {
  let categories: Category[] = [];
  let categoryError: string | null = null;

  try {
    const data = await getCategories();
    categories = data.contents;
  } catch (error) {
    categoryError =
      error instanceof Error ? error.message : "カテゴリの取得に失敗しました";
  }

  let articles: Article[] = [];
  let articleError: string | null = null;

  try {
    const data = await getArticles(3);
    articles = data.contents;
  } catch (error) {
    articleError =
      error instanceof Error ? error.message : "記事の取得に失敗しました";
  }

  return (
    <main className="mx-auto flex min-h-full max-w-2xl flex-1 flex-col gap-8 px-6 py-16">
      <section>
        <h2 className="mb-4 text-xl font-medium">カテゴリ（microCMS）</h2>
        {categoryError ? (
          <p className="text-sm text-red-600">{categoryError}</p>
        ) : categories.length === 0 ? (
          <p className="text-sm text-zinc-600">カテゴリがありません。</p>
        ) : (
          <ul className="list-inside list-disc space-y-1">
            {categories.map((category) => (
              <li key={category.id}>{categoryLabel(category)}</li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-medium">記事（最新3件）</h2>
        {articleError ? (
          <p className="text-sm text-red-600">{articleError}</p>
        ) : articles.length === 0 ? (
          <p className="text-sm text-zinc-600">記事がありません。</p>
        ) : (
          <ul className="space-y-4">
            {articles.map((article) => (
              <li
                key={article.id}
                className="border-b border-zinc-200 pb-4 last:border-b-0"
              >
                <Link
                  href={articlePath(article.id)}
                  className="font-medium text-zinc-900 underline-offset-2 hover:underline"
                >
                  {articleTitle(article)}
                </Link>
                <time
                  className="mt-1 block text-sm text-zinc-500"
                  dateTime={article.publishedAt}
                >
                  {formatPublishedAt(article.publishedAt)}
                </time>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
