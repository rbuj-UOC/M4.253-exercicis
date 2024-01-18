"use strict";

function asyncFunction() {
  return new Promise(function (resolve, reject) {
    reject(new Error("reason"));
  });
}

let promise = job();

promise
  .then(function () {
    console.log("First then");
  })
  .then(function () {
    console.log("Second then");
  })
  .then(function () {
    console.log("Third then");
  })
  .catch(function () {
    console.log("First error");
  })
  .then(function () {
    console.log("Fourth then");
  });