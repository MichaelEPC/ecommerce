export const numbersPagination = (array, maxProducts) => {
  let products = 0;
  let paginationNum = [1];
  let pagination = 1;
  for (let index = 0; index < array.length; index++) {
    products++;
    if (products == 15) {
      pagination++;
      paginationNum.push(pagination);
    }
  }
  return paginationNum;
};
