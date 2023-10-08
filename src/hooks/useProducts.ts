import { useState } from "react";
import { useActions } from "./useActions";
import { IProduct } from "src/types/products";
import { useTypedSelector } from "./useTypedSelector";

export const useProducts = (products: IProduct[]) => {
  const { setPage, setTerm, setTotal } = useActions();
  const { page, total, searchTerm } = useTypedSelector(
    (state) => state.products
  );

  const [filtered, setFiltered] = useState<IProduct[]>([]);
  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);

  return {
    setPage,
    setTerm,
    setTotal,
    page,
    total,
    searchTerm,
    filtered,
    currentProduct,
  };
};
