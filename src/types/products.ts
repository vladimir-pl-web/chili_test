export interface IProduct {
  id: number;
  name: string;
  price: number;
  currency: string;
  category: string;
  description: string;
}

export interface IInitialState {
  searchTerm: string;
  page: number;
  total: number;
}

export type IPage = Pick<IInitialState, "page">;
export type ITotal = Pick<IInitialState, "total">;
export type ISearch = Pick<IInitialState, "searchTerm">;
export type IProductListItem = Pick<IProduct, "name" | "price" | "category">;
