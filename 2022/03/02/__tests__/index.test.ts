import { solution } from "../index";

const input = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg", // 18 (r)
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw", // 52 (z)
];

test("returns the sum of the priorities of item types that corresponds to the badges of each three-elf group", () => {
  const answer = solution(input);

  expect(answer).toEqual(70);
});
