"use client";
import { FC } from "react";
import { IProducts } from "./types";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "src/app/products/page";

const ProductsList: FC<IProducts> = ({ products }) => {

  const { data, isFetching, isLoading, refetch, isSuccess, isError } = useQuery(
    ["get products"],
    () => getProducts(),
    {
      select: ((data) => data),
      initialData: products ,
      enabled: true,
      staleTime: Infinity
    }
  );
console.log(isLoading, isFetching, "datalist")
  return <div>Product</div>;
};

export default ProductsList;
