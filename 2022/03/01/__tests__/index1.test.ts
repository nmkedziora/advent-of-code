import {solution} from "../index1";

const input = [
  "vJrwpWtwJgWrhcsFMMfFFhFp", // 16 (p)
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL", // 38 (L)
  "PmmdzqPrVvPwwTWBwg", // 42 (P)
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn", // 22 (v)
  "ttgJtRGJQctTZtZT", // 20 (t)
  "CrZsJsPPZsGzwwsLwLmpwMDw", // 19 (s)
]

test("returns sum of the priorities of item types that appears in both compartments of each rucksack ", () => {
  const answer = solution(input);
  
  expect(answer).toEqual(157);
});