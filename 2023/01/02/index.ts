// My puzzle answer was 55413.

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
  interface StringDigits {
    [key: string]: string;
  }

  const STRING_DIGITS: StringDigits = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
  };

  let calibrationValue = 0;
  let calibrations;

  for (let i = 0; i < input.length; i++) {
    const line = input[i];
    calibrations = Array(line.length);

    console.log(111, calibrations);

    // check for string digits
    for (const property in STRING_DIGITS) {
      const value = STRING_DIGITS[property];
      const firstIndex = line.indexOf(value);
      const lastIndex = line.lastIndexOf(value);

      if (firstIndex !== -1) {
        calibrations[firstIndex] = property;
      }

      if (lastIndex !== -1 && lastIndex !== firstIndex) {
        calibrations[lastIndex] = property;
      }
    }

    // check for digits digits
    for (let num = 1; num <= 9; num++) {
      const first = line.indexOf(num.toString());
      const last = line.lastIndexOf(num.toString());

      if (first !== -1) {
        calibrations[first] = num.toString();
      }

      if (last !== -1) {
        calibrations[last] = num.toString();
      }
    }

    // update calibrationValue
    calibrations = calibrations.filter(
      (element: string | undefined) => element !== undefined,
    );

    if (calibrations.length) {
      const first = calibrations[0];
      const last = calibrations[calibrations.length - 1];

      calibrationValue += Number(first + last);
    }
  }

  return calibrationValue;
}
