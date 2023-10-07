import { IProduct } from "src/types/products";
import { instance } from "./api";
import { Endpoints } from "./endpoints";

class ProductServices {
  async getProducts() {
    const products = await instance<IProduct[], unknown>({
      url: `${Endpoints.Products}`,
      method: "GET",
    });
    return products;
  }
}

const Products = new ProductServices();
export default Products;
