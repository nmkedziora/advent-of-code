// My puzzle answer was 14416.

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
// X means I need to lose
// Y means I need to end round in a draw
// Z means I need to win

// Rock defeats Scissors
// Scissors defeats Paper
// Paper defeats Rock

type Elf = "A" | "B" | "C";
type Outcome = "X" | "Y" | "Z";

export function solution(input: string[]): number {
  const shapeScore = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };

  const outcomeScore = {
    lose: 0,
    draw: 3,
    win: 6,
  };

  let totalScore = 0;

  for (let i = 0; i < input.length; i++) {
    const elf = input[i][0] as unknown as Elf;
    const outcome = input[i][2] as unknown as Outcome;

    if (outcome === "X") {
      totalScore += outcomeScore.lose;

      if (elf === "A") {
        totalScore += shapeScore.scissors;
      }
      if (elf === "B") {
        totalScore += shapeScore.rock;
      }
      if (elf === "C") {
        totalScore += shapeScore.paper;
      }
    }

    if (outcome === "Y") {
      totalScore += outcomeScore.draw;

      if (elf === "A") {
        totalScore += shapeScore.rock;
      }
      if (elf === "B") {
        totalScore += shapeScore.paper;
      }
      if (elf === "C") {
        totalScore += shapeScore.scissors;
      }
    }

    if (outcome === "Z") {
      totalScore += outcomeScore.win;

      if (elf === "A") {
        totalScore += shapeScore.paper;
      }
      if (elf === "B") {
        totalScore += shapeScore.scissors;
      }
      if (elf === "C") {
        totalScore += shapeScore.rock;
      }
    }
  }

  return totalScore;
}
