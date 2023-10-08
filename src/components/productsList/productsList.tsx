"use client";
import { FC } from "react";
import { IProducts } from "./types";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "src/app/products/page";
import { useProducts } from "src/hooks/useProducts";

const ProductsList: FC<IProducts> = ({ products }) => {
  const { data, isFetching, isLoading, refetch, isSuccess, isError } = useQuery(
    ["get products"],
    () => getProducts(),
    {
      select: (data) => data,
      initialData: products,
      enabled: true,
      staleTime: Infinity,
    }
  );
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
  return <div>Product</div>;
};

export default ProductsList;
