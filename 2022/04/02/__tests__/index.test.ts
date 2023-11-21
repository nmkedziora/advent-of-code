import { solution } from "../index";

const input = [
  "2-4,6-8",
  "2-3,4-5",
  "5-7,7-9",
  "2-8,3-7",
  "6-6,4-6",
  "2-6,4-8",
];

test("returns number of assignment pairs where the ranges overlap", () => {
  const answer = solution(input);

  expect(answer).toEqual(4);
});
