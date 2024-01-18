"use strict";

setTimeout(function () {
  console.log("Timeout");
}, 1000);

/* Immediately invoked function expression */
(function randomFunction() {
  console.log("Function");
})();

console.log("Main Block");