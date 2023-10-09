import { FC } from "react";
import { IProductPage } from "./types";
import Products from "src/api/services";

export async function generateStaticParams() {
  const products = await Products.getProducts();
  return products.map((product) => ({ id: String(product.id) }));
}

const Product: FC<IProductPage> = ({ params }) => {
  return <div>Product{params.id}</div>;
};

export default Product;
