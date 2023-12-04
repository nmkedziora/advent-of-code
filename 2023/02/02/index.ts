// My puzzle answer was 69110.

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
  let power = 0;

  for (let i = 0; i < input.length; i++) {
    const redRegex = /\b(\d+)\s+red\b/g;
    const greenRegex = /\b(\d+)\s+green\b/g;
    const blueRegex = /\b(\d+)\s+blue\b/g;

    const [_, cubes] = input[i].split(":");

    const reds = (cubes.match(redRegex) || []).map((red) => parseInt(red));
    const greens = (cubes.match(greenRegex) || []).map((green) =>
      parseInt(green),
    );
    const blues = (cubes.match(blueRegex) || []).map((blue) => parseInt(blue));

    power += Math.max(...reds) * Math.max(...greens) * Math.max(...blues);
  }

  return power;
}
