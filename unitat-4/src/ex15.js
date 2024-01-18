"use strict";

function asyncCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("You should see this message in console after 5 secs");
    }, 5000);
  });
}

asyncCall().then((res) => console.log(res));
