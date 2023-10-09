import ProductInfo from "src/components/product/product";
import Products from "src/api/services";

export async function generateStaticParams() {
  const products = await Products.getProducts();
  return products.map((product) => ({ id: String(product.id) }));
}

export async function Product() {
  return (
    <>
      <ProductInfo />
    </>
  );
}

export default Product;
