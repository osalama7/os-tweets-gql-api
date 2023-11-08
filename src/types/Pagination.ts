export interface PaginatedResource<T> {
  totalCount: number;
  hasMore: boolean;
  cursor?: number;
  pageInfo: {
    start: string;
    end: string;
    count: number;
  }
  nodes: T[];
}

export interface PaginatedResourceQueryOptions {
  skip: number;
  take: number;
}
