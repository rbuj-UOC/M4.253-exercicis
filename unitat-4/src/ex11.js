"use strict";

const visited = [];

function walk() {
  setTimeout(function () {
    visited.push("London");
    setTimeout(function () {
      visited.push("Milan");
      setTimeout(function () {
        visited.push("Madrid");
        setTimeout(function () {
          visited.push("Barcelona");
          console.log(visited.toString());
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

walk();