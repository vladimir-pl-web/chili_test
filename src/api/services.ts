import { IProduct } from "src/types/products";
import { instance } from "./api";
import { Endpoints } from "./endpoints";

class ProductServices {
  async getProducts() {
    const data = await instance<IProduct[], any>({
      url: `${Endpoints.Products}`,
      method: "GET",
    });
    return data.data.products;
  }
}

const Products = new ProductServices();
export default Products;
