import { FC } from "react";

import { getProducts } from "../page";
import { IProductPage } from "./types";
import { IProduct } from "src/types/products";

export async function generateStaticParams() {
  const products = await getProducts() as IProduct[];
  return products.map((product) => ({ id: String(product.id) }));
}

const Product: FC<IProductPage> = ({ params }) => {
  return <div>Product{params.id}</div>;
};

export default Product;
