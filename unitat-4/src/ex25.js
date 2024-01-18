"use strict";

async function randomMathPromise(x) {
  const a = await randomAfter5Seconds();
  const b = await randomAfter5Seconds();
  const c = await randomAfter5Seconds();
  return x + a - b * c;
}
randomMathPromise(10).then((sum) => {
  console.log(sum);
});
