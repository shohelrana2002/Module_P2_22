const price = [10000, 3000, 5000, 40000, 4500, 100000, 70000];
function getMin(numbers) {
  let min = numbers[0];
  for (const number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}
const cheap = getMin(price);
console.log("Minimum Price is:", cheap);
