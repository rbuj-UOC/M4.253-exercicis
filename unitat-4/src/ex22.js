"use strict";

function* limitedFibonacci(n) {
  let [a, b] = [0, 1];
  while (a <= n) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const seq = limitedFibonacci(5);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);