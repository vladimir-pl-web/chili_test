import { IProduct } from "src/types/products";
import { instance } from "../../api/api";
import { Endpoints } from "../../api/endpoints";

class ProductServices {
  async getProducts() {
    const response = await instance<{ products: IProduct[] }, any>({
      url: `${Endpoints.Products}`,
      method: "GET",
    });
    return response.data;
  }
}

const Products = new ProductServices();
export default Products;
