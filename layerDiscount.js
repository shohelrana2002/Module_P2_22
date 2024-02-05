// fast 100---->100taka
//snd 1001-200-->90taka
// 201 above --->70 taka
function discount(quantity) {
  const product100Quantity = 100;
  const product200Quantity = 90;
  const product300Quantity = 70;

  if (quantity <= 100) {
    const total = product100Quantity * quantity;
    return total;
  } else if (quantity <= 200) {
    const fast100Quantity = 100 * product100Quantity;
    const remainQuantity = quantity * fast100Quantity;
    const remainQuantityTotal = quantity * product200Quantity;
    const total = fast100Quantity - remainQuantityTotal;
    return total;
  } else {
    const fast100Quantity = 100 * product100Quantity;
    const second100Total = 100 * product200Quantity;
    const remainQuantity = quantity - 200;
    const above200product = remainQuantity * product300Quantity;
    const total = fast100Quantity + second100Total + above200product;
    return total;
  }
}

const result = discount(201);
console.log(result);
