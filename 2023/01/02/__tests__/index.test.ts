import { solution } from "../index";

const input1 = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];

const input2 = ["51591twosix4dhsxvgghxq"];

test.each([
  { input: input1, expected: 281 },
  { input: input2, expected: 54 },
])(
  "returns the sum of all of the calibration values (if some of the digits are spelled out with letters)",
  ({ input, expected }) => {
    const answer = solution(input);

    expect(answer).toEqual(expected);
  },
);
