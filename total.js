const shopping = [
  { name: "shampoo", price: 200, quantity: 3 },
  { name: "pent", price: 1200, quantity: 2 },
  { name: "belt", price: 14500, quantity: 1 },
  { name: "shirt", price: 400, quantity: 3 },
  { name: "sho", price: 200, quantity: 2 },
];

function shoppingCard(card) {
  let sum = 0;
  for (const cards of card) {
    sum = sum + cards.price;
  }
  return sum;
}

const taka = shoppingCard(shopping);

console.log(taka);
