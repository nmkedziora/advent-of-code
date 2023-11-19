// My puzzle answer was 68292.

import * as fs from "fs";

const input = fs
  .readFileSync(require.resolve("../input.txt"), {
    encoding: "utf-8",
  })
  .split(/\r?\n/);

console.log(input);
const answer = solution(input);
console.log(answer);

export function solution(input: string[]) {
  if (!input.length) {
    return;
  }

  let max = 0;
  let sum = 0;

  input.forEach((calorie) => {
    if (calorie) {
      sum = sum + Number(calorie);
    } else if (sum > max) {
      max = sum;
      sum = 0;
    } else {
      sum = 0;
    }
  });

  return max;
}
