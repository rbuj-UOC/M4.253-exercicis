"use strict";

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First Promise");
    resolve("First");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Second Promise");
    resolve("Second");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Third promise");
    reject("Third");
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((error) => console.error(error));