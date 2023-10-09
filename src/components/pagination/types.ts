export interface IPagination {
  paginationLength: number;
  page: number;
  onChange: (payload: { page: number }) => void;
}
