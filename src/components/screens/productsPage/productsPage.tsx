"use client";
import { FC } from "react";
import Header from "src/components/header/header";
import Pagination from "src/components/pagination/pagination";
import ProductsList from "src/components/productsList/productsList";
import { useProducts } from "src/hooks/useProducts";
import tw from "tailwind-styled-components";

const ProductsPage: FC = () => {
  const { setPage, page, total, itemsPerPage, filtered } = useProducts();
  const isPagination = total > filtered.length;
  return (
    <StyledProducts>
      <Header />
      <ProductsList products={filtered} />

      {isPagination && (
        <Pagination
          page={page}
          onChange={setPage}
          paginationLength={total / itemsPerPage}
        />
      )}
    </StyledProducts>
  );
};

const StyledProducts = tw.div`
w-full
min-h-screen
pb-10
`;

export default ProductsPage;
