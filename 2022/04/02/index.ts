// My puzzle answer was 534.

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
  let overlappingAssignmentPairs = 0;

  for (let i = 0; i < input.length; i++) {
    const pairs = input[i].split(",").map((pair) => pair.split("-"));
    const [firstStart, firstEnd] = pairs[0].map(Number);
    const [secondStart, secondEnd] = pairs[1].map(Number);

    if (firstEnd < secondStart || secondEnd < firstStart) {
      continue;
    } else {
      overlappingAssignmentPairs += 1;
    }
  }

  return overlappingAssignmentPairs;
}
