import ReactPaginate from "react-paginate";
import classes from "./pagination.module.scss";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { FC } from "react";
import { IPagination } from "./types";

const Pagination: FC<IPagination> = ({ onChange, paginationLength, page }) => {
  const onPageChange = (selectedItem: { selected: number }) => {
    onChange({ page: selectedItem.selected });
  };

  return (
    <div className={classes.pagination}>
      <ReactPaginate
        className={classes.paginate}
        pageCount={Math.ceil(paginationLength)}
        breakLabel="..."
        pageClassName={classes.page}
        nextClassName={classes.arrow}
        previousClassName={classes.arrow}
        activeClassName={classes.active}
        onPageChange={onPageChange}
        previousLabel={<HiArrowSmLeft />}
        nextLabel={<HiArrowSmRight />}
        initialPage={0}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
      />
    </div>
  );
};
export default Pagination;
