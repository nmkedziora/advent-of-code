import { solution } from "../index1";

const input1 = [
  ["A", "Y"], // win 6, shape 2
  ["B", "X"], // lose 0, shape 1
  ["C", "Z"], // draw 3, shape 3
];

const input2 = [
  ["A", "X"], // draw 3, shape 1
  ["B", "Y"], // draw 3, shape 2
  ["C", "Z"], // draw 3, shape 3
];

test.each([
  {
    name: "input1",
    input: input1,
    expected: 15,
  },
  {
    name: "input2",
    input: input2,
    expected: 15,
  },
])(
  "returns total score if everything goes exactly according to strategy guide ($name)",
  ({ input, expected }) => {
    const result = solution(input);

    expect(result).toEqual(expected);
  },
);
