"use strict";

function isANumber(data) {
  return new Promise((resolve, reject) => {
    if (isNaN(data)) {
      setTimeout(() => {
        reject(new Error("Not a number"));
      }, 1000);
    } else {
      setTimeout(() => {
        resolve(`${data} is a number`);
      }, 11000);
    }
  });
}

isANumber(NaN);