"use strict";

async function loadJsonFromAPI(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}

loadJsonFromAPI("https://randomservice.com/apiendpoint").catch(alert);
