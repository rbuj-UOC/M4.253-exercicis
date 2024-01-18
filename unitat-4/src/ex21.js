"use strict";

function* splitSentence(sentence) {
  const words = sentence.split(" ");
  for (const element of words) {
    yield element;
  }
}

const word = splitSentence("Hello World!");
console.log(word.next().value);
console.log(word.next().value);