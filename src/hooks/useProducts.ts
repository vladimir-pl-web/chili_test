import { useState, useEffect } from "react";
import { useActions } from "./useActions";
import { IProduct } from "src/types/products";
import { useTypedSelector } from "./useTypedSelector";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "src/app/products/page";

export const useProducts = (productId?: number) => {
  const { data, isFetching, isLoading, refetch, isSuccess, isError } = useQuery(
    ["get products"],
    () => getProducts(),
    {
      select: (data) => data,
      initialData: [],
      enabled: true,
      staleTime: Infinity,
    }
  );

  const { setPage, setTerm, setTotal } = useActions();
  const { page, total, searchTerm, itemsPerPage } = useTypedSelector(
    (state) => state.products
  );

  const [totalPaged, setTotalPagedProducts] = useState<IProduct[]>([]);
  const [filtered, setFiltered] = useState<IProduct[]>([]);
  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);
  const isMatchTerm = (item: IProduct, term: string) => {
    const { id, ...rest } = item;
    const values = Object.values(rest);
    return values.some((el) =>
      el.toString().toLowerCase().includes(term.toLowerCase())
    );
  };

  useEffect(() => {
    //mocked pagination. It seems https://run.mocky.io doesn't provide query params as ?page=
    const from = (page - 1) * itemsPerPage;
    const offset = from + itemsPerPage <= total ? from + itemsPerPage : total;
    if (data) {
      setTotal({ total: data.length });
      setTotalPagedProducts(data);
      const pagedArray = totalPaged.slice(from, offset);
      setFiltered(pagedArray);
    }

    //get current product
    if (productId) {
      const product = totalPaged.find((el: IProduct) => el.id === productId);
      if (product) setCurrentProduct(product);
    } else {
      setCurrentProduct(null);
    }

    //mocked search It seems https://run.mocky.io doesn't provide any search query params
    if (searchTerm) {
      const foundByTerm = totalPaged.filter((el) =>
        isMatchTerm(el, searchTerm)
      );
      setFiltered(foundByTerm);
      if (foundByTerm.length < itemsPerPage) setPage({ page: 1 });
      console.log(foundByTerm.length !== data.length, "length");
      if (foundByTerm.length !== data.length)
        setTotal({ total: foundByTerm.length });
    }
  }, [
    data,
    itemsPerPage,
    page,
    productId,
    searchTerm,
    setPage,
    setTotal,
    total,
    totalPaged,
  ]);

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
