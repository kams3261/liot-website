import type { MicroCMSContent, MicroCMSListResponse } from "@/types/category";

export type Article = MicroCMSContent & {
  title?: string;
  content?: string;
};

export type { MicroCMSListResponse };
