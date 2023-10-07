"use client";
import { FC } from "react";
import { IProducts } from "./types";
import { useQuery } from "@tanstack/react-query";
import Products from "src/api/services";

const ProductsList: FC<IProducts> = ({ products }) => {
  const { data, isFetching, refetch, isSuccess, isError } = useQuery(
    ["get product"],
    () => Products.getProducts(),
    {
      initialData: products,
      enabled: false,
    }
  );
  console.log(data, isFetching, isSuccess, isError, "ffffffff");
  return <div>Product</div>;
};

export default ProductsList;
