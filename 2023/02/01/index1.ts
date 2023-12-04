// My puzzle answer was 2810.

import * as fs from "fs";
import * as trace_events from "node:trace_events";

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
  const redRegex = /\b(\d+)\s+red\b/g;
  const greenRegex = /\b(\d+)\s+green\b/g;
  const blueRegex = /\b(\d+)\s+blue\b/g;

  let sumOfGameIDs = 0;

  for (let i = 0; i < input.length; i++) {
    const [game, cubes] = input[i].split(":");
    const subsets = cubes.split(";");

    let possible = true;

    for (let j = 0; j < subsets.length; j++) {
      const subset = subsets[j];

      const reds = parseCubes(subset, redRegex);
      const greens = parseCubes(subset, greenRegex);
      const blues = parseCubes(subset, blueRegex);

      if (!isCubesCountValid({ reds, greens, blues })) {
        possible = false;
        break;
      }
    }

    if (possible) {
      const gameId = game.replace("Game", "");

      sumOfGameIDs += parseInt(gameId, 10);
    }
  }

  return sumOfGameIDs;
}

function parseCubes(subset: string, redRegex: RegExp): number {
  return (subset.match(redRegex) || []).reduce(
    (accumulator, match) => accumulator + parseInt(match, 10),
    0,
  );
}

function isCubesCountValid({
  reds,
  greens,
  blues,
}: {
  reds: number;
  greens: number;
  blues: number;
}): boolean {
  return reds <= 12 && greens <= 13 && blues <= 14;
}
