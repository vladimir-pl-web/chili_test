export interface IProduct{
 id: number;
 name: string;
 price: number;
 currency: string;
 category: string;
 description: string
}

export type IProductListItem = Pick<IProduct, "name" | "price" | "category">