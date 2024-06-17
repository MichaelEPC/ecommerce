import React from "react";
import "./style.css";

function Pagination({
  arrayProducts,
  maxProducts,
  currentPage,
  setCurrentPage,
}) {
  const numbersPagination = (array) => {
    let products = 0;
    let paginationNum = [1];
    let pagination = 1;
    for (let index = 0; index < array.length; index++) {
      products++;
      if (products == maxProducts) {
        pagination++;
        paginationNum.push(pagination);
      }
    }
    return paginationNum;
  };
  return (
    <section className="pagination flex items-center justify-around rounded-lg bg-white">
      {numbersPagination(arrayProducts)?.map((number) => (
        <div
          key={number}
          className={`divItemsPagination flex h-full w-12 cursor-pointer items-center justify-center rounded-md border-2 border-principal-blue transition-all duration-200 ${currentPage === number ? "activePagination" : ""}`}
          onClick={() => {
            setCurrentPage(number);
          }}
        >
          <div className="flex h-full w-full items-center justify-center">
            <p
              className={`paginationText font-semibold ${currentPage === number ? "activePaginationText" : ""}`}
            >
              {number}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Pagination;
