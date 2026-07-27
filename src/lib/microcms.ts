import { createClient } from "microcms-js-sdk";

import type { Article, MicroCMSListResponse as ArticleListResponse } from "@/types/article";
import type { Category, MicroCMSListResponse } from "@/types/category";

function createMicroCMSClient() {
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!serviceDomain || !apiKey) {
    throw new Error(
      "MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を .env.local に設定してください。",
    );
  }

  return createClient({
    serviceDomain,
    apiKey,
  });
}

/** https://my-test-site.microcms.io/api/v1/categories */
export async function getCategories(): Promise<MicroCMSListResponse<Category>> {
  const client = createMicroCMSClient();

  return client.get<MicroCMSListResponse<Category>>({
    endpoint: "categories",
  });
}

/** 記事 API（管理画面の API 名が違う場合は endpoint を変更） */
export async function getArticles(
  limit = 3,
): Promise<ArticleListResponse<Article>> {
  const client = createMicroCMSClient();

  return client.get<ArticleListResponse<Article>>({
    endpoint: "blogs",
    queries: {
      limit,
      orders: "-publishedAt",
    },
  });
}
