function multiply(num1, num2) {
  if (typeof num1 !== "string" || typeof num2 !== "string") {
    return "Ple Valided A Number";
  }
  const mult = num1 * num2;
  return mult;
}

const result = multiply(7.655645454 + 4, 5);

// console.log(result);

function fullName(fastName, lastName) {
  if (typeof fastName !== "string") {
    return "Plz  fast Name In String";
  } else if (typeof lastName !== "string") {
    return "plz Last name Input A String";
  }
  const full = fastName + " " + lastName;
  return full;
}
const names = fullName("55", 5);
console.log(names);

// price

function price(products) {
  if (typeof products !== "object") {
    return "plz push a objet";
  }
  const result = products.price;
  return result;
}
const productsResult = price({ name: "vico", price: 550, console: "black" });
// const productsResult = price("jbjh");
console.log(productsResult);

// Array

function number(numb) {
  if (Array.isArray(numb) === false) {
    return "plz add a array";
  }
  const resultArray = numb[1];
  return resultArray;
}
const numbers = number([50, 50]);
console.log(numbers);
