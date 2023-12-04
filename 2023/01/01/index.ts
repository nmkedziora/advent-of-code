// My puzzle answer was 55712.

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
  let calibrationValue = 0;

  for (let i = 0; i < input.length; i++) {
    const line = input[i];

    const digits = line
      .split("")
      .filter((char) => Number.isInteger(Number(char)));

    if (digits.length === 0) {
      continue;
    }

    const first = digits[0];
    const last = digits[digits.length - 1];

    calibrationValue += Number(first + last);
  }

  return calibrationValue;
}
