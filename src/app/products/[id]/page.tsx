import { FC } from "react"

import { getProducts } from "../page"
import { IProductPage } from "./types"

export async function generateStaticParams() {
 const products= await getProducts()
 return products?.map((product)=>({id: String(product.id)}))
}

const Product: FC<IProductPage> = ({params}) => {
   return (
   <div>Product{params.id}</div>
 )
}

export default Product