"use client";
import { FC } from "react";
import Header from "src/components/header/header";
import ProductsList from "src/components/productsList/productsList";
import { useProducts } from "src/hooks/useProducts";
import tw from "tailwind-styled-components";

const ProductsPage: FC = () => {
  const {
    setPage,
    setTerm,
    setTotal,
    page,
    total,
    searchTerm,
    filtered,
    currentProduct,
  } = useProducts();

  console.log(filtered, page, total, "filtered");
  return (
    <StyledProducts>
      <Header />
      <ProductsList products={filtered} />
    </StyledProducts>
  );
};

const StyledProducts = tw.div`
w-full
min-h-screen
pb-10
`;

export default ProductsPage;
