"use strict";

const mainFunction = (callback) => {
  setTimeout(() => {
    callback([10, 3, 7]);
  }, 3000);
};

const addFunction = (array) => {
  let sum = 0;
  for (const i of array) {
    sum += i;
  }
  console.log(sum);
};

mainFunction(addFunction);