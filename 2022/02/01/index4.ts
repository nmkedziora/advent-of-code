// My puzzle answer was 15632.
// This solution merges solution 3 (faster than 1) and reading input line by line (faster than reading all at once)

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

    if (input === "A X") {
      totalScore = totalScore + outcomeScore.draw;
      totalScore = totalScore + shapeScore.X;
    } else if (input === "B Y") {
      totalScore = totalScore + outcomeScore.draw;
      totalScore = totalScore + shapeScore.Y;
    } else if (input === "C Z") {
      totalScore = totalScore + outcomeScore.draw;
      totalScore = totalScore + shapeScore.Z;
    } else if (input === "A Z") {
      totalScore = totalScore + outcomeScore.lose;
      totalScore = totalScore + shapeScore.Z;
    } else if (input === "B X") {
      totalScore = totalScore + outcomeScore.lose;
      totalScore = totalScore + shapeScore.X;
    } else if (input === "C Y") {
      totalScore = totalScore + outcomeScore.lose;
      totalScore = totalScore + shapeScore.Y;
    } else if (input === "C X") {
      totalScore = totalScore + outcomeScore.win;
      totalScore = totalScore + shapeScore.X;
    } else if (input === "B Z") {
      totalScore = totalScore + outcomeScore.win;
      totalScore = totalScore + shapeScore.Z;
    } else if (input === "A Y") {
      totalScore = totalScore + outcomeScore.win;
      totalScore = totalScore + shapeScore.Y;
    }

  return totalScore;
}
