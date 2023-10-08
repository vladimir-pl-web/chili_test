import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState, IPage, ISearch, ITotal } from "src/types/products";

const initialState: IInitialState = {
  page: 1,
  searchTerm: "",
  total: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<IPage>) => {
      state.page = action.payload.page;
    },
    setTotal: (state, action: PayloadAction<ITotal>) => {
      state.total = action.payload.total;
    },
    setTerm: (state, action: PayloadAction<ISearch>) => {
      state.searchTerm = action.payload.searchTerm;
    },
  },
});
