// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Problem

// Given a string, count the number of each letter occurrences
// APPLE
// Result
// {
// "a": 1,
// "p": 2,
// "l": 1,
// "e": 1
// }

function getCharCount(input) {
  const charMap = new Map();
  (input || "")
    .toLowerCase()
    .split("") // ["a" , "p" ....]
    .forEach(char => {
      const hasElement = charMap.has(char);
      charMap.set(char, hasElement ? charMap.get(char) + 1 : 1);
    });

  return charMap;
}

console.log(JSON.stringify(getCharCount("Apple")));
