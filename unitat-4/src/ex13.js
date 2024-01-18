"use strict";

function asyncPi() {
  const pi = 3.14;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pi);
    }, 5000);
  });
}

asyncPi();