"use strict";

function greet(name, cb) {
  console.log(`Hello Mr. ${name}`);
  cb();
}

function farewell() {
  console.log("Goodbye Mr. Jose");
}

greet("Pepito", farewell);