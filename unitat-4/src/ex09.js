"use strict";

function builtCar(name, cb) {
  setTimeout(() => {
    console.log("Building a" + " " + name);
  }, 1000);
  cb();
}

function defineCar(name) {
  console.log("This car is a" + " " + name);
}

builtCar("Ford Focus", defineCar);