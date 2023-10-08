"use client"

import { FC } from "react";
import {  useQueryClient } from "@tanstack/react-query";


const FilteredList:FC = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData(["get products"])
  console.log(data, "datafiltered")
  return <div>
    Beliberdah
    </div>;
};

export default FilteredList;