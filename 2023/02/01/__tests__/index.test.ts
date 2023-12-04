import { solution } from "../index1";

const input1 = [
  "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
  "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
  "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
  "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
  "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
];

const input2 = [
  "Game 81: 2 green, 9 red; 2 green, 2 blue, 7 red; 12 red, 7 green; 8 green, 3 red, 3 blue",
  "Game 90: 10 green, 12 red, 2 blue; 7 red, 7 blue, 8 green; 2 blue, 11 red, 7 green; 6 green, 5 red, 2 blue; 7 red, 10 green",
  "Game 96: 12 green, 2 blue; 11 green, 3 blue; 3 red, 2 green, 5 blue; 12 green, 2 blue, 4 red; 2 blue, 1 green, 1 red; 3 red, 11 green, 3 blue",
];

test.each([
  { input: input1, expected: 8 },
  { input: input2, expected: 267 },
])(
  "returns the sum of the IDs of games which would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes",
  ({ input, expected }) => {
    const answer = solution(input);

    expect(answer).toEqual(expected);
  },
);
