"use strict";

function greet(name, cb, cbName) {
  console.log(`Hello Mr. ${name}`);
  cb(cbName);
}

function farewell(name) {
  console.log(`Goodbye Mr. ${name}`);
}

setTimeout(greet, 3000, "Pepito", farewell, "Jose");