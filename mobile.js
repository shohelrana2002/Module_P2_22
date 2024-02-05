const phones = [
  {
    name: "samsung",
    price: 20000,
    camera: "36px",
    color: "Black",
    betray: "5000mp",
  },
  {
    name: "vivo",
    price: 23000,
    camera: "36px",
    color: "Black",
    betray: "5000mp",
  },
  {
    name: "opo",
    price: 24000,
    camera: "36px",
    color: "Black",
    betray: "5000mp",
  },
  {
    name: "Walton",
    price: 27000,
    camera: "36px",
    color: "Black",
    betray: "5000mp",
  },
  {
    name: "symphony",
    price: 12000,
    camera: "36px",
    color: "Black",
    betray: "5000mp",
  },
  {
    name: "iphone",
    price: 1200000,
    camera: "36px",
    color: "Black",
    betray: "5000mp",
  },
];

function cheepPhone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}
const mobile = cheepPhone(phones);
console.log("Low Price Best Phone", mobile);

// function cheepPhone(phones) {
//   let max = phones[0];
//   for (const phone of phones) {
//     if (phone.price > max.price) {
//       max = phone;
//     }
//   }
//   return max;
// }

// const highPrice = cheepPhone(phones);
// console.log(highPrice);
