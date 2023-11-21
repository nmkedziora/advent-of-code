import { solution } from "../index";

const input1 = [
  "A Y", // draw 3, rock 1
  "B X", // lose 0, rock 1
  "C Z", // win 6, rock 1
];

const input2 = [
  "A X", // lose 0, scissors 3
  "B Y", // draw 3, paper 2
  "C Z", // win 6, rock 1
];

test.each([
  {
    name: "input1",
    input: input1,
    expected: 12,
  },
  {
    name: "input2",
    input: input2,
    expected: 15,
  },
])(
  "returns total score if everything goes exactly according to strategy guide following the Elf's instructions for the second column",
  ({ input, expected }) => {
    const result = solution(input);

    expect(result).toEqual(expected);
  },
);
