// My puzzle answer was 15632.

import * as fs from "fs";

console.time("solution");

const input = fs
  .readFileSync(require.resolve("../input.txt"), {
    encoding: "utf-8",
  })
  .split(/\n/)
  .map((pair) => pair.split(/\s/));

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

export function solution(input: string[][]): number {
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
    const [elf, me] = input[i] as [Elf, Me];

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
  }

  return totalScore;
}
