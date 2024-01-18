"use strict";

let firstPromise = new Promise(function (resolve, reject) {
  setTimeout(resolve, 5000, "firstPromise");
});

let secondPromise = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000, "SecondPromise");
});

let promise = Promise.all([firstPromise, secondPromise]);

promise.then(function (data) {
  data.forEach(function (data) {
    console.log(data);
  });
  console.log("Finished");
});