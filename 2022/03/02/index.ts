// My puzzle answer was 2604.

import * as fs from "fs";

console.time("solution");

const input = fs
  .readFileSync(require.resolve("../input.txt"), {
    encoding: "utf-8",
  })
  .split(/\r?\n/);

const answer = solution(input);

console.timeLog("solution");
console.log(answer);

export function solution(input: string[]) {
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

  for (let i = 0; i < input.length; i += 3) {
    let badge = "";

    const rucksack1 = input[i];
    const rucksack2 = new Set(input[i + 1]);
    const rucksack3 = new Set(input[i + 2]);

    // find sets intersection
    for (let j = 0; j < rucksack1.length; j++) {
      const item = rucksack1[j];

      if (rucksack2.has(item) && rucksack3.has(item)) {
        badge = item;
        break;
      }
    }
    prioritiesSum += priorities.get(badge)!;
  }
  return prioritiesSum;
}
