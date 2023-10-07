import { notFound } from "next/navigation"
import Products from "../api/services"
import ProductsList from "src/components/productsList/productsList"

export const revalidate = 3600

export const getProducts = async () => {
 try {
  const data = await Products.getProducts()
  if (!data) {
   throw new Error("Server error. Try again later")
  }
  return data.products
 }
 catch (error) {
  console.log(error)
 }
}
export default async function ProductsPage() {
 const result = await getProducts()
 if(!result) return notFound()
  return (
   <div>
    <ProductsList products={result} />
   </div>
 )
}

