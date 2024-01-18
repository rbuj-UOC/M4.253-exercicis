"use strict";

(function () {
  console.log(10);
  setTimeout(function () {
    console.log(20);
  }, 1000);
  setTimeout(function () {
    console.log(30);
  }, 0);
  console.log(40);
})();