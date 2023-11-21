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
  let containedAssignmentPairs = 0;

  for (let i = 0; i < input.length; i++) {
    const pairs = input[i].split(",").map((p) => p.split("-"));
    const [firstStart, firstEnd] = pairs[0].map(Number);
    const [secondStart, secondEnd] = pairs[1].map(Number);

    if (
      (firstStart >= secondStart && firstEnd <= secondEnd) ||
      (secondStart >= firstStart && secondEnd <= firstEnd)
    ) {
      containedAssignmentPairs += 1;
    }
  }

  return containedAssignmentPairs;
}
