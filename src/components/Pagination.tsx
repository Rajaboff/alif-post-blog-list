import { current } from "@reduxjs/toolkit";
import React from "react";

type Props = {
  dataPerPage: number;
  totalCount: number;
  paginate: Function;
  currentPage: number;
};

function Pagination({ dataPerPage, totalCount, paginate, currentPage }: Props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCount / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="flex flex-wrap">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number
                ? "opacity-100 font-medium"
                : "opacity-40 font-regular hover:opacity-90"
            }
          >
            <a
              className="p-[10px] mb-[5px]"
              href="#"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
