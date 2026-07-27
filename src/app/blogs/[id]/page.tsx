import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  articleTitle,
  formatPublishedAt,
} from "@/lib/article-display";
import { getArticle, getArticles } from "@/lib/microcms";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  try {
    const { contents } = await getArticles(100);
    return contents.map((article) => ({ id: article.id }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const article = await getArticle(id);
    return { title: articleTitle(article) };
  } catch {
    return { title: "記事" };
  }
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { id } = await params;

  let article;
  try {
    article = await getArticle(id);
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto flex min-h-full max-w-2xl flex-1 flex-col gap-6 px-6 py-16">
      <Link
        href="/"
        className="text-sm text-zinc-600 underline-offset-2 hover:underline"
      >
        ← トップへ
      </Link>

      <header className="space-y-2 border-b border-zinc-200 pb-6">
        <h1 className="text-3xl font-semibold leading-tight">
          {articleTitle(article)}
        </h1>
        <time className="text-sm text-zinc-500" dateTime={article.publishedAt}>
          {formatPublishedAt(article.publishedAt)}
        </time>
      </header>

      {typeof article.content === "string" && article.content.length > 0 ? (
        <div
          className="space-y-4 leading-relaxed [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_img]:max-w-full [&_p]:leading-7"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      ) : (
        <p className="text-sm text-zinc-600">本文がありません。</p>
      )}
    </main>
  );
}
