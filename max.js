const tomoto = 30;
const lau = 80;

if (lau > tomoto) {
  console.log("Lau er Dam beshi");
} else {
  console.log("Tomotor er Dam beshi");
}

// funvation

function maxNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const maxNumberResult = maxNumber(404, 50);
console.log("Max Number Is", maxNumberResult);
