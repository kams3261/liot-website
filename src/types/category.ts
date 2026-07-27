/** microCMS の共通メタデータ */
export type MicroCMSContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Category = MicroCMSContent & {
  /** API スキーマのフィールド ID に合わせて調整してください */
  name?: string;
};

export type MicroCMSListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
