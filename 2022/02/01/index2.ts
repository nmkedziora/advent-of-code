// My puzzle answer was 15632.
// The bigger the input gets, the more performant this solution is.
// This one is the fastest for big inputs (tested on 16MB).

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
  const score = solution(line);
  answer = answer + score;
});
lineReader.on("close", function () {
  console.timeLog("solution");
  console.log(answer);
});

// ELF:
// A is Rock
// B is Paper
// C is Scissors

// ME:
// X is Rock
// Y is Paper
// Z is Scissors

// Rock defeats Scissors
// Scissors defeats Paper
// Paper defeats Rock

type Elf = "A" | "B" | "C";
type Me = "X" | "Y" | "Z";

export function solution(input: string): number {
  const shapeScore = {
    X: 1,
    Y: 2,
    Z: 3,
  };

  const outcomeScore = {
    lose: 0,
    draw: 3,
    win: 6,
  };

  let totalScore = 0;

  const elf = input[0] as Elf;
  const me = input[2] as Me;

  if (elf === "A" && me === "X") {
    totalScore = totalScore + outcomeScore.draw;
    totalScore = totalScore + shapeScore[me];
  } else if (elf === "B" && me === "Y") {
    totalScore = totalScore + outcomeScore.draw;
    totalScore = totalScore + shapeScore[me];
  } else if (elf === "C" && me === "Z") {
    totalScore = totalScore + outcomeScore.draw;
    totalScore = totalScore + shapeScore[me];
  } else if (elf === "A" && me === "Z") {
    totalScore = totalScore + outcomeScore.lose;
    totalScore = totalScore + shapeScore[me];
  } else if (elf === "B" && me === "X") {
    totalScore = totalScore + outcomeScore.lose;
    totalScore = totalScore + shapeScore[me];
  } else if (elf === "C" && me === "Y") {
    totalScore = totalScore + outcomeScore.lose;
    totalScore = totalScore + shapeScore[me];
  } else {
    totalScore = totalScore + outcomeScore.win;
    totalScore = totalScore + shapeScore[me];
  }

  return totalScore;
}
