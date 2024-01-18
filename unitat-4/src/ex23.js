"use strict";

async function processRandomData(url) {
  let v;
  try {
    v = await getRandomDataFromUrl(url);
  } catch (e) {
    v = await sendErrorMessage(url);
  }
  return doSomethingCoolWithData(v);
}
