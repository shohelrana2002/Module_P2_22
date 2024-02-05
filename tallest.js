const fit = [60, 61, 62, 63, 5001, 64, 65, 66, 67, 68, 69, 70, 72, 104];

function fitCount(height) {
  let max = height[0];
  for (const heights of height) {
    if (heights > max) {
      max = heights;
    }
  }
  return max;
}

const result = fitCount(fit);
console.log(result);

////

const numb = [10, 20, 5, 454, 514, 54, 51, 454, 514, 5, 4, 54];

function numbers(num) {
  maxNum = num[0];
  for (const nums of num) {
    if (nums < maxNum) {
      maxNum = nums;
    }
  }
  return maxNum;
}

const numberMax = numbers(numb);
console.log(numberMax);
