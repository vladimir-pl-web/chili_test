
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { productsSlice } from "../store/products/reducer";

const allActions = {
  ...productsSlice.actions,
};

export const useActions = () => {
 const dispatch = useDispatch();

 return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
}