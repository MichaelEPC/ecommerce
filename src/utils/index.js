export const numbersPagination = (array) => {
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

export const shortName = (packWords, minWords) => {
  let separatedWords = packWords.split(" ");
  if (minWords > separatedWords.length) minWords = separatedWords.length;
  let temporalArray = [];
  let shortedWords = "";
  separatedWords.forEach((words, index) => {
    temporalArray.push(words);
    if (index === minWords - 1) {
      shortedWords = temporalArray.join(" ");
    }
  });
  return shortedWords;
};
