const shopping = [
  { name: "shampoo", price: 200, quantity: 3 },
  { name: "pent", price: 1200, quantity: 2 },
  { name: "belt", price: 14500, quantity: 1 },
  { name: "shirt", price: 400, quantity: 3 },
  { name: "sho", price: 200, quantity: 2 },
];

// function shoppingCards(card) {
//   let total = 0;
//   for (const cards of card) {
//     const thisProductCost = cards.price * cards.quantity;
//     total = total + thisProductCost;
//   }
//   return total;
// }

// const cardTotal = shoppingCards(shopping);
// console.log("Total Price Is:", cardTotal);

function shoppingCard(cards) {
  let total = 0;
  for (const card of cards) {
    const totalCost = card.price * card.quantity;
    total = total + totalCost;
  }
  return total;
}

const totalCostShopping = shoppingCard(shopping);
console.log(totalCostShopping);
