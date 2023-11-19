import { solution } from "../index";

const input1 = [
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

const input2 = [
  "3120",
  "4127",
  "1830",
  "1283",
  "",
  "4841",
  "6135",
  "5806",
  "",
  "7845",
  "9191",
  "9656",
  "",
];

const input3 = ["49147", "", "43877", "", "44178", "", "46615"];

test.each([
  {
    name: "input1",
    input: input1,
    expected: 45000,
  },
  {
    name: "input2",
    input: input2,
    expected: 53834,
  },
  {
    name: "input3",
    input: input3,
    expected: 139940,
  },
])(
  "returns total number of calories carried by the top three elves carrying the most calories ($name)",
  ({ input, expected }) => {
    const answer = solution(input);

    expect(answer).toEqual(expected);
  },
);
