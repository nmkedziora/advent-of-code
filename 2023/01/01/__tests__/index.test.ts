import { solution } from "../index";

const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

test("returns the sum of all of the calibration values", () => {
  const answer = solution(input);

  expect(answer).toEqual(142);
});
