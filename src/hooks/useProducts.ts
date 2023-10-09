import { useState, useEffect } from "react";
import { useActions } from "./useActions";
import { IProduct } from "src/types/products";
import { useTypedSelector } from "./useTypedSelector";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Products from "src/api/services";

export const useProducts = (productId?: number) => {
  const queryClient = useQueryClient();
  const res = queryClient.getQueryData(["get products"]) as IProduct[];
  const { data, isSuccess } = useQuery(
    ["get products"],
    () => Products.getProducts(),
    {
      select: ({ data }) => data,
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
    const from = page * itemsPerPage;
    const offset = from + itemsPerPage <= total ? from + itemsPerPage : total;
    if (isSuccess) {
      setTotal({ total: res.length });
      setTotalPagedProducts(res);
      const pagedArray = totalPaged.slice(from, offset);
      setFiltered(pagedArray);
    }

    //get current product
    if (isSuccess && productId) {
      const product = totalPaged.find((el: IProduct) => el.id === productId);
      if (product) setCurrentProduct(product);
    } else {
      setCurrentProduct(null);
    }

    //mocked search It seems https://run.mocky.io doesn't provide any search query params
    if (isSuccess && searchTerm) {
      const foundByTerm = totalPaged.filter((el) =>
        isMatchTerm(el, searchTerm)
      );
      setFiltered(foundByTerm);
      if (foundByTerm.length < itemsPerPage) setPage({ page: 1 });
      if (foundByTerm.length !== res.length)
        setTotal({ total: foundByTerm.length });
    }
  }, [
    data,
    isSuccess,
    itemsPerPage,
    page,
    productId,
    res,
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
    itemsPerPage,
  };
};
