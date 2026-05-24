export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string | Record<string, string[]>;
  timestamp: string;
};

export type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  pages: number;
};

export type PaginatedResponse<T> = {
  items: T[];
  meta: PaginationMeta;
};
