// My puzzle answer was 15632.

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

export function solution(input: string[]): number {
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

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "A X") {
      totalScore = totalScore + outcomeScore.draw;
      totalScore = totalScore + shapeScore.X;
    } else if (input[i] === "B Y") {
      totalScore = totalScore + outcomeScore.draw;
      totalScore = totalScore + shapeScore.Y;
    } else if (input[i] === "C Z") {
      totalScore = totalScore + outcomeScore.draw;
      totalScore = totalScore + shapeScore.Z;
    } else if (input[i] === "A Z") {
      totalScore = totalScore + outcomeScore.lose;
      totalScore = totalScore + shapeScore.Z;
    } else if (input[i] === "B X") {
      totalScore = totalScore + outcomeScore.lose;
      totalScore = totalScore + shapeScore.X;
    } else if (input[i] === "C Y") {
      totalScore = totalScore + outcomeScore.lose;
      totalScore = totalScore + shapeScore.Y;
    } else if (input[i] === "C X") {
      totalScore = totalScore + outcomeScore.win;
      totalScore = totalScore + shapeScore.X;
    } else if (input[i] === "B Z") {
      totalScore = totalScore + outcomeScore.win;
      totalScore = totalScore + shapeScore.Z;
    } else if (input[i] === "A Y") {
      totalScore = totalScore + outcomeScore.win;
      totalScore = totalScore + shapeScore.Y;
    }
  }

  return totalScore;
}
