function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const chairWood = 3;
  const tableWood = 10;
  const bedWood = 50;
  const chairTotalWood = chairQuantity * chairWood;
  const tableTotalWood = tableQuantity * tableWood;
  const bedTotalWood = bedQuantity * bedWood;

  const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
  return totalWood;
}

const wood = woodQuantity(0, 0, 3);
console.log("Total Wood", wood);

/// task

function market(shirt, pent, sho) {
  const priceShirt = 400;
  const pricePent = 300;
  const priceSho = 900;

  const priceShirtTotal = shirt * priceShirt;
  const pricePentTotal = pent * pricePent;
  const priceShoTotal = sho * priceSho;

  const totalMarket = priceShirtTotal + pricePentTotal + priceShoTotal;
  return totalMarket;
}

const takaSes = market(20, 10, 1);
console.log(takaSes);
