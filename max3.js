const jim = 50;
const tim = 87;
const kim = 70;

if (jim > tim && jim > kim) {
  console.log("Jim is Big");
} else if (tim > jim && tim > kim) {
  console.log("Tim is Boss");
} else {
  console.log("Kis is big boss");
}

// function strat

function max3(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

const maxResult = max3(2050, 500, 854);
console.log("Max Number Is", maxResult);

/// shor cut

const max = Math.max(10, 20, 30, 40, 50, 50, 6, 10, 60, 60);
const maxCount = max + Math.max;
console.log(maxCount);
console.log(max);
