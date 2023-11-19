import { solution } from "../index";

const input = [
  "1000",
  "2000",
  "3000",
  "",
  "4000",
  "",
  "5000",
  "6000",
  "",
  "7000",
  "8000",
  "9000",
  "",
  "10000",
];

test("returns number of calories carried by the elf carrying the most calories", () => {
  const answer = solution(input);

  expect(answer).toEqual(24000);
});
