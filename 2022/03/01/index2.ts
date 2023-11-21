// My puzzle answer was 7746.
// This solution takes longer (for the original input, 300 lines) than solution from index1.ts
// 7.791ms vs 0.974ms.
// As well as for bigger input (9900 lines), 57.467ms vs 18.093

import * as fs from "fs";
import * as readline from "readline";

let answer = 0;

const fileStream = fs.createReadStream("../input.txt", {
  encoding: "utf-8",
});
const lineReader = readline.createInterface({
  input: fileStream,
});

console.time("solution");

lineReader.on("line", function (line) {
  const priority = solution(line);
  answer = answer + priority;
});

lineReader.on("close", function () {
  console.timeLog("solution");
  console.log(answer);
});

export function solution(input: string) {
  const priorities = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", 5],
    ["f", 6],
    ["g", 7],
    ["h", 8],
    ["i", 9],
    ["j", 10],
    ["k", 11],
    ["l", 12],
    ["m", 13],
    ["n", 14],
    ["o", 15],
    ["p", 16],
    ["q", 17],
    ["r", 18],
    ["s", 19],
    ["t", 20],
    ["u", 21],
    ["v", 22],
    ["w", 23],
    ["x", 24],
    ["y", 25],
    ["z", 26],
    ["A", 27],
    ["B", 28],
    ["C", 29],
    ["D", 30],
    ["E", 31],
    ["F", 32],
    ["G", 33],
    ["H", 34],
    ["I", 35],
    ["J", 36],
    ["K", 37],
    ["L", 38],
    ["M", 39],
    ["N", 40],
    ["O", 41],
    ["P", 42],
    ["Q", 43],
    ["R", 44],
    ["S", 45],
    ["T", 46],
    ["U", 47],
    ["V", 48],
    ["W", 49],
    ["X", 50],
    ["Y", 51],
    ["Z", 52],
  ]);
  let prioritiesSum = 0;
  let duplicatedItem = "";

  const half = input.length / 2;
  const firstCompartment = input.slice(0, half);
  const secondCompartment = new Set(input.slice(half));

  // find sets intersection
  for (let i = 0; i < firstCompartment.length; i++) {
    const item = firstCompartment[i];

    if (secondCompartment.has(item)) {
      duplicatedItem = item;
      break;
    }
  }

  prioritiesSum += priorities.get(duplicatedItem)!;

  return prioritiesSum;
}
