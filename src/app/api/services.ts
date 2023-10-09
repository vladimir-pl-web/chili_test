import { IProduct } from "src/types/products";
import { instance } from "../../api/api";
import { Endpoints } from "../../api/endpoints";
class ProductServices {
  async getProducts() {
    const response = await instance<IProduct[]>({
      url: `${Endpoints.Products}`,
      method: "GET",
    });
    console.log(response, "resres");
    return response.data;
  }
}

const Products = new ProductServices();
export default Products;
