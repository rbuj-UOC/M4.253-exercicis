"use strict";

setTimeout(function () {
  console.log("Timeout");
}, 1000);

/* eslint-disable-next-line no-unused-vars */
function randomFunction() {
  console.log("Function");
}

console.log("Main Block");