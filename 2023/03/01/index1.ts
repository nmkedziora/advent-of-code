// My puzzle answer was 577663 - incorrect, too high
// My puzzle answer was 519922 - incorrect, too low
// My puzzle answer was 437035 - incorrect, too low

// My puzzle answer was 521601

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
  const PERIOD = ".";

  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    const row = input[i];
    const rowIndex = i;

    let number = "";

    for (let j = 0; j < row.length; j++) {
      const char = row[j];

      // check if char is a number
      if (parseInt(char) || parseInt(char) === 0) {
        // if it is keep building potential part number
        number += char;
        // a co jeśli liczba jest ostatnia w row
      } else {
        // this means this is the end of potential part number
        // char is not a number, so it can be either "." or symbol
        // if it is "."
        if (char === PERIOD && number !== "") {
          // now we can check if it is part number
          const currentRow = row;
          const previousRow = input[i - 1];
          const nextRow = input[i + 1];
          const startIndex = j - number.length - 1;
          const endIndex = j;

          const isPartNumber = checkNumber({
            currentRow,
            previousRow,
            nextRow,
            startIndex,
            endIndex,
          });

          if (isPartNumber) {
            sum += parseInt(number) || 0;
            number = "";
          } else {
            number = "";
          }
        } else if (char !== PERIOD) {
          // any other symbol means this is part number
          // so we can just update sum
          // and reset number
          sum += parseInt(number) || 0;
          number = "";
        }
      }
    }
    if (number !== "") {
      // now we can check if it is part number
      const currentRow = row;
      const previousRow = input[i - 1];
      const nextRow = input[i + 1];
      const startIndex = row.length - number.length - 1;
      const endIndex = row.length;

      const isPartNumber = checkNumber({
        currentRow,
        previousRow,
        nextRow,
        startIndex,
        endIndex,
      });

      if (isPartNumber) {
        sum += parseInt(number) || 0;
      }
    }
  }
  return sum;
}

function checkNumber({
  currentRow,
  previousRow,
  nextRow,
  startIndex,
  endIndex,
}: {
  currentRow: string;
  previousRow: string | undefined;
  nextRow: string | undefined;
  startIndex: number;
  endIndex: number;
}) {
  console.log({
    currentRow,
    previousRow,
    nextRow,
    startIndex,
    endIndex,
  });

  for (let i = startIndex; i <= endIndex; i++) {
    const current = currentRow[i];
    const previous = previousRow ? previousRow[i] : "";
    const next = nextRow ? nextRow[i] : "";

    const isCurrentPartNumber =
      !!current &&
      !parseInt(current) &&
      parseInt(current) !== 0 &&
      current !== ".";
    const isPreviousPartNumber =
      !!previous &&
      previous &&
      !parseInt(previous) &&
      parseInt(previous) !== 0 &&
      previous !== ".";
    const isNextPartNumber =
      !!next && next && !parseInt(next) && parseInt(next) !== 0 && next !== ".";

    const isPartNumber =
      isCurrentPartNumber || isPreviousPartNumber || isNextPartNumber;

    if (isPartNumber) {
      return true;
    }
  }
  return false;
}
