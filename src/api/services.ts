import { IProduct } from "src/types/products";
import { instance } from "./api";
import { Endpoints } from "./endpoints";
import { AxiosResponse } from "axios";

class ProductServices {
  async getProducts():Promise<AxiosResponse<{products:IProduct[]}>> {
    const data= await instance({
      url: `${Endpoints.Products}`,
      method: "GET",
    });
    return data.data.products;
  }
}

const Products = new ProductServices();
export default Products;
