import Products from "src/api/services";
import ProductsPage from "src/components/screens/productsPage/productsPage";

export const revalidate = 3600;

export const getProducts = async () => {
  try {
    const data = await Products.getProducts();
    if (!data) {
      throw new Error("Server error. Try again later");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};
export default async function ProductsGrid() {
  return (
    <div>
      <ProductsPage />
    </div>
  );
}
