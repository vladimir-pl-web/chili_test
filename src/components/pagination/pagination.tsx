"use client";
import { FC } from "react";
import { IPagination } from "./types";
import { Pagination as Pages } from "@nextui-org/react";

const Pagination: FC<IPagination> = ({ onChange, paginationLength, page }) => {
  const onPageChange = (selectedItem: number) => {
    console.log(selectedItem, "ddddd");
    onChange({ page: selectedItem });
  };

  return (
    <div className="mt-24 flex justify-center">
      <Pages
        color="success"
        variant="faded"
        boundaries={1}
        siblings={1}
        showShadow={true}
        total={paginationLength + 1}
        initialPage={1}
        onChange={(e) => onPageChange(e)}
      />
    </div>
  );
};
export default Pagination;
