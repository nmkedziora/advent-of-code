// My puzzle answer was 203203.

//import * as fs from "fs";
//
//const input = fs
//  .readFileSync(require.resolve("../input.txt"), {
//    encoding: "utf-8",
//  })
//  .split(/\r?\n/);
//console.log(input);
//const answer = solution(input);
//console.log(answer);

// 1st attempt
//export function solution(input: string[]) {
//  if (!input.length) {
//    return;
//  }
//
//  const calories: number[] = [];
//  let sum = 0;
//
//  input.forEach((calorie) => {
//    if (calorie) {
//      sum = sum + Number(calorie);
//    } else {
//      calories.push(sum);
//      sum = 0;
//    }
//  });
//  calories.push(sum);
//
//  calories.sort((a, b) => {
//    if(a > b) {
//      return -1;
//    } else if(a < b) {
//      return 1
//    }
//    return 0;
//  });
//
//
//  return calories[0] + calories[1] + calories[2];
//}

// 2nd attempt
//export function solution(input: string[]) {
//  if (!input.length) {
//    return;
//  }
//
//  let max = [0, 0, 0];
//  let sum = 0;
//
//  input.forEach((calorie) => {
//    if (calorie) {
//      sum = sum + Number(calorie);
//    } else {
//      updateMax(sum, max);
//      sum = 0;
//    }
//  });
//
//  updateMax(sum, max);
//  sum = 0;
//
//  return max[0] + max[1] + max[2];
//}
//
//function updateMax(sum, max) {
//  for (let i = 0; i < 3; i++) {
//    if (sum > max[i]) {
//      max.splice(i, 0, sum);
//      max.pop();
//
//      break;
//    }
//  }
//}

export function solution(input: string[]) {
  if (!input.length) {
    return;
  }

  let max1 = 0;
  let max2 = 0;
  let max3 = 0;
  let sum = 0;

  input.forEach((calorie) => {
    if (calorie) {
      sum = sum + Number(calorie);
    } else {
      ({ sum, max1, max2, max3 } = updateMax({ sum, max1, max2, max3 }));
    }
  });
  ({ sum, max1, max2, max3 } = updateMax({ sum, max1, max2, max3 }));

  return max1 + max2 + max3;
}

function updateMax({ sum, max1, max2, max3 }) {
  if (sum > max1) {
    max3 = max2;
    max2 = max1;
    max1 = sum;

    sum = 0;
  } else if (sum > max2) {
    max3 = max2;
    max2 = sum;

    sum = 0;
  } else if (sum > max3) {
    max3 = sum;

    sum = 0;
  } else {
    sum = 0;
  }

  return { sum, max1, max2, max3 };
}
