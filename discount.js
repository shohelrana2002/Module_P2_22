// upto 100--->100
//more then 101-200--->90 taka;
//mor 201->--- 70 taka

function discount(products) {
  if (products <= 100) {
    const total = products * 100;
    return total;
  } else if (products <= 200) {
    const total = products * 90;
    return total;
  } else {
    const total = products * 70;
    return total;
  }
}

const totalPrice = discount(205);
console.log(totalPrice);
