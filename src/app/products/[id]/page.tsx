import { FC } from "react";

import { IProductPage } from "./types";
import Products from "src/api/services";
import { IProduct } from "src/types/products";


export async function generateStaticParams() {
  const res = await Products.getProducts();

  return res.map((product:IProduct) => ({ id: String(product.id) }));
}

const Product: FC<IProductPage> = ({ params }) => {
  return <div>Product{params.id}</div>;
};

export default Product;
